import { NextResponse } from "next/server"


export async function POST(request) {

    const {event, firstName, lastName, phone, email, numTickets} = await request.json()

    console.log("Logging data from google API:", event, firstName, lastName, phone, email, numTickets)


    const foundationsGoogleScriptURL = "https://script.google.com/macros/s/AKfycbxyFIKq9Wnyb_3J2ZIxetUQWDiy3lvVN4PwZ1J8HbdGf4OX1JGyWO9TWSN5Ju8Bit0T/exec"


    try {
        // send data to Google Form
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

        console.log("logging server response from client:", res)

        if(res.ok) {
            console.log("It worked, from Google API!!!", res.text())
        }
        return NextResponse.json({status: 200})
  
    } catch (error) {
        console.log("Something went wrong")
        return NextResponse.json({status: 500})
    }

}
