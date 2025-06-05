"use server"

import nodemailer from "nodemailer"



export const registerBookClubMember = async (formData) => {

    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const phoneNumber = formData.get("phoneNumber")
    const email = formData.get("email")

    console.log("Logging formData from server action:", firstName, lastName, phoneNumber, email)


    const registrationsGoogleScriptURL = process.env.BOOK_CLUB_REGISTRATION_APPS_SCRIPT_URL;


    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "terry@strictlywebdev.com",
        pass: process.env.STRICTLY_EMAIL_APP_PASS
    }
    })


    const mailOptions = {
        from: "terry@strictlywebdev.com",
        to: ["terry@strictlywebdev.com", "orestakisil@kw.com"],
        subject: "New Oresta Book Club Registration",
        html: `
            <strong>Name:</strong><br />
            <small>${firstName} ${lastName}</small>
            <hr>
            <strong>Phone:</strong><br />
            <small>${phoneNumber}</small>
            <hr>
            <strong>Email:</strong><br />
            <small>${email}</small>
        `
    }


    try {

        // Send email notification
        try {
            await transporter.sendMail(mailOptions);
            console.log("Email sent successfully");
        } catch (emailError) {
            console.log("Email failed, but continuing with registration:", emailError.message);
        }

        // Run this no matter if email send fails
        const res = await fetch(registrationsGoogleScriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                phoneNumber,
                email
            })
        })

        if(!res.ok) {
            throw new Error("Failed to add registration to google spreadsheet")
        }

        console.log("It worked, from Google API!!!")
        return {success: true}
    } catch (error) {
        console.log("An error occurred:", error.message)
        return {success: false}
    }
    

    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve({success: true})
    //     }, 2000)
    // })

}