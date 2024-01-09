import Link from "next/link"
import {FiPhoneCall} from "react-icons/fi"
import {TfiEmail} from "react-icons/tfi"



const Header = () => {
  return (
    <header className="min-h-[330px] flex flex-col">
        {/* TOP HEADER */}
        <div className="header-top min-h-12 py-2 px-3 md:px-5 bg-oresta-primary text-oresta-gray flex justify-between">
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
                <a href="mailto:orestakisil@kw.com" className="flex flex-row items-center hover:text-oresta-light">
                    <TfiEmail className="hidden md:block me-2" />Email Me
                </a>
            </div>
        </div>
        <div className="header-middle flex justify-between px-0 md:px-5 h-full bg-[url('/images/oresta_header_bg.jpg')] bg-center bg-cover overflow-hidden">
            <img src="/images/oresta_banner_image.png"  alt="photo of Oresta Kisil" style={{width: "200px"}} />
            <div className="hidden lg:flex lg:flex-col font-light w-[500px] text-oresta-primary text-center self-center">
                <a href="tel:+4163195784" className="text-6xl mb-6">(416) 319-5748</a>
                <a href="mailto:orestakisil@kw.com" className="text-4xl">orestakisil@kw.com</a>
            </div>
            <Link href="/"><img src="/images/logo_white_transparent.png" alt="Oresta Kisil Real Estate logo" className="flex-shrink-0 bg-black bg-opacity-40 rounded-b-2xl h-[90px] sm:h-[150px]" /></Link>
        </div>
        <nav className="h-12 bg-oresta-light">
            <ul className="flex justify-center items-center gap-10 h-full bg-oresta-light text-gray-600">
                <Link href="/" className="hover:text-oresta-primary"><li>HOME</li></Link>
                <Link href="/happy-clients" className="hover:text-oresta-primary"><li>HAPPY CLIENTS</li></Link>
                <Link href="/contact" className="hover:text-oresta-primary"><li>CONTACT</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header