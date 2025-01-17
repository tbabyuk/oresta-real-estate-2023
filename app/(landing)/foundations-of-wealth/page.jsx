"use client"

import { useState, useEffect, useRef } from "react"



const FoundationsOfWealthLandingPage = () => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const numTicketsRef = useRef()
  
    const [sending, setSending] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [failMessage, setFailMessage] = useState(false)
  
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)

        try {
          const res = await fetch("/api/google", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  event: "FoundationsOfWealth",
                  firstName: firstNameRef.current.value,
                  lastName: lastNameRef.current.value,
                  phone: phoneRef.current.value,
                  email: emailRef.current.value,
                  numTickets: numTicketsRef.current.value
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

  
    useEffect(() => {
      firstNameRef.current?.focus()
    }, [])
  

  return (
      <div className="bg-oresta-light min-h-[100vh] py-14">
          {successMessage && 
              (<p className="mt-6 bg-white w-fit mx-auto p-8 rounded text-center text-xl text-green-600">Thank you - you have been registered!</p>)
          }

          {failMessage && 
              (<p className="mt-6 bg-white w-fit mx-auto p-8 rounded text-center text-xl text-red-600">Ooops, something went wrong! Please try again or call Oresta directly at <a href="tel:+14163195748" className="font-bold">(416) 319-5748</a> to ask for tickets!</p>)
          }

          {!successMessage && !failMessage && 
              (<form className="w-[400px] max-w-[90%] rounded-md mx-auto flex flex-col bg-white p-8" onSubmit={handleSubmit}>
                  <h1 className="text-2xl border-b-2 pb-2 mb-2">Foundations of Wealth - Registration Form</h1>
                  <p className="text-sm mb-8">Learn the foundational tools for saving for your first home and investing in the stock market!</p>
                  <label className="mb-8 flex flex-col">
                      <span className="self-start mb-2">First Name:</span>
                      <input type="text" className="bg-gray-100 h-9 rounded ps-2 shadow focus:outline-none focus:ring-2 focus:ring-oresta-light" required ref={firstNameRef} />
                  </label>
                  <label className="mb-8 flex flex-col">
                      <span className="self-start mb-2">Last Name:</span>
                      <input type="text" className="bg-gray-100 h-9 rounded ps-2 shadow focus:outline-none focus:ring-2 focus:ring-oresta-light" required ref={lastNameRef} />
                  </label>
                  <label className="mb-8 flex flex-col">
                      <span className="self-start mb-2">Phone Number:</span>
                      <input type="tel" className="bg-gray-100 h-9 rounded ps-2 shadow focus:outline-none focus:ring-2 focus:ring-oresta-light" required ref={phoneRef} />
                  </label>
                  <label className="mb-8 flex flex-col">
                      <span className="self-start mb-2">Email:</span>
                      <input type="email" className="bg-gray-100 h-9 rounded ps-2 shadow focus:outline-none focus:ring-2 focus:ring-oresta-light" required ref={emailRef} />
                  </label>
                  <label className="mb-12 flex flex-col">
                      <span className="self-start mb-2">Number of Tickets:</span>
                      <select className="bg-gray-100 h-9 rounded ps-3 shadow focus:outline-none focus:ring-2 focus:ring-oresta-light" ref={numTicketsRef}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                      </select>
                  </label>
                  <button className="bg-orange-500 text-gray-100 w-full h-12 mx-auto px-14 rounded hover:bg-orange-600  focus:outline-none focus:ring-2 focus:ring-oresta-light" disabled={sending}>{sending ? "processing, please wait..." : "Get My Tickets!"}</button>
              </form>)
          }
      </div>
    )
}

export default FoundationsOfWealthLandingPage;


// Deployment ID: AKfycbwiV18XpukfzOyupf3K29uXhnRfwz9XgNaknan-Aus8rIf0U5wDSSxhFyEzvj8L0Qif

// https://script.google.com/macros/s/AKfycbwiV18XpukfzOyupf3K29uXhnRfwz9XgNaknan-Aus8rIf0U5wDSSxhFyEzvj8L0Qif/exec