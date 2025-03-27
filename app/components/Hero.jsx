import Link from "next/link"



export const Hero = () => {

  return (
    <div className="h-[300px] flex justify-evenly px-0 md:px-5 bg-[url('/images/oresta_hero_bg_light_full.png')] bg-center bg-cover overflow-hidden">
        <div className="w-[50%] lg:w-[260px] flex lg:flex-shrink-0 justify-center">
            <img src="/images/oresta_banner_image.png" alt="photo of Oresta Kisil" className="w-[210px]" />
        </div>
        <div className="hidden lg:flex lg:flex-col px-8 font-light text-oresta-blue/70 self-center">
            <h1 className="text-3xl xl:text-4xl font-semibold mb-5">Oresta Kisil | Your west-end Toronto and GTA Realtor</h1>
            <ul className="list-inside list-disc font-normal text-xl xl:text-2xl mb-7">
                <li>Bringing ease and confidence to your real estate journey</li>
                <li>Supporting sellers, buyers, leasees & investors since 2015</li>
            </ul>
            <Link href="/contact#contact-form" className="mx-auto"><button className="oresta-action-orange w-[170px] h-[45px] lg:w-[290px] lg:h-[60px] lg:text-xl font-semibold">Get In Touch</button></Link>
        </div>
    </div>
  )
}