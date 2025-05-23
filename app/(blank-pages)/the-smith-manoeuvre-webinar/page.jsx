"use client"

import { useState, useEffect, useRef } from "react"



const FoundationsOfWealthLandingPage = () => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    // const numTicketsRef = useRef()
  
    const [sending, setSending] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [failMessage, setFailMessage] = useState(false)
  
  
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setSending(true)
            const res = await fetch("/api/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    event: "The Smith Manoeuvre",
                    firstName: firstNameRef.current.value,
                    lastName: lastNameRef.current.value,
                    phone: phoneRef.current.value || "",
                    email: emailRef.current.value,
                    //   numTickets: numTicketsRef.current.value
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
      <div className="bg-oresta-moss min-h-[100vh] py-14">
          {successMessage && 
              (<p className="mt-6 bg-white w-fit mx-auto p-8 rounded text-center text-xl text-green-600">Thank you - you have been successfully registered! Keep an eye on your email for more updates.</p>)
          }

          {failMessage && 
              (<p className="mt-6 bg-white w-fit mx-auto p-8 rounded text-center text-xl text-red-600">Ooops, something went wrong! Please try again or call Oresta directly at <a href="tel:+14163195748" className="font-bold">(416) 319-5748</a> to get registered!</p>)
          }

          {!successMessage && !failMessage && 
              (<form className="w-[400px] max-w-[90%] rounded-md mx-auto flex flex-col bg-white p-5" onSubmit={handleSubmit}>
                    <div className="border-b-2 pb-4 mb-4 flex flex-col items-center">
                        <h1 className="text-2xl font-semibold mb-2 text-center">&quot;The Smith Manoeuvre&quot;</h1>
                        <h2 className="text-2xl font-light mb-2 text-center">Webinar Registration Form</h2>
                        <h3 className="text-xl font-extralight">May 29, 2025 07:30 PM</h3>
                    </div>
                    <p className="text-sm mb-8 text-center">Learn how to reduce your mortgage&apos;s amortization period and become debt-free sooner</p>
                    <label className="mb-8 flex flex-col">
                        <span className="self-start mb-2">First Name:</span>
                        <input 
                            type="text" 
                            className="oresta-form-input bg-gray-100" 
                            ref={firstNameRef} 
                            required 
                        />
                    </label>
                    <label className="mb-8 flex flex-col">
                        <span className="self-start mb-2">Last Name:</span>
                        <input 
                            type="text" 
                            className="oresta-form-input bg-gray-100" 
                            ref={lastNameRef}
                            required
                        />
                    </label>
                    <label className="mb-8 flex flex-col">
                        <span className="self-start mb-2">Phone Number:</span>
                        <input 
                            type="tel" 
                            className="oresta-form-input bg-gray-100" 
                            ref={phoneRef}
                            required
                        />
                    </label>
                    <label className="mb-8 flex flex-col">
                        <span className="self-start mb-2">Email:</span>
                        <input 
                            type="email" 
                            className="oresta-form-input bg-gray-100" 
                            ref={emailRef} 
                            required 
                        />
                    </label>
                    {/* <label className="mb-12 flex flex-col">
                        <span className="self-start mb-2">Number of Tickets:</span>
                        <select className="oresta-form-input bg-gray-100" ref={numTicketsRef}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label> */}
                    <button className="h-11 w-full oresta-action-orange" disabled={sending}>{sending ? "processing, please wait..." : "Register Now"}</button>
              </form>)
          }
      </div>
    )
}

export default FoundationsOfWealthLandingPage;


// Deployment ID: AKfycbwiV18XpukfzOyupf3K29uXhnRfwz9XgNaknan-Aus8rIf0U5wDSSxhFyEzvj8L0Qif

// https://script.google.com/macros/s/AKfycbwiV18XpukfzOyupf3K29uXhnRfwz9XgNaknan-Aus8rIf0U5wDSSxhFyEzvj8L0Qif/exec