import Link from "next/link"
import {FiPhoneCall} from "react-icons/fi"
import {TfiEmail} from "react-icons/tfi"
import { Navbar } from "./Navbar"



const Header = () => {
  return (
    <header className="flex flex-col relative">
        {/* TOP HEADER */}
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
        <Navbar />
        {/* HERO */}
        <div className="h-[300px] flex justify-evenly px-0 md:px-5 bg-[url('/images/oresta_hero_bg_light.png')] bg-center bg-cover overflow-hidden">
            <div className="w-[50%] lg:w-[260px] flex lg:flex-shrink-0 justify-center">
                <img src="/images/oresta_banner_image.png" alt="photo of Oresta Kisil" className="w-[210px]" />
            </div>
            <div className="hidden lg:flex lg:flex-col px-8 font-light text-oresta-blue/70 self-center">
                <h1 className="text-3xl xl:text-4xl font-semibold pb-4 mb-1">Oresta Kisil | Your west-end Toronto and GTA Realtor</h1>
                <ul className="list-inside list-disc space-y-3 font-normal text-xl xl:text-2xl">
                    <li>Bringing ease and confidence to your real estate journey</li>
                    <li>Supporting sellers, buyers, leasees & investors since 2015</li>
                </ul>
            </div>
            <div className="w-[50%] lg:w-auto flex lg:flex-shrink-0 flex-col items-center justify-evenly">
                <Link href="/" className="block h-fit"><img src="/images/logo_white_transparent.png" alt="Oresta Kisil Real Estate logo" className="flex-shrink-0 bg-black/30 rounded-xl h-[85px] sm:h-[120px] lg:h-[140px]" /></Link>
                <h1 className="lg:hidden px-3 text-center text-xl">Find your Dream Home in Toronto & the GTA</h1>
                <Link href="/contact"><button className="oresta-action-orange w-[170px] h-[45px] lg:w-[290px] lg:h-[60px] lg:text-xl">Get In Touch</button></Link>
            </div>
        </div>
    </header>
  )
}

export default Header