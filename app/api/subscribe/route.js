import { NextResponse } from "next/server"
const client = require("@mailchimp/mailchimp_marketing");

const audience_id = "cbf83989e1"



export async function POST(request) {

    const {email} = await request.json()

    console.log("Logging email from API +++++++++++++:", email)


    client.setConfig({
        apiKey: process.env.MAILCHIMP_API_KEY,
        server: "us22",
    });


    try {
        await client.lists.addListMember(audience_id, {
            email_address: email,
            status: "subscribed",
        });
        return NextResponse.json({message: "Subscription successful"}, {status: 200})
    } catch (error) {
        console.log("Logging error from Subscribe API:", error)
        if (error.response?.body?.title === "Member Exists") {
            return NextResponse.json({message: "Email is already subscribed"}, {status: 200});
        }        
        return NextResponse.json({message: "subscription failed", error}, {status: 500})
    }

}



