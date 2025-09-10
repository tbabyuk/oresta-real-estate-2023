"use client"

import { useState } from "react"
import { registerSpooktacular } from "@/app/(blank-pages)/spooktacular-2025/actions"



export const SpooktacularTicketsForm = () => {
  
  const [isPending, setIsPending] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [failMessage, setFailMessage] = useState(false)



  const handleSubmit = async (e) => {
      e.preventDefault()

      const formData = new FormData(e.target)

      try {
        setIsPending(true)
        const res = await registerSpooktacular(formData)

        if(!res.success) {
            throw new Error("Registration failed")
        }
        setSuccessMessage(true)
      } catch (error) {
            setFailMessage(true)
      } finally {
            setIsPending(false)
      }
  }


  return (
        <>
            {successMessage && (
                <div className="bg-white p-6 rounded-md max-w-[600px] mx-auto">
                    <p className="text-xl text-green-600">Thank you - your form has been submitted successfully!<br /> You should be receiving your e-tickets within 24 hours!</p>
                </div>
            )}

            {failMessage && (
                <div className="bg-white p-6 rounded-md max-w-[600px] mx-auto">
                    <p className="text-xl text-red-600">Ooops, something went wrong! Please try again or call Oresta directly at <a href="tel:+14163195748" className="font-bold">(416) 319-5748</a> to ask for tickets!</p>
                </div>
            )}

            {!successMessage && !failMessage && 
                (<form className="w-[330px] mx-auto flex flex-col" onSubmit={handleSubmit}>
                    <label className="mb-8 flex flex-col">
                        <span className="text-gray-800 self-start mb-2">First Name:</span>
                        <input type="text" name="firstName" className="h-9 rounded ps-2" required />
                    </label>
                    <label className="mb-8 flex flex-col">
                        <span className="text-gray-800 self-start mb-2">Last Name:</span>
                        <input type="text" name="lastName" className="h-9 rounded ps-2" required />
                    </label>
                    <label className="mb-8 flex flex-col">
                        <span className="text-gray-800 self-start mb-2">Email:</span>
                        <input type="email" name="email" className="h-9 rounded ps-2" required />
                    </label>
                    <label className="mb-8 flex flex-col">
                        <span className="text-gray-800 self-start mb-2">Phone Number:</span>
                        <input type="tel" name="phoneNumber" className="h-9 rounded ps-2" required />
                    </label>
                    <label className="mb-8 flex flex-col">
                        <span className="text-gray-800 self-start mb-2">Number of Adults:</span>
                        <select className="h-9 rounded ps-3" name="numAdults">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                    <label className="mb-8 flex flex-col">
                        <span className="text-gray-800 self-start mb-2">Number of Children:</span>
                        <select className="h-9 rounded ps-3" name="numChildren">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>                        
                        </select>
                    </label>
                    <label className="mb-14 flex flex-col">
                        <span className="text-gray-800 self-start mb-2">Number of Pets:</span>
                        <select className="h-9 rounded ps-3" name="numPets">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>                        
                        </select>
                    </label>
                    <button 
                       className="bg-orange-500 text-gray-100 w-full h-12 mx-auto px-14 rounded hover:bg-orange-600" 
                       disabled={isPending}>
                            {isPending ? "processing, please wait..." : "Get My Tickets!"}
                    </button>
                </form>)
            }
        </>
  )
}