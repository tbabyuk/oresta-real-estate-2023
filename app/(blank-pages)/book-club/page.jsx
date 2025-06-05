"use client"

import { useState } from "react";


import { registerBookClubMember } from "@/app/actions";


const BookClubPage = () => {

    const [successMessage, setSuccessMessage] = useState("")
    const [failMessage, setFailMessage] = useState("")
    const [isSending, setIsSending] = useState(false)
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        try {
            setIsSending(true)
            const res = await registerBookClubMember(formData)
            if(res.success) {
                console.log("SUCESS!!!")
                setSuccessMessage("Registration successful! Please give me 1-2 days to get in touch with you about the next steps!")
            } else {
                setFailMessage("Ooops, something went wrong with your registration. Please call me directly at (416) 237-5748")
            }
        } catch (error) {
            console.error("Registration error:", error)
            setFailMessage("Ooops, something went wrong with your registration. Please call me directly at (416) 237-5748")
        } finally {
            setIsSending(false)
        }
    }


    return(
        <div className="w-full h-screen flex flex-col bg-oresta-blue">
            <header className="p-6 pb-2">
                <h1 className="text-3xl text-center md:text-4xl text-oresta-moss mb-7">
                    Welcome to the Community Book Club!
                </h1>
                <div className="border-t-2 mx-auto mb-6 border-oresta-moss/40 w-full max-w-[1000px]" />
                <p className="text-oresta-moss text-center mx-auto w-full max-w-[1000px] italic leading-7">📖 Welcome to the Community Book Club - I&apos;m so excited for you to be a part of this! <br />This book club has been on my mind for a long time and I&apos;m thrilled to finally bring it to life as part of our real estate newsletter community. It&apos;s more than just reading - it&apos;s about connecting, growing, and sparking conversation through powerful stories and big ideas.<br />Fill out the form below to join us for our first meeting in the first week of August!<span className="block pt-4 font-semibold">- Oresta Kisil</span></p>
            </header>

            <div className="flex flex-1 flex-col xl:flex-row bg-oresta-blue">
                <div className="py-5 w-full xl:w-1/3 flex flex-shrink-0 justify-center items-center">
                    <img 
                        src="/images/book-club-image-cute.jpg" 
                        alt="Oresta"
                        className="h-[85%] max-h-[450px] rounded-lg border-4 border-white" 
                    />
                </div>
                <div className="w-full lg:flex lg:flex-row">
                    <div className="py-5 lg:w-[50%] flex flex-col items-center justify-center gap-x-10">
                        <h2 className="text-2xl lg:text-3xl text-oresta-moss pb-4">First Book:</h2>
                        <img 
                            src="/images/values.png" 
                            alt="Mark Carney's Values"
                            className="h-[80%] max-h-[440px] rotate-[5deg]" 
                        />
                    </div>
                    <div className="py-10 mb-10 lg:w-[50%]">

                        {!successMessage && !failMessage && (
                            <>
                                <h3 className="w-[350px] max-w-[90%] mb-2 mx-auto text-2xl text-oresta-moss text-center">Sign up to join!</h3>
                                <form 
                                    className="w-[350px] max-w-[90%] rounded-md mx-auto flex flex-col bg-white/20 p-7"
                                    onSubmit={(e) => handleSubmit(e)}
                                >
                                    <label className="mb-6 flex flex-col">
                                        <span className="self-start mb-2 text-white">First Name:</span>
                                        <input 
                                            type="text" 
                                            className="oresta-form-input bg-gray-100" 
                                            name="firstName"
                                            required 
                                        />
                                    </label>
                                    <label className="mb-6 flex flex-col">
                                        <span className="self-start mb-2 text-white">Last Name:</span>
                                        <input 
                                            type="text" 
                                            className="oresta-form-input bg-gray-100" 
                                            name="lastName"
                                            required
                                        />
                                    </label>
                                    <label className="mb-6 flex flex-col">
                                        <span className="self-start mb-2 text-white">Phone Number:</span>
                                        <input 
                                            type="tel" 
                                            className="oresta-form-input bg-gray-100" 
                                            name="phoneNumber"
                                            required
                                        />
                                    </label>
                                    <label className="mb-6 flex flex-col">
                                        <span className="self-start mb-2 text-white">Email:</span>
                                        <input 
                                            type="email" 
                                            className="oresta-form-input bg-gray-100" 
                                            name="email"
                                            required 
                                        />
                                    </label>
                                    <button className="h-11 w-full oresta-action-orange" disabled={isSending}>
                                        {isSending 
                                            ? <div className="flex justify-center"><div className="spinner" /></div>
                                            : <span>Join the club!</span>
                                        }
                                    </button>
                                </form>
                            </>
                        )}

                        {successMessage && (
                            <div className="text-green-600 text-lg text-center px-5">{successMessage}</div>
                        )}

                        {failMessage && (
                            <div className="text-red-600 text-lg text-center px-5">{failMessage}</div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}


export default BookClubPage;