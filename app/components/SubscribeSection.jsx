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

            const data = await res.json()

            console.log("Logging message from front end:", data.message)

            if(res.ok) {
                if(data.message === "Email is already subscribed") {
                    setEmailExistsMessage(true)
                } else {
                    setSuccessMessage(true)
                }
            } else {
                setFailMessage(true)
            }

            } catch (error) {
                setFailMessage(true)
                console.log("An error occurred:", error.message, data.error)
            } finally {
                setIsPending(false)
            }
        }


    return(
        <div className="px-5 py-8 bg-gray-200/80">
            <div className="max-w-[700px] mx-auto">
                <div className="text-3xl mb-3 text-gray-400/80 text-center">Subscribe to my monthly newsletter!</div>
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
                            className="h-10 w-full border-gray-300 oresta-form-input" 
                            onChange={(e) => setContactEmail(e.target.value) }
                            value={contactEmail}
                            placeholder="enter your email address" 
                            required />
                        <button className="h-10 w-full rounded text-gray-100 bg-oresta-moss hover:bg-oresta-moss-2" disabled={isPending}>{isPending ? "One Minute..." : "SUBSCRIBE"}</button>
                        </form>
                    )
                }
            </div>
        </div>
    )
}