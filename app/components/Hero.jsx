import Link from "next/link"



export const Hero = () => {

  // lg:w-[260px]

  return (
    <div className="h-[325px] flex justify-evenly px-0 md:px-5 bg-[url('/images/oresta_hero_bg_light_full.png')] bg-center bg-cover overflow-hidden">
        <div className="w-[50%] md:w-[40%] lg:w-[30%] flex lg:flex-shrink-0 justify-center">
            <img src="/images/oresta_banner_image.png" alt="photo of Oresta Kisil" className="w-[115%] max-w-[235px] h-[350px]" />
        </div>
        <div className="w-[50%] md:w-[60%] lg:w-[45%] p-1 flex flex-col justify-center">
            <h1 className="flex flex-col items-start md:mb-3 text-gray-500/90">
                <span className="text-3xl md:text-4xl font-semibold border-gray-500/90 border-b-2 pb-3 mb-3">Oresta Kisil</span>
                <span className="text-2xl leading-9">Your west-end Toronto and GTA Realtor</span>
            </h1>
            <ul className="hidden md:flex md:flex-col md:text-xl space-y-3 list-inside list-disc text-lg">
                <li>Bringing ease and confidence to your real estate journey</li>
                <li>Supporting sellers, buyers, leasees & investors since 2015</li>
            </ul>
            <Link href="/contact#contact-form" className="md:hidden mt-5"><button className="oresta-action-orange w-[170px] h-[45px] lg:w-[290px] lg:h-[60px] lg:text-xl font-semibold">Get In Touch</button></Link>
        </div>
        <div className="hidden lg:flex lg:w-[25%] lg:items-center lg:justify-center">
            <Link href="/contact#contact-form" className="mx-auto"><button className="oresta-action-orange w-[170px] h-[45px] lg:h-[60px] lg:text-xl font-semibold">Get In Touch</button></Link>
        </div>
    </div>
  )
}