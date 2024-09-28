


export const OrestaLandingPageHeader = () => {

    return(
        <header className="py-12 px-5 bg-[url('https://torontohomeshows.com/wp-content/uploads/2020/01/about-bg.jpg')] bg-center bg-cover relative border-b-2 border-white flex flex-col items-center justify-evenly md:flex-row">
            <div className="h-full flex flex-col items-center justify-center space-y-9 relative pb-12 z-10">
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white">NATIONAL HOME SHOW - FALL 2024</h1>
                <h2 className="texxt-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300">SEPT 27-29, 2024</h2>
            </div>
            <figure className="flex justify-center z-10">
                <div className="w-[235px] h-[235px] rounded-full overflow-hidden border-2 border-gray-50">
                    <img src="/images/oresta.jpg" alt="photo of Oresta Kisil" className="rounded-full w-[235px] pb-5" />
                </div>
            </figure>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        </header>
    )
}