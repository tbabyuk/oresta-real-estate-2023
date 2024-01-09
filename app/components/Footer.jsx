
import Link from "next/link"
import {FiPhoneCall} from "react-icons/fi"
import {TfiEmail} from "react-icons/tfi"
import {SlLocationPin} from "react-icons/sl"


const Footer = () => {
  return (
    <footer className="grid md:grid-cols-3 min-h-[200px] p-12 bg-oresta-primary text-oresta-gray">
        <div className="mb-20 md:mb-0">
            <h3 className="text-xl text-center mb-10">SOCIAL:</h3>
            <div className="flex justify-center gap-5">
                <a href="https://www.facebook.com/orestakisilandco/" target="_blank">
                    <img src="/images/facebook.png" alt="facebook logo" className="w-12" />
                </a>
                <a href="https://www.instagram.com/orestakisilandco/" target="_blank">
                    <img src="/images/instagram.png" alt="instagram logo" className="w-12" />
                </a>
                <a href="" target="_blank">
                    <img src="/images/youtube.png" alt="twitter logo" className="w-12" />
                </a>
                <a href="https://www.linkedin.com/in/orestababyuk/?trk=hp-identity-name" target="_blank">
                    <img src="/images/linkedin.png" alt="linkedin logo" className="w-12" />
                </a>
            </div>
        </div>
        <div className="mb-20 md:mb-0">
            <h3 className="text-xl text-center mb-10">LEARN MORE:</h3>
            <ul className="flex flex-col items-center gap-6">
                <Link href="/" className="hover:text-oresta-light"><li>Home</li></Link>
                <Link href="/happy-clients" className="hover:text-oresta-light"><li>Happy Clients</li></Link>
                <Link href="/contact" className="hover:text-oresta-light"><li>Contact</li></Link>
            </ul>
        </div>
        <div>
            <h3 className="text-xl text-center mb-10">CONTACT:</h3>
            <ul className="flex flex-col items-center gap-6">
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
    </footer>
  )
}

export default Footer
