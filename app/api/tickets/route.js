
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"



export async function POST(request) {

    const {firstName, lastName, email, tickets} = await request.json()


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
            // to: ["tbabyuk@gmail.com"],
            subject: "New Home Show Ticket Request",
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
            <strong>Num of Tickets:</strong><br />
            <small>${tickets}</small>
            `
        }

        try {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({message: "email sent successfully"}, {status: 200})
        } catch (error) {
            return NextResponse.json({message: "email failed to send", details: error}, {status: 500})
        }

}



