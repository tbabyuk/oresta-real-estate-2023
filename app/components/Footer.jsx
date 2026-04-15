import Link from "next/link"
import {FiPhoneCall} from "react-icons/fi"
import {TfiEmail} from "react-icons/tfi"
import {SlLocationPin} from "react-icons/sl"
import { PHONE_NUMBER, EMAIL, ADDRESS_STREET, ADDRESS_CITY, ADDRESS_POSTAL, GOOGLE_MAPS_URL } from "@/lib/constants"



export const Footer = () => {


  return (
    <footer className="min-h-[200px] bg-oresta-blue text-oresta-gray">
        <div className="py-10 px-5 flex flex-col md:flex-row text-[0.9rem]">
            <div className="mb-16 md:mb-0 flex-1 flex-col">
                <h3 className="text-lg text-center mb-8">SOCIAL:</h3>
                <div className="flex justify-center gap-5">
                    <a href="https://www.facebook.com/orestakisilandco/" target="_blank">
                        <img src="/images/facebook.png" alt="facebook logo" className="w-10" />
                    </a>
                    <a href="https://www.instagram.com/orestakisilandco/" target="_blank">
                        <img src="/images/instagram.png" alt="instagram logo" className="w-10" />
                    </a>
                    <a href="" target="_blank">
                        <img src="/images/youtube.png" alt="twitter logo" className="w-10" />
                    </a>
                    <a href="https://www.linkedin.com/in/orestababyuk/?trk=hp-identity-name" target="_blank">
                        <img src="/images/linkedin.png" alt="linkedin logo" className="w-10" />
                    </a>
                </div>
            </div>
            <div className="flex-1 mb-16 md:mb-0">
                <h3 className="text-lg text-center mb-8">LEARN MORE:</h3>
                <ul className="flex flex-col items-center gap-3">
                    <Link href="/" className="hover:text-oresta-moss"><li>Home</li></Link>
                    <Link href="/happy-clients" className="hover:text-oresta-moss"><li>Happy Clients</li></Link>
                    <Link href="/contact" className="hover:text-oresta-moss"><li>Contact</li></Link>
                    <Link href="/resources/videos" className="hover:text-oresta-moss"><li>Videos</li></Link>
                    <Link href="/resources/preferred-vendors" className="hover:text-oresta-moss"><li>Preferred Vendors</li></Link>
                </ul>
            </div>
            <div className="flex-1">
                <h3 className="text-lg text-center mb-8">CONTACT:</h3>
                <ul className="flex flex-col items-center gap-5">
                    <a href={`tel:${PHONE_NUMBER.raw}`} className="flex flex-row items-center hover:text-oresta-moss"><FiPhoneCall className="me-2" /><li>{PHONE_NUMBER.display}</li></a>
                    <a href={`mailto:${EMAIL}`} className="flex flex-row items-center hover:text-oresta-moss"><TfiEmail className="me-2" /><li>{EMAIL}</li></a>
                    <a href={GOOGLE_MAPS_URL} target="_blank" className="flex flex-row hover:text-oresta-moss">
                        <SlLocationPin className="me-2" />
                        <li className="text-center">{ADDRESS_STREET},<br />
                        {ADDRESS_CITY}<br />
                        {ADDRESS_POSTAL}
                        </li>
                    </a>
                </ul>
            </div>
        </div>
        <div className="p-5 md:py-4 gap-5 bg-black/50 flex flex-col md:flex-row md:justify-between text-white/40 text-sm">
            <div className="flex justify-center items-center">&copy; {new Date().getFullYear()} Oresta Kisil + Co.</div>
            <div className="flex justify-center items-center">
                <span className="italic">Website by</span>&nbsp;
                <a href="https://www.strictlywebdev.com/" target="_blank" rel="noopener" className="flex items-center group">
                    <img src="/images/swd_logo_sm_color.png" alt="StrictlyWebDev Logo" className="h-[20px] grayscale group-hover:grayscale-0 transition-all" />
                    <span className="font-bold group-hover:text-gray-100 transition-all">StrictlyWebDev</span>
                </a>
            </div>
        </div>
    </footer>
  )
}