import Link from "next/link"
import {FiPhoneCall} from "react-icons/fi"
import {TfiEmail} from "react-icons/tfi"
import {SlLocationPin} from "react-icons/sl"


const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()


  return (
    <footer className="min-h-[200px] bg-oresta-primary text-oresta-gray">
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
                    <Link href="/" className="hover:text-oresta-light"><li>Home</li></Link>
                    <Link href="/happy-clients" className="hover:text-oresta-light"><li>Happy Clients</li></Link>
                    <Link href="/contact" className="hover:text-oresta-light"><li>Contact</li></Link>
                    <Link href="/resources/videos" className="hover:text-oresta-light"><li>Videos</li></Link>
                    <Link href="/resources/preferred-vendors" className="hover:text-oresta-light"><li>Preferred Vendors</li></Link>
                </ul>
            </div>
            <div className="flex-1">
                <h3 className="text-lg text-center mb-8">CONTACT:</h3>
                <ul className="flex flex-col items-center gap-5">
                    <a href="tel:+4163195784" className="flex flex-row items-center hover:text-oresta-light"><FiPhoneCall className="me-2" /><li>(416) 319-5748</li></a>
                    <a href="mailto:orestakisil@kw.com" className="flex flex-row items-center hover:text-oresta-light"><TfiEmail className="me-2" /><li>orestakisil@kw.com</li></a>
                    <a href="https://goo.gl/maps/ifTnaZTeuerQht1i9" target="_blank" className="flex flex-row hover:text-oresta-light">
                        <SlLocationPin className="me-2" />
                        <li className="text-center">103 Lakeshore Rd. E,<br />
                        Mississauga, ON<br />
                        L5G 1E2
                        </li>
                    </a>
                </ul>
            </div>
        </div>
        <div className="p-5 md:py-4 gap-5 bg-black/50 flex flex-col-reverse md:flex-row md:justify-between text-white/40 text-sm">
            <div className="flex justify-center items-center"><span className="italic">Website by</span>&nbsp;<a href="https://www.strictlywebdev.com/" target="_blank" className="flex items-center"><img src="/images/swd_logo_sm_color.png" className="h-[20px] filter grayscale" /><span className="font-bold">StrictlyWebDev</span></a></div>
            <div className="flex justify-center items-center">&copy; {year} Oresta Kisil Co.</div>
        </div>
    </footer>
  )
}

export default Footer
