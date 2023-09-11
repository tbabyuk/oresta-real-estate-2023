"use client"

import {useRef, useState} from "react"

export const ContactForm = () => {
  
    const nameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameRef.current.value,
                phone: phoneRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value
            })
        })

        if(res.ok) {
            const serverRes = await res.json()
            console.log("server response is:", serverRes)
            setSending(false)
            setSent(true)
        }
    }


  return (
    <>
    {sent ? 
      (<p className="text-lg text-green-700">Your message has been sent! Please expect to hear from us within 1-2 business days!"</p>) : 
      (
        <form className="flex flex-col justify-between h-full w-full lg:w-[80%]" onSubmit={handleSubmit}>
            <label className="flex flex-col mb-6">
                <span>Your Name:</span>
                <input type="text" className="border-2 border-gray-300 rounded h-9 ps-2" ref={nameRef} />
            </label>
            <label className="flex flex-col mb-6">
                <span>Your Phone:</span>
                <input type="tel" className="border-2 border-gray-300 rounded h-9 ps-2" ref={phoneRef} />
            </label>
            <label className="flex flex-col mb-6">
                <span>Your Email:</span>
                <input type="email" className="border-2 border-gray-300 rounded h-9 ps-2" ref={emailRef} />
            </label>
            <label className="flex flex-col mb-6">
                <span>Your Message:</span>
                <textarea className="border-2 border-gray-300 rounded h-20 ps-2" ref={messageRef} />
            </label>
            <button className="h-9 bg-oresta-light rounded text-black hover:bg-[#84b3a4]" disabled={sending}>{sending ? "sending, please wait..." : "Send"}</button>
        </form>
      )}
    </>
  )
}