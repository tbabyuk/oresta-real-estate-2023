import Link from "next/link";
import { SpooktacularTicketsForm } from "@/app/components/SpooktacularTicketsForm";



const SpooktacularLandingPage = () => {

  return (
    <div className="w-full min-h-[100vh] bg-oresta-blue">
        <header className="min-h-[330px] p-5 bg-[url('/images/landing-pages/spooktacular_header_bg.jpg')] md:bg-center bg-cover relative border-b-2 border-white flex flex-col items-center justify-evenly lg:flex-row">
            <div className="flex flex-col items-center justify-center p-5 space-y-7 rounded-xl relative pb-12">
                <div className="text-center text-xl md:text-3xl font-semibold text-gray-100 z-20">You are invited to our Client Appreciation Event:</div>
                <div className="text-center text-4xl md:text-[3.5rem] leading-[1.2] text-orange-500 z-20 griffy">MOUNTSBERG&apos;S SPOOKTACULAR HALLOWEEN !!!</div>
                <div className="text-center text-xl md:text-3xl font-semibold text-gray-100 z-20">Sunday, Oct. 19, 2025 - 3:30pm | Mountsberg Conservation Area</div>
            </div>
            <figure className="flex justify-center pb-6 lg:pb-0">
                <div className="w-[230px] h-[230px] mx-16 rounded-full overflow-hidden border-2 border-gray-50">
                <Link href="/" target="_blank">
                    <img src="/images/oresta.jpg" alt="photo of Oresta Kisil" className="rounded-full w-[235px] pb-5" />
                </Link>
                </div>
            </figure>
        </header>
        <div className="date px-5 py-20 bg-oresta-blue min-h-[300px]">
            <span className="text-lg md:text-xl font-light text-gray-50 block mb-10 text-center">Join us for a day of fall fun as we celebrate YOU! Bring your family (and your furry friends!) to enjoy:</span>
            <ul className="list-inside list-disc font-light text-gray-100 text-lg md:text-xl space-y-3 w-fit mx-auto">
                <li>Delicious snacks and treats</li>
                <li>Creative pumpkin painting</li>
                <li>Hands-on wood branding activity</li>
                <li>A walk through the spooky trail</li>
                <li>Toasting s&apos;mores by the fire</li>
            </ul>
        </div>
        <div className="date px-5 py-20 bg-oresta-moss min-h-[300px] text-center">
            <p className="text-lg md:text-xl font-light text-gray-800 mb-16">To get your free tickets, simply enter your name, email address, expected number of guests, and click submit!</p>
            <SpooktacularTicketsForm />
        </div>
        <footer className="min-h-[100px] py-12 bg-gray-50 flex flex-col justify-between sm:flex-row sm:justify-evenly bg-[url('/images/landing-pages/spooktacular_footer_bg.jpg')] bg-center bg-cover">
            <Link href="/" className="grid place-items-center">
                <img src="/images/ok_logo_white_transparent.png" alt="Kisil Real Estate logo" className="w-[300px]" />
            </Link>
        </footer>
    </div>
  )
}

export default SpooktacularLandingPage;