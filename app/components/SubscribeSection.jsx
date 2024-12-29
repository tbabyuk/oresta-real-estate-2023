"use client"

import { useState } from "react"


export const SubscribeSection = () => {

    const [contactEmail, setContactEmail] = useState("")
    const [isPending, setIsPending] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [emailExistsMessage, setEmailExistsMessage] = useState(false) 
    const [failMessage, setFailMessage] = useState(false)


    const handleSubscribe = async (e) => {
        e.preventDefault()

        try {
            setIsPending(true)
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: contactEmail
                })
            })

            const {message} = await res.json()

            console.log("Logging message from front end:", message)

            if(res.ok) {
                if(message === "Email is already subscribed") {
                    setEmailExistsMessage(true)
                } else {
                    setSuccessMessage(true)
                }
            } else {
                setFailMessage(true)
            }

            } catch (error) {
                setFailMessage(true)
                console.log("An error occurred:", error.message)
            } finally {
                setIsPending(false)
            }
    }


    return(
        <div className="px-5 py-8 bg-gray-200/80">
            <div className="max-w-[700px] mx-auto">
                <div className="text-4xl mb-3 text-gray-400 text-center">Subscribe to my monthly newsletter!</div>
                {successMessage && 
                    (<p className="text-lg text-green-500 text-center">Success - you have been subscribed!<br /> Keep an eye out for my next newsletter in your mailbox!</p>)
                }
                {emailExistsMessage && 
                    (<p className="text-lg text-green-500 text-center">This email is already subscribed to our newsletter!</p>)
                }
                {failMessage && 
                    (<p className="text-lg text-red-500 text-center">Ooops, something went wrong while trying to subscribe you!<br /> Please reach out to me directly at <span className="font-bold">orestakisil@kw.com</span> and request to be added to my newsletter.</p>)
                }
                {!successMessage && !emailExistsMessage && !failMessage && (
                        <form className="flex flex-col sm:flex-row justify-center items-center gap-y-4 gap-x-4" onSubmit={handleSubscribe}>
                        <input 
                            type="email" 
                            className="h-10 w-full border-2 border-gray-300 rounded ps-2" 
                            onChange={(e) => setContactEmail(e.target.value) }
                            value={contactEmail}
                            placeholder="enter your email address" 
                            required />
                        <button className="h-10 w-full bg-orange-500/70 hover:bg-orange-600/70 text-white rounded" disabled={isPending}>{isPending ? "One Minute..." : "SUBSCRIBE"}</button>
                        </form>
                    )
                }
            </div>
        </div>
    )
}