import { NextResponse } from "next/server"
import nodemailer from "nodemailer"



export async function POST(request) {

    const {event, firstName, lastName, phone, email} = await request.json()

    console.log("Logging data from google API:", event, firstName, lastName, phone, email)

    const foundationsGoogleScriptURL = "https://script.google.com/macros/s/AKfycbzcQxMoyfI3cNhWLRsM_2pyjNTb9FCqE-eDLOH1Of6xFrKsAxQuXlkafhl8fo9txVjc8w/exec"


    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "terry@strictlywebdev.com",
        pass: process.env.STRICTLY_EMAIL_APP_PASS
    }
    })

    const mailOptions = {
    from: "terry@strictlywebdev.com",
    to: "orestakisil@kw.com",
    cc: "terry@strictlywebdev.com",

    subject: "New Smith Manoeuvre Webinar Registration",
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
                event,
                firstName,
                lastName,
                phone,
                email
            })
        })

        if(!res.ok) {
            throw new Error("Failed to add registration to google spreadsheet")
        }

        console.log("It worked, from Google API!!!")
        return NextResponse.json({message: "email sent and entry added to Google Sheet successfully"})
    } catch (error) {
        console.log("An error occurred:", error.message)
        return NextResponse.json({message: "either email failed to send or no entry made to google sheet"},{status: 500})
    }
}
