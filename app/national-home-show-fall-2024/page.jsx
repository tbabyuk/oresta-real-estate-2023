import { TicketsForm } from "../components/TicketsForm";
import Link from "next/link";



const NationalHomeShowPage = () => {

  return (
    <div className="w-full min-h-[100vh] bg-oresta-primary">
        <header className="h-[380px] bg-[url('https://torontohomeshows.com/wp-content/uploads/2020/01/about-bg.jpg')] bg-center bg-cover relative border-b-2 border-white">
            <div className="h-full flex flex-col items-center justify-center space-y-9 px-5 relative z-10">
                <h3 className="text-center text-4xl lg:text-5xl font-semibold text-orange-600">GET YOUR TICKETS ($15-dollar value) <span className="underline">FOR FREE</span></h3>
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white">NATIONAL HOME SHOW - FALL 2024</h1>
                <h2 className="texxt-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300">SEPT 27-29, 2024</h2>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        </header>

        <div className="date px-5 py-16 bg-oresta-primary min-h-[300px] text-center">
            <figure className="flex justify-center pb-12">
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-gray-50">
                    <img src="/images/oresta.jpg" alt="photo of Oresta Kisil" className="rounded-full w-[200px] pb-5" />
                </div>
            </figure>
            <p className="text-xl md:text-2xl font-light text-gray-50 mb-16">To get your free tickets, simply enter your name, email address, preferred number of tickets, and submit!</p>
            <TicketsForm />
        </div>
        <footer className="min-h-[100px] py-12 bg-gray-50 flex flex-col justify-between sm:flex-row sm:justify-evenly">
            <Link href="/" className="grid place-items-center">
                <img src="/images/ok_logo.jpg" alt="Kisil Reasl Estate logo" className="w-[70%]" />
            </Link>
        </footer>
    </div>
  )
}

export default NationalHomeShowPage;