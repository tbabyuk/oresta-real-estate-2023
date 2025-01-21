import Link from "next/link"





export const EventsSection = () => {


  return (
        <section className="px-5 md:px-20 py-16">
            <h2 className="text-center text-3xl mb-10">Upcoming Events</h2>
            <div className="flex justify-center mb-6">
                <img src="/images/events/foundations_of_wealth_flyer.png" className="w-[400px] max-w-[100%]" alt="Foundations of Wealth Event Flyer" />
            </div>
            <p className="text-center">To register, scan the barcode in the flyer or <Link href="/foundations-of-wealth" className="font-bold">CLICK HERE.</Link></p>
        </section>
    )
}