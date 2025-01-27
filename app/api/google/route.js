import { NextResponse } from "next/server"
import nodemailer from "nodemailer"



export async function POST(request) {

    const {event, firstName, lastName, phone, email, numTickets} = await request.json()

    console.log("Logging data from google API:", event, firstName, lastName, phone, email, numTickets)


    const foundationsGoogleScriptURL = "https://script.google.com/macros/s/AKfycbxyFIKq9Wnyb_3J2ZIxetUQWDiy3lvVN4PwZ1J8HbdGf4OX1JGyWO9TWSN5Ju8Bit0T/exec"


    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "terry@strictlywebdev.com",
        pass: "aoykfdqgguutgrma"
    }
    })

    const mailOptions = {
    from: "terry@strictlywebdev.com",
    to: ["terry@strictlywebdev.com"],
    subject: "New Foundations of Wealth Registration",
    html: `
    <strong>First Name:</strong><br />
    <small>${firstName}</small>
    <hr>
    <strong>Last Name:</strong><br />
    <small>${lastName}</small>
    <hr>
    <strong>Phone:</strong><br />
    <small>${phone}</small>
    <hr>
    <strong>Email:</strong><br />
    <small>${email}</small>
    <hr>
    <strong>Number of tickets:</strong><br />
    <small>${numTickets}</small>
    `
}


    try {
        await transporter.sendMail(mailOptions);
        const res = await fetch(foundationsGoogleScriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "event": "FoundationsOfWealth",
                firstName,
                lastName,
                phone,
                email,
                numTickets
            })
        })

        if(!res.ok) {
            throw new Error("Failed to add registration to google spreadsheet")
        }

        console.log("It worked, from Google API!!!")
        return NextResponse.json({message: "email sent and entry added to Google Sheet successfully"})
    } catch (error) {
        console.log("An error occurred:", error.message)
        return NextResponse.json({message: "either email failed to send or no entry made to google sheet", details: error})
    }
}
