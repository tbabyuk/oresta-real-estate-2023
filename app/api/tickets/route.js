
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"



export async function POST(request) {

    const {name, email, tickets} = await request.json()


    console.log("logging details from route.js", name, email, tickets)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "terry@strictlywebdev.com",
            pass: "nvebpdswqgwuzozq"
        }
        })
    
    
        const mailOptions = {
            from: "terry@strictlywebdev.com",
            to: ["tbabyuk@gmail.com", "orestakisil@kw.com"],
            subject: "New Home Show Ticket Request",
            html: `
            <strong>Name:</strong><br />
            <small>${name}</small>
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



