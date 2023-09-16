"use client"

import {useRef, useState} from "react"

export const WebinarForm = () => {
  
  const nameRef = useRef()
  const emailRef = useRef()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)


  const handleSubmit = async (e) => {
      e.preventDefault()
      setSending(true)
      const res = await fetch("/api/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name: nameRef.current.value,
              email: emailRef.current.value,
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
      (<p className="text-lg text-green-500">Congratulations - you have successfully registered for the Webinar!<br /> Please use the following link to join the webinar: <a href="https://us02web.zoom.us/webinar/register/WN_luspGAoWRwSUY8mwq5MylA#/registration" target="_blank" className="text-gray-50 hover:underline">https://us02web.zoom.us/webinar/register/WN_luspGAoWRwSUY8mwq5MylA#/registration</a></p>) : 
      (<form className="w-[330px] mx-auto flex flex-col" onSubmit={handleSubmit}>
          <label className="mb-10 flex flex-col">
              <span className="text-gray-50 text-lg font-light self-start">Name:</span>
              <input type="text" className="h-8 rounded ps-2" required ref={nameRef} />
          </label>
          <label className="mb-14 flex flex-col">
              <span className="text-gray-50 text-lg font-light self-start">Email:</span>
              <input type="email" className="h-8 rounded ps-2" required ref={emailRef} />
          </label>
          <button className="bg-orange-400 text-gray-100 w-full h-12 mx-auto px-14 rounded hover:bg-orange-500" disabled={sending}>{sending ? "processing reservation..." : "Reserve My Spot!"}</button>
      </form>
      )}
    </>
  )
}