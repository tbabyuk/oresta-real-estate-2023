
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"


export async function POST(request) {

    const {name, email} = await request.json()

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "terry@strictlywebdev.com",
            pass: process.env.STRICTLY_EMAIL_APP_PASS
        }
        })
    
    
        const mailOptions = {
            from: "terry@strictlywebdev.com",
            to: ["tbabyuk@gmail.com", "orestakisil@kw.com"],
            // to: "tbabyuk@gmail.com",
            subject: "New Webinar Registration",
            html: `
            <strong>Name:</strong><br />
            <small>${name}</small>
            <hr>
            <strong>Email:</strong><br />
            <small>${email}</small>
            `
        }

        try {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({message: "email sent successfully"})
        } catch (error) {
            return NextResponse.json({message: "email failed to send", details: error})
        }

}



