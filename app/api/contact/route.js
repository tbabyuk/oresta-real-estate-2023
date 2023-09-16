
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"


export async function POST(request) {

    const {name, phone, email, message} = await request.json()


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "terry@strictlywebdev.com",
            pass: "aoykfdqgguutgrma"
        }
        })
    
    
        const mailOptions = {
            from: "terry@strictlywebdev.com",
            to: ["tbabyuk@gmail.com", "orestakisil@kw.com"],
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
            `
        }

        try {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({message: "email sent successfully"})
        } catch (error) {
            return NextResponse.json({message: "email failed to send", details: error})
        }

}



