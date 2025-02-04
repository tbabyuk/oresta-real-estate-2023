"use client"

import {useRef, useState, useEffect} from "react"

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


    // useEffect(() => {
    //     nameRef.current.focus()
    // }, [])


  return (
    <>
    {sent ? 
      (<p className="text-lg text-green-700">Your message has been sent! Please expect to hear from us within 1-2 business days!</p>) : 
      (
        <form className="flex flex-col justify-between h-full w-full lg:w-[80%]" onSubmit={handleSubmit}>
            <label className="flex flex-col mb-6">
                <span className="mb-1">Your Name:</span>
                <input type="text" className="oresta-form-input" ref={nameRef} />
            </label>
            <label className="flex flex-col mb-6">
                <span className="mb-1">Your Phone:</span>
                <input type="tel" className="oresta-form-input" ref={phoneRef} />
            </label>
            <label className="flex flex-col mb-6">
                <span className="mb-1">Your Email:</span>
                <input type="email" className="oresta-form-input" ref={emailRef} />
            </label>
            <label className="flex flex-col mb-6">
                <span className="mb-1">Your Message:</span>
                <textarea className="p-2 rounded outline-none border-2 focus:border-oresta-moss h-20" ref={messageRef} />
            </label>
            <button className="h-11 w-full oresta-action-orange" disabled={sending}>{sending ? "sending, please wait..." : "Send"}</button>
        </form>
      )}
    </>
  )
}