import Link from "next/link"
import {FiPhoneCall} from "react-icons/fi"
import {TfiEmail} from "react-icons/tfi"
import { Navbar } from "./Navbar"



const Header = () => {
  return (
    <header className="min-h-[360px] flex flex-col relative">
        {/* TOP HEADER */}
        <div className="min-h-12 py-2 px-3 md:px-5 bg-oresta-primary text-oresta-gray flex justify-between">
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
                <a href="tel:+4163195784" className="flex flex-row items-center hover:text-oresta-light">
                    <FiPhoneCall className="hidden md:block me-2" />(416) 319-5748
                </a>
                <Link href="/contact" className="flex flex-row items-center hover:text-oresta-light cursor-pointer"><TfiEmail className="hidden md:block me-2" />Email Me</Link>
            </div>
        </div>
        <Navbar />
        {/* HERO */}
        <div className="flex justify-between px-0 md:px-5 h-full bg-[url('/images/oresta_hero_bg_light_2.png')] bg-center bg-cover overflow-hidden">
            <img src="/images/oresta_banner_image.png"  alt="photo of Oresta Kisil" style={{width: "190px"}} />
            <div className="hidden lg:flex lg:flex-col lg:mx-3 lg:px-3 lg:py-6 lg:rounded font-light text-oresta-primary/70 self-center">
                <h1 className="text-3xl xl:text-4xl font-semibold pb-4 mb-1">Oresta Kisil | Your west-end Toronto and GTA Realtor</h1>
                <ul className="list-inside list-disc space-y-3 font-normal text-xl xl:text-2xl">
                    <li>Bringing ease and confidence to your real estate journey</li>
                    <li>Supporting sellers, buyers, leasees + investors since 2016</li>
                </ul>
            </div>
            <div className="flex flex-col items-end justify-evenly sm:min-w-[300px]">
                <Link href="/" className="block h-fit"><img src="/images/logo_white_transparent.png" alt="Oresta Kisil Real Estate logo" className="flex-shrink-0 bg-black/30 rounded-2xl h-[90px] sm:h-[150px]" /></Link>
                <h1 className="sm:hidden px-4 text-center text-2xl">Find your Dream Home in Toronto & the GTA</h1>
            </div>
        </div>
    </header>
  )
}

export default Header