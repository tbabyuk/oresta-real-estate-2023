"use server"

import nodemailer from "nodemailer"



export const registerBookClubMember = async (formData) => {

    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const phoneNumber = formData.get("phoneNumber")
    const email = formData.get("email")

    console.log("Logging formData from server action:", firstName, lastName, phoneNumber, email)

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
            await transporter.sendMail(mailOptions);
            return {success: true}
        } catch (error) {
            return {success: false}
        }

    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve({success: true})
    //     }, 2000)
    // })

}