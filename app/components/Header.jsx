import Link from "next/link"
import {FiPhoneCall} from "react-icons/fi"
import { Navbar } from "./Navbar"



export const Header = () => {

  return (
    <header className="flex flex-col sticky top-0 z-50">
        {/* HEADER */}
        <div className="h-[55px] px-3 md:px-5 bg-oresta-blue text-oresta-gray flex justify-between items-center">
            <Link href="/">
                <img src="/images/logo_white_transparent.png" className="w-[100px] md:w-[110px]" />
            </Link>
            <a href="tel:+14163195784" className="flex flex-row md:ms-auto md:me-8 items-center hover:text-oresta-moss text-sm md:text-[0.9rem]">
                <FiPhoneCall className="hidden md:block me-2" />(416) 319-5748
            </a>
            <Link href="/contact#contact-form" className="px-3 py-2 font-semibold oresta-action-orange text-sm">Get in Touch</Link>
        </div>
        {/* NAVIGATION */}
        <Navbar />
    </header>
  )
}