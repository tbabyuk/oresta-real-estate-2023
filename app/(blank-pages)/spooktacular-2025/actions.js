"use server"

import nodemailer from "nodemailer";



export const registerSpooktacular = async (formData) => {

    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const phoneNumber = formData.get('phoneNumber')
    const adultTickets = formData.get('numAdults')
    const childTickets = formData.get('numChildren')
    const numPets = formData.get('numPets')


    // console.log("logging formData from server action:", firstName, lastName, email, phoneNumber, adultTickets, childTickets, numPets)

    const spooktacularRegistrationsGoogleScriptURL = process.env.SPOOKTACULAR_REGISTRATIONS_APPS_SCRIPT_URL;

    // Check for required environment variables
    if (!spooktacularRegistrationsGoogleScriptURL) {
        console.error("Missing SPOOKTACULAR_REGISTRATIONS_APPS_SCRIPT_URL environment variable");
        return {success: false, message: "Server configuration error"};
    }

    if (!process.env.STRICTLY_EMAIL_APP_PASS) {
        console.error("Missing STRICTLY_EMAIL_APP_PASS environment variable");
        return {success: false, message: "Server configuration error"};
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "terry@strictlywebdev.com",
            pass: process.env.STRICTLY_EMAIL_APP_PASS
        },
        // Only disable SSL verification in development
        ...(process.env.NODE_ENV === 'development' && {
            tls: {
                rejectUnauthorized: false
            }
        })
    })
    
        const mailOptions = {
            from: "terry@strictlywebdev.com",
            to: ["terry@strictlywebdev.com", "orestakisil@kw.com"],
            subject: "New Spooktacular Registration",
            html: `
            <strong>First Name:</strong><br />
            <small>${firstName}</small>
            <hr>
            <strong>Last Name:</strong><br />
            <small>${lastName}</small>
            <hr>
            <strong>Email:</strong><br />
            <small>${email}</small>
            <hr>
            <strong>Phone Number:</strong><br />
            <small>${phoneNumber}</small>
            <hr>
            <strong>Num of Adult Tickets:</strong><br />
            <small>${adultTickets}</small>
            <hr>
            <strong>Num of Child Tickets:</strong><br />
            <small>${childTickets}</small>
            <hr>
            <strong>Num of Pets:</strong><br />
            <small>${numPets}</small>
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
            const res = await fetch(spooktacularRegistrationsGoogleScriptURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    adultTickets,
                    childTickets,
                    numPets
                })
            })
    
            if(!res.ok) {
                throw new Error("Failed to add registration to google spreadsheet")
            }
            return {success: true, message: "Registration successful!"}
        } catch (error) {
            console.log("An error occurred:", error.message)
            return {success: false, message: error.message}
        }
    
}
