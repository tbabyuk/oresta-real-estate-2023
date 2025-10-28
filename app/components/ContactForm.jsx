"use client"

import {useState} from "react"
import { submitContactForm, validateRecaptcha } from "../(oresta-hero-pages)/contact/actions"
import ReCAPTCHA from "react-google-recaptcha"




export const ContactForm = () => {
  
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(null)
    const [recaptchaToken, setRecaptchaToken] = useState(null);


    const handleRecaptchaChange = (value) => {
      // Runs when user completes reCAPTCHA challenge
      setRecaptchaToken(value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const formData = new FormData(e.target)

            if(!recaptchaToken) {
                setError("Please complete the reCAPTCHA verification.")
                setLoading(false)
                return;
            }

            const validateResult = await validateRecaptcha(recaptchaToken)
            setRecaptchaToken(null)

            if(!validateResult.success) {
                setError("Sorry, we could not verify your reCAPTCHA. Please try again or email us directly for help.")
                setLoading(false)
                return;
            }

            const submitResult = await submitContactForm(formData)

            if(!submitResult.success) {
                setError(submitResult.message || "Failed to send message")
                setLoading(false)
                return;
            }

            setLoading(false)
            setSent(true)
        } catch (error) {
            console.error("Form submission error:", error)
            setError("An unexpected error occurred. Please try again.")
            setLoading(false)
        }
    }



  return (
    <>
    {sent ? 
      (<p className="text-lg text-green-700">Your message has been sent! Please expect to hear from us within 1-2 business days!</p>) : 
      (
        <>
          <form className="flex flex-col justify-between h-full w-full lg:w-[80%]" onSubmit={handleSubmit}>
              <label className="flex flex-col mb-6">
                  <span className="mb-1">Your Name:</span>
                  <input name="name" type="text" className="oresta-form-input" required />
              </label>
              <label className="flex flex-col mb-6">
                  <span className="mb-1">Your Phone:</span>
                  <input name="phone" type="tel" className="oresta-form-input" required />
              </label>
              <label className="flex flex-col mb-6">
                  <span className="mb-1">Your Email:</span>
                  <input name="email" type="email" className="oresta-form-input" required />
              </label>
              <label className="flex flex-col mb-2">
                  <span className="mb-1">Your Message:</span>
                  <textarea name="message" className="p-2 rounded outline-none border-2 focus:border-oresta-moss h-20" required />
              </label>
              <ReCAPTCHA sitekey="6LdFCTwoAAAAAJz1TIkSuEFdE1AKYDoFa0S7Hcmm" onChange={handleRecaptchaChange} className="mt-4" />
              {error && (
               <p className="text-lg text-red-600 mb-4">{error}</p>
              )}
              <button className="h-11 mt-4 w-full oresta-action-orange flex items-center justify-center gap-x-2" disabled={loading}>
                {loading && <div className="spinner" />}
                {loading ? "sending, please wait..." : "Send"}
              </button>
          </form>
        </>
      )}
    </>
  )
}