import CalendlyWidgetButton from "./CalendlyWidgetButton";



export const Hero = () => {

  return (
    <div className="flex justify-evenly px-0 md:px-5 py-10 bg-[url('/images/oresta_hero_bg_light_full.png')] bg-center bg-cover">
        <div className="w-[50%] md:w-[35%] flex flex-shrink-0 justify-center">
            <img src="/images/oresta_hero_image.png" alt="photo of Oresta Kisil" className="max-w-[235px] h-auto object-contain" />
        </div>
        <div className="w-[50%] md:w-[60%] p-1 flex flex-col justify-center">
            <h1 className="flex flex-col items-start md:mb-3 text-gray-500/90">
                <span className="text-3xl md:text-4xl font-semibold border-gray-500/90 border-b-2 pb-3 mb-3">Oresta Kisil</span>
                <span className="text-2xl leading-9">Your west-end Toronto and GTA Realtor</span>
            </h1>
            <ul className="hidden md:flex md:flex-col md:text-xl space-y-3 list-inside list-disc text-lg">
                <li>Bringing ease and confidence to your real estate journey</li>
                <li>Supporting sellers, buyers, leasees & investors since 2015</li>
            </ul>
            <div className="mt-5 text-center min-[400px]:text-left">
                <CalendlyWidgetButton />
            </div>
        </div>
    </div>
  )
}