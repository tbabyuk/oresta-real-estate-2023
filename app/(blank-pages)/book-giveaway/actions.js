"use server"

import nodemailer from "nodemailer"



export const registerBookGiveawayEntry = async (formData) => {

    const fullName = formData.get("fullName")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const inGta = formData.get("inGta")
    const intent = formData.get("intent")
    const timeline = formData.get("timeline")
    const areaInterestRaw = formData.get("areaInterest")
    const areaInterestOther = formData.get("areaInterestOther")
    const summerDestination = formData.get("summerDestination") || ""
    const referralSource = formData.get("referralSource")

    // If "Other" was picked, use the custom value the user typed in
    const areaInterest =
        areaInterestRaw === "Other" && areaInterestOther
            ? areaInterestOther
            : areaInterestRaw


    const bookGiveawayGoogleScriptURL = process.env.BOOK_GIVEAWAY_APPS_SCRIPT_URL

    if (!bookGiveawayGoogleScriptURL) {
        console.error("Missing BOOK_GIVEAWAY_APPS_SCRIPT_URL environment variable")
        return { success: false, message: "Server configuration error" }
    }

    if (!process.env.STRICTLY_EMAIL_APP_PASS) {
        console.error("Missing STRICTLY_EMAIL_APP_PASS environment variable")
        return { success: false, message: "Server configuration error" }
    }


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "terry@strictlywebdev.com",
            pass: process.env.STRICTLY_EMAIL_APP_PASS,
        },
        ...(process.env.NODE_ENV === "development" && {
            tls: { rejectUnauthorized: false },
        }),
    })


    const mailOptions = {
        from: '"Oresta Website" <terry@strictlywebdev.com>',
        to: "oresta@orestakisil.com",
        cc: "terry@strictlywebdev.com",
        subject: "New Book Giveaway Entry — Detour Diaries: Ontario",
        html: `
            <strong>Full Name:</strong><br />
            <small>${fullName}</small>
            <hr>
            <strong>Email:</strong><br />
            <small>${email}</small>
            <hr>
            <strong>Phone:</strong><br />
            <small>${phone}</small>
            <hr>
            <strong>In GTA?</strong><br />
            <small>${inGta}</small>
            <hr>
            <strong>Looking To:</strong><br />
            <small>${intent}</small>
            <hr>
            <strong>Timeline:</strong><br />
            <small>${timeline}</small>
            <hr>
            <strong>Area of Interest:</strong><br />
            <small>${areaInterest}</small>
            <hr>
            <strong>Summer Destination:</strong><br />
            <small>${summerDestination || "(not provided)"}</small>
            <hr>
            <strong>Heard About Via:</strong><br />
            <small>${referralSource}</small>
        `,
    }


    try {
        // Send notification email (non-blocking — still log to sheet even if email fails)
        try {
            await transporter.sendMail(mailOptions)
            console.log("Book giveaway notification email sent")
        } catch (emailError) {
            console.log("Email failed, continuing with sheet write:", emailError.message)
        }

        // Append entry to Google Sheet via Apps Script
        const res = await fetch(bookGiveawayGoogleScriptURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fullName,
                email,
                phone,
                inGta,
                intent,
                timeline,
                areaInterest,
                summerDestination,
                referralSource,
            }),
        })

        if (!res.ok) {
            throw new Error("Failed to add entry to Google Sheet")
        }

        return { success: true, message: "Entry recorded" }

    } catch (error) {
        console.log("Book giveaway submission error:", error.message)
        return { success: false, message: error.message }
    }
}
