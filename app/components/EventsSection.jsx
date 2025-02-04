import Link from "next/link"





export const EventsSection = () => {


  return (
        <section className="px-5 md:px-20 py-16">
            <h2 className="text-center text-3xl mb-10">Upcoming Events</h2>
            <div className="flex flex-col items-center gap-y-4 gap-x-8 md:flex-row sm:justify-center mb-8">
                <img src="/images/events/foundations_2.png" className="w-[350px] lg:w-[400px] max-w-[100%]" alt="Foundations of Wealth Event Flyer" />
                <img src="/images/events/foundations_1.png" className="w-[350px] lg:w-[400px] max-w-[100%]" alt="Foundations of Wealth Event Flyer" />
            </div>
            <p className="text-center"><Link href="/foundations-of-wealth" className="font-bold">CLICK HERE TO REGISTER</Link></p>
        </section>
    )
}