


"use client"

import {useRef, useState} from "react"

export const TicketsForm = () => {
  
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const ticketsRef = useRef()
  const [sending, setSending] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [failMessage, setFailMessage] = useState(false)


  const handleSubmit = async (e) => {
      e.preventDefault()

      setSending(true)

      try {
        const res = await fetch("/api/tickets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                tickets: ticketsRef.current.value
            })
        })

        console.log("logging server response from client:", res)

        if(res.ok) {
            setSuccessMessage(true)
        } else {
            setFailMessage(true)
        }
      } catch (error) {
            setFailMessage(true)
      } finally {
            setSending(false)
      }
  }


  return (
        <>
            {successMessage && 
                (<p className="text-lg text-green-500">Thank you - your form has been submitted successfully!<br /> You should be receiving your e-tickets within 24 hours!</p>)
            }

            {failMessage && 
                (<p className="text-lg text-red-500">Ooops, something went wrong! Please try again or call Oresta directly at <a href="tel:+14163195748" className="font-bold">(416) 319-5748</a> to ask for tickets!</p>)
            }

            {!successMessage && !failMessage && 
                (<form className="w-[330px] mx-auto flex flex-col" onSubmit={handleSubmit}>
                    <label className="mb-10 flex flex-col">
                        <span className="text-gray-50 font-light self-start mb-2">First Name:</span>
                        <input type="text" className="h-9 rounded ps-2" required ref={firstNameRef} />
                    </label>
                    <label className="mb-10 flex flex-col">
                        <span className="text-gray-50 font-light self-start mb-2">Last Name:</span>
                        <input type="text" className="h-9 rounded ps-2" required ref={lastNameRef} />
                    </label>
                    <label className="mb-10 flex flex-col">
                        <span className="text-gray-50 font-light self-start mb-2">Email:</span>
                        <input type="email" className="h-9 rounded ps-2" required ref={emailRef} />
                    </label>
                    <label className="mb-14 flex flex-col">
                        <span className="text-gray-50 font-light self-start mb-2">Preferred Number of Tickets:</span>
                        <select className="h-9 rounded ps-3" ref={ticketsRef}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </label>
                    <button className="bg-orange-400 text-gray-100 w-full h-12 mx-auto px-14 rounded hover:bg-orange-500" disabled={sending}>{sending ? "processing, please wait..." : "Get My Tickets!"}</button>
                </form>)
            }
        </>
  )
}