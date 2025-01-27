
import { WebinarForm } from "../components/WebinarForm"

export const metadata = {
    title: "Kisil RES | Webinar",
    description: "Learn about 'The Smith Manoeuvre Strategy'!",
}


const PageWebinar = () => {
  return (
    <div className="w-full min-h-[100vh] bg-oresta-blue">
        <header className="rounded-b-[50%] bg-[url('/images/house.jpg')] bg-center bg-cover pt-2 pb-10 md:pb-20">
            <h1 className="pt-5 text-center leading-[60px]"><span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">LEVERAGING</span><br /> <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-oresta-moss">YOUR MORTGAGE</span><br /><span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">with the &quot;SMITH MANOEUVRE&quot;</span><br /><span className="text-3xl lg:text-4xl font-semibold text-orange-600">FREE WEBINAR</span></h1>
        </header>
        <div className="flex flex-col pt-12 md:flex-row justify-evenly md:-translate-y-[30%]">
            <figure className="mb-12 md:mb-0 flex flex-col items-center md:-translate-y-[20%]">
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-4 border-2 border-gray-50">
                    <img src="/images/christina.jpg" alt="photo of Christina Pentlichuk" className="rounded-full w-[200px] pb-5" />
                </div>
                <figcaption className="text-center"><span className="text-gray-50 font-semibold">CHRISTINA PENTLICHUK</span><br /><span className="text-oresta-moss font-light text-[0.9rem]">Smith Manoeuvre<br /> Certified Professional</span></figcaption>
            </figure>
            <figure className="mb-12 md:mb-0 flex flex-col items-center">
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-4 border-2 border-gray-50">
                    <img src="/images/oresta.jpg" alt="photo of Oresta Kisil" className="rounded-full w-[200px] pb-5" />
                </div>
                <figcaption className="text-center"><span className="text-gray-50 font-semibold">ORESTA KISIL</span><br /><span className="text-oresta-moss font-light text-[0.9rem]">Sales Representative, Keller Williams<br /> Real Estate Associates Brokerage</span></figcaption>
            </figure>
            <figure className="mb-12 md:mb-0 flex flex-col items-center md:-translate-y-[20%]">
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-4 border-2 border-gray-50">
                    <img src="/images/stef.jpg" alt="photo of Stef Edwards" className="rounded-full w-[200px] pb-5" />
                </div>
                <figcaption className="text-center"><span className="text-gray-50 font-semibold">STEF EDWARDS</span><br /><small className="text-oresta-moss font-light text-[0.9rem]">Smith Manoeuvre<br /> Certified Professional</small></figcaption>
            </figure>
        </div>
        <div className="date py-16 bg-oresta-moss min-h-[100px] text-center">
            <p className="text-xl md:text-2xl font-light mb-10">This webinar will take place on:</p>
            <p className="text-2xl md:text-4xl font-semibold mb-10">Wednesday, Sept. 27, 2023</p>
            <p className="text-2xl md:text-4xl font-semibold">7:30-8:45pm (EDT)</p>
        </div>
        <div className="date px-5 py-16 bg-oresta-blue min-h-[300px] text-center">
            <p className="text-xl md:text-2xl font-light text-gray-50 mb-16">To register and reserve your spot, simply fill out your name and email address below:</p>
            <WebinarForm />
        </div>
        <div className="min-h-[200px] py-16 bg-oresta-moss px-5 sm:px-14 lg:px-28">
            <div className="grid md:grid-cols-2 gap-10 leading-8 text-oresta-blue">
                <div className="mb-16 md:mb-0 md:px-5 text-center">
                    <h3 className="text-xl font-semibold mb-6 xl:px-24">The Smith Manoeuvre Strategy</h3>
                    <p>A legal tax strategy in Canada that enables homeowners to make the interest on their residential mortgage tax-deductible.</p>
                </div>
                <div className="text-center md:px-5 xl:px-24">
                    <h3 className="text-xl font-semibold mb-6">Tax Benefits & Amortization Reduction</h3>
                    <p>Learn how to reduce the mortgage&apos;s amortization period, helping you become debt-free sooner.</p>
                </div>
            </div>
        </div>
        <footer className="min-h-[100px] py-8 bg-gray-50 flex flex-col justify-between sm:flex-row sm:justify-evenly">
            <div className="grid place-items-center">
                <img src="/images/kw_logo.jpg" alt="Keller Williams logo" className="w-[70%]" />
            </div>
            <div className="grid place-items-center">
                <img src="/images/ok_logo.jpg" alt="Kisil Reasl Estate logo" className="w-[70%]" />
            </div>
            <div className="grid place-items-center">
                <img src="/images/vg_logo.jpg" alt="Vine Group logo" className="w-[70%]" />
            </div>
        </footer>
    </div>
  )
}

export default PageWebinar