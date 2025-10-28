"use server"

import nodemailer from "nodemailer"



export const validateRecaptcha = async (token) => {
    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        })
  
        if(!response.ok) {
            throw new Error("Failed to validate reCAPTCHA")
        }
  
        const data = await response.json()
  
        console.log("Logging data from reCAPTCHA validation:", data)
        
        // Google always returns HTTP 200, but uses data.success to indicate validation result
        if (!data.success) {
            throw new Error(data["error-codes"] || "reCAPTCHA validation failed")
        }
        
        return {success: true}
    } catch (error) {
        console.log("Error validating reCAPTCHA:", error.message)
        return {success: false, error: error.message}
    }
  }



  export async function submitContactForm(formData) {
    const name = formData.get("name")
    const phone = formData.get("phone")
    const email = formData.get("email")
    const message = formData.get("message")
  
    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "terry@strictlywebdev.com",
        pass: process.env.STRICTLY_EMAIL_APP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })
  
    const mailOptions = {
      from: "terry@strictlywebdev.com",
      to: "orestakisil@kw.com",
      bcc: "terry@strictlywebdev.com",
      subject: "Kisil RES Contact Submission",
      html: `
        <strong>Name:</strong><br />
        <small>${name}</small>
        <hr>
        <strong>Phone:</strong><br />
        <small>${phone}</small>
        <hr>
        <strong>Email:</strong><br />
        <small>${email}</small>
        <hr>
        <strong>Message:</strong><br />
        <small>${message}</small>
      `,
    }
  
    try {
      await transporter.sendMail(mailOptions)
      return { success: true, message: "Email sent successfully" }
    } catch (error) {
      console.error("Email send error:", error)
      return { success: false, message: "Email failed to send" }
    }
  }
  