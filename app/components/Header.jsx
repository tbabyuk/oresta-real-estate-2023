import Link from "next/link"
import {FiPhoneCall} from "react-icons/fi"
import {TfiEmail} from "react-icons/tfi"
import { Navbar } from "./Navbar"



export const Header = () => {

  return (
    <header className="flex flex-col sticky top-0 z-50">
        {/* HEADER */}
        <div className="h-[44px] py-2 px-3 md:px-5 bg-oresta-blue text-oresta-gray flex justify-between items-center">
            <div className="flex gap-2 md:gap-4">
                <a href="https://www.facebook.com/orestakisilandco/" target="_blank">
                    <img src="/images/facebook.png" alt="facebook logo" className="w-7" />
                </a>
                <a href="https://www.instagram.com/orestakisilandco/" target="_blank">
                    <img src="/images/instagram.png" alt="instagram logo" className="w-7" />
                </a>
                <a href="" target="_blank">
                    <img src="/images/youtube.png"  alt="youtube logo" className="w-7" />
                </a>
                <a href="https://www.linkedin.com/in/orestababyuk/?trk=hp-identity-name" target="_blank">
                    <img src="/images/linkedin.png"  alt="linkedin logo" className="w-7" />
                </a>
            </div>
            <div className="flex gap-7 text-sm">
                <a href="tel:+14163195784" className="flex flex-row items-center hover:text-oresta-moss">
                    <FiPhoneCall className="hidden md:block me-2" />(416) 319-5748
                </a>
                <Link href="/contact" className="flex flex-row items-center hover:text-oresta-moss cursor-pointer"><TfiEmail className="hidden md:block me-2" />Email Me</Link>
            </div>
        </div>
        {/* NAVIGATION */}
        <Navbar />
    </header>
  )
}