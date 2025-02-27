"use client"

import ReactPlayer from "react-player"


const VideosPage = () => {
  return (
    <main className="px-5 md:px-20 xl:px-40 py-20 md:py-22 text-gray-600">
        <h1 className="text-center text-4xl sm:mb-20">Videos</h1>
        <div className="flex justify-center">
            <ReactPlayer 
                url='/the_smith_manoeuvre.mp4' 
                controls 
                className="w-[100%] md:w-[50%]"
            />
        </div>
    </main>  
  )
}

export default VideosPage