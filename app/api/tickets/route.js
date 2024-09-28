
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"



export async function POST(request) {

    const {firstName, lastName, email, adultTickets, childTickets, numPets} = await request.json()


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "terry@strictlywebdev.com",
            pass: process.env.STRICTLY_EMAIL_APP_PASS
        }
        })
    
    
        const mailOptions = {
            from: "terry@strictlywebdev.com",
            to: ["tbabyuk@gmail.com"],
            // to: ["orestakisil@kw.com"],
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
            await transporter.sendMail(mailOptions);
            return NextResponse.json({message: "email sent successfully"}, {status: 200})
        } catch (error) {
            return NextResponse.json({message: "email failed to send", details: error}, {status: 500})
        }

}



