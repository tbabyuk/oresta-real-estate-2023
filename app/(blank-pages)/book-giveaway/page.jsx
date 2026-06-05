"use client"

import { useState } from "react"
import Link from "next/link"
import { PHONE_NUMBER } from "@/lib/constants"
import { registerBookGiveawayEntry } from "./actions"


const GTA_AREAS = [
    "Toronto",
    "Mississauga",
    "Brampton",
    "Oakville",
    "Burlington",
    "Milton",
    "Halton Hills",
    "Vaughan",
    "Markham",
    "Richmond Hill",
    "York Region (Aurora, Newmarket, etc.)",
    "Durham Region (Pickering, Ajax, Whitby, Oshawa)",
    "Other",
]


const BookGiveawayPage = () => {

    const [areaInterest, setAreaInterest] = useState("")
    const [isSending, setIsSending] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [failMessage, setFailMessage] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        try {
            setIsSending(true)
            const res = await registerBookGiveawayEntry(formData)

            if (res.success) {
                setSuccessMessage("You're in! Thanks for entering the Detour Diaries: Ontario giveaway. I'll be in touch soon with next steps.")
            } else {
                setFailMessage(`Something went wrong submitting your entry. Please try again or reach out directly at ${PHONE_NUMBER.display}.`)
            }
        } catch (error) {
            console.error("Submission error:", error)
            setFailMessage(`Something went wrong submitting your entry. Please try again or reach out directly at ${PHONE_NUMBER.display}.`)
        } finally {
            setIsSending(false)
        }
    }


    return (
        <div className="min-h-screen bg-white">

            {/* IMAGE — hero band on mobile, fixed left half on desktop */}
            <aside className="relative w-full h-72 sm:h-96 lg:fixed lg:top-0 lg:left-0 lg:w-1/2 lg:h-screen">
                <img
                    src="/images/book-detour-diaries-ontario.webp"
                    alt="Detour Diaries: Ontario — your ultimate road trip companion"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Value badge */}
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-oresta-orange text-white text-sm md:text-base font-semibold uppercase tracking-wider px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg">
                    $59 Value
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-5 lg:p-8">
                    <p className="text-white/90 text-xs uppercase tracking-[0.25em] mb-1.5">The Prize</p>
                    <p className="text-white text-xl lg:text-3xl font-medium italic leading-tight">
                        Detour Diaries: Ontario
                    </p>
                    <p className="text-white/80 text-sm lg:text-base mt-2 hidden lg:block">
                        Your ultimate Ontario road trip companion
                    </p>
                </div>
            </aside>

            {/* CONTENT — full width on mobile, right half on desktop */}
            <main className="lg:ml-[50%] lg:w-1/2 min-h-screen flex flex-col bg-white overflow-hidden">

                {/* Logo strip — same width as form column */}
                <div className="px-6 sm:px-10 pt-8 pb-2">
                    <div className="w-full max-w-md mx-auto">
                        <Link href="/" className="inline-block">
                            <img
                                src="/images/ok_logo_color.png"
                                alt="Kisil Real Estate logo"
                                className="h-10 md:h-12"
                            />
                        </Link>
                    </div>
                </div>

                {/* Narrow centered content column */}
                <div className="flex-1 flex flex-col px-6 sm:px-10 py-8 lg:py-12">
                    <div className="w-full max-w-md mx-auto">

                        {!successMessage && !failMessage && (
                            <>
                                {/* Hero text */}
                                <div className="mb-8">
                                    <span className="inline-block text-oresta-orange uppercase tracking-[0.25em] text-xs font-semibold mb-3">
                                        Summer Giveaway
                                    </span>
                                    <h1 className="text-3xl md:text-4xl text-oresta-blue font-light leading-tight mb-4">
                                        Win a copy of{" "}
                                        <span className="font-medium italic">Detour Diaries: Ontario</span>
                                    </h1>
                                    <p className="text-gray-600 leading-7">
                                        A little summer reading, on me &mdash; a <span className="text-oresta-blue font-medium">$59 value</span>.
                                        Fill out the quick form below to enter; one lucky reader gets a brand new copy mailed straight to their door.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="flex flex-col">

                                    {/* Section: Contact */}
                                    <fieldset className="mb-6">
                                        <legend className="text-xs font-semibold uppercase tracking-wider text-oresta-moss-2 mb-3">
                                            Your Info
                                        </legend>

                                        <label className="mb-4 flex flex-col">
                                            <span className="self-start mb-1.5 text-gray-700 text-sm font-medium">
                                                Full Name <span className="text-oresta-orange">*</span>
                                            </span>
                                            <input
                                                type="text"
                                                name="fullName"
                                                className="w-full oresta-form-input bg-gray-50"
                                                required
                                            />
                                        </label>

                                        <label className="mb-4 flex flex-col">
                                            <span className="self-start mb-1.5 text-gray-700 text-sm font-medium">
                                                Email Address <span className="text-oresta-orange">*</span>
                                            </span>
                                            <input
                                                type="email"
                                                name="email"
                                                className="w-full oresta-form-input bg-gray-50"
                                                required
                                            />
                                        </label>

                                        <label className="flex flex-col">
                                            <span className="self-start mb-1.5 text-gray-700 text-sm font-medium">
                                                Phone Number <span className="text-oresta-orange">*</span>
                                            </span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="w-full oresta-form-input bg-gray-50"
                                                required
                                            />
                                        </label>
                                    </fieldset>

                                    {/* Section: Real Estate */}
                                    <fieldset className="mb-6 pt-2 border-t border-gray-100">
                                        <legend className="text-xs font-semibold uppercase tracking-wider text-oresta-moss-2 mb-3 pt-4">
                                            A Little About You
                                        </legend>

                                        {/* GTA Yes/No */}
                                        <div className="mb-5">
                                            <span className="block mb-2 text-gray-700 text-sm font-medium">
                                                Are you currently living in or around the GTA? <span className="text-oresta-orange">*</span>
                                            </span>
                                            <div className="flex gap-3">
                                                <label className="flex-1 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="inGta"
                                                        value="Yes"
                                                        required
                                                        className="peer sr-only"
                                                    />
                                                    <div className="text-center py-2.5 rounded border-2 border-gray-200 text-gray-600 text-sm font-medium transition peer-checked:border-oresta-moss peer-checked:bg-oresta-moss/10 peer-checked:text-oresta-blue hover:border-oresta-moss/60">
                                                        Yes
                                                    </div>
                                                </label>
                                                <label className="flex-1 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="inGta"
                                                        value="No"
                                                        className="peer sr-only"
                                                    />
                                                    <div className="text-center py-2.5 rounded border-2 border-gray-200 text-gray-600 text-sm font-medium transition peer-checked:border-oresta-moss peer-checked:bg-oresta-moss/10 peer-checked:text-oresta-blue hover:border-oresta-moss/60">
                                                        No
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Buy / Sell / Both */}
                                        <label className="mb-4 flex flex-col">
                                            <span className="self-start mb-1.5 text-gray-700 text-sm font-medium">
                                                Are you looking to buy, sell, or both? <span className="text-oresta-orange">*</span>
                                            </span>
                                            <select
                                                name="intent"
                                                defaultValue=""
                                                className="w-full oresta-form-input bg-gray-50"
                                                required
                                            >
                                                <option value="" disabled>Select an option</option>
                                                <option value="Buy">Buy</option>
                                                <option value="Sell">Sell</option>
                                                <option value="Both">Both</option>
                                                <option value="Just exploring for now">Just exploring for now</option>
                                            </select>
                                        </label>

                                        {/* Timeline */}
                                        <label className="mb-4 flex flex-col">
                                            <span className="self-start mb-1.5 text-gray-700 text-sm font-medium">
                                                What timeline are you thinking? <span className="text-oresta-orange">*</span>
                                            </span>
                                            <select
                                                name="timeline"
                                                defaultValue=""
                                                className="w-full oresta-form-input bg-gray-50"
                                                required
                                            >
                                                <option value="" disabled>Select a timeline</option>
                                                <option value="Next 3 months">Next 3 months</option>
                                                <option value="3-6 months">3&ndash;6 months</option>
                                                <option value="6-12 months">6&ndash;12 months</option>
                                                <option value="Not sure yet">Not sure yet</option>
                                            </select>
                                        </label>

                                        {/* Area of interest */}
                                        <label className="mb-4 flex flex-col">
                                            <span className="self-start mb-1.5 text-gray-700 text-sm font-medium">
                                                What area interests you? <span className="text-oresta-orange">*</span>
                                            </span>
                                            <select
                                                name="areaInterest"
                                                value={areaInterest}
                                                onChange={(e) => setAreaInterest(e.target.value)}
                                                className="w-full oresta-form-input bg-gray-50"
                                                required
                                            >
                                                <option value="" disabled>Select an area</option>
                                                {GTA_AREAS.map((area) => (
                                                    <option key={area} value={area}>{area}</option>
                                                ))}
                                            </select>
                                        </label>

                                        {areaInterest === "Other" && (
                                            <label className="mb-4 flex flex-col -mt-1">
                                                <span className="self-start mb-1.5 text-gray-700 text-sm font-medium">
                                                    Please specify your area <span className="text-oresta-orange">*</span>
                                                </span>
                                                <input
                                                    type="text"
                                                    name="areaInterestOther"
                                                    placeholder="e.g. Hamilton, Barrie, etc."
                                                    className="w-full oresta-form-input bg-gray-50"
                                                    required
                                                />
                                            </label>
                                        )}
                                    </fieldset>

                                    {/* Section: Fun */}
                                    <fieldset className="mb-6 pt-2 border-t border-gray-100">
                                        <legend className="text-xs font-semibold uppercase tracking-wider text-oresta-moss-2 mb-3 pt-4">
                                            Just for Fun
                                        </legend>

                                        <label className="mb-4 flex flex-col">
                                            <span className="self-start mb-1.5 text-gray-700 text-sm font-medium">
                                                What&apos;s one Ontario destination on your summer bucket list?
                                            </span>
                                            <input
                                                type="text"
                                                name="summerDestination"
                                                placeholder="e.g. Tobermory, Prince Edward County, Algonquin..."
                                                className="w-full oresta-form-input bg-gray-50"
                                            />
                                        </label>

                                        <label className="flex flex-col">
                                            <span className="self-start mb-1.5 text-gray-700 text-sm font-medium">
                                                How did you hear about this giveaway? <span className="text-oresta-orange">*</span>
                                            </span>
                                            <select
                                                name="referralSource"
                                                defaultValue=""
                                                className="w-full oresta-form-input bg-gray-50"
                                                required
                                            >
                                                <option value="" disabled>Select an option</option>
                                                <option value="Newsletter">Newsletter</option>
                                                <option value="Instagram">Instagram</option>
                                                <option value="Referral">Referral</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </label>
                                    </fieldset>

                                    <button
                                        type="submit"
                                        disabled={isSending}
                                        className="h-12 w-full oresta-action-orange text-base font-medium mt-2"
                                    >
                                        {isSending
                                            ? <div className="flex justify-center"><div className="spinner" /></div>
                                            : <span>Enter the Giveaway</span>
                                        }
                                    </button>

                                    <p className="text-xs text-gray-400 text-center mt-4 leading-5">
                                        By entering, you agree to be contacted by Oresta Kisil about real estate. No spam, ever.
                                    </p>
                                </form>
                            </>
                        )}

                        {successMessage && (
                            <div className="min-h-[400px] flex flex-col items-center justify-center text-center py-10">
                                <div className="w-14 h-14 rounded-full bg-oresta-moss/20 grid place-items-center mb-5">
                                    <svg className="w-8 h-8 text-oresta-moss-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl text-oresta-blue font-semibold mb-3">You&apos;re Entered!</h2>
                                <p className="text-gray-600 max-w-md leading-7">{successMessage}</p>
                            </div>
                        )}

                        {failMessage && (
                            <div className="min-h-[400px] flex flex-col items-center justify-center text-center py-10">
                                <div className="w-14 h-14 rounded-full bg-red-100 grid place-items-center mb-5">
                                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl text-oresta-blue font-semibold mb-3">Hmm, that didn&apos;t work</h2>
                                <p className="text-gray-600 max-w-md leading-7">{failMessage}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <footer className="border-t border-gray-100 py-5 px-6 sm:px-10 text-center">
                    <p className="text-gray-400 text-xs">
                        &copy; {new Date().getFullYear()} Oresta Kisil &middot;{" "}
                        <Link href="/" className="hover:text-oresta-blue transition">Back to website</Link>
                    </p>
                </footer>
            </main>
        </div>
    )
}


export default BookGiveawayPage
