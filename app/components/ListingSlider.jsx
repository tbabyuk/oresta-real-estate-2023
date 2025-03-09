"use client"

import { useState, useRef } from "react";
import { arlingtonListing } from "../data/data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";



export const ListingSlider = () => {
    const scrollContainerRef = useRef(null);
    const itemWidth = 275 + 8 // item width + gap width

    const [photoZoomOpen, setPhotoZoomOpen] = useState(false)
    const [activePhoto, setActivePhoto] = useState("")

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
          }    
    }

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
          }    
    }

    const handleZoomPhoto = (photo) => {
        setActivePhoto(photo)
        setPhotoZoomOpen(true)
    }

    const handleCloseZoomPhoto = (e) => {
        if(e.target.dataset.role === "modal") {
            setPhotoZoomOpen(false)
        }
    }

    return(
        <>
            <div className="relative mt-10">
                <FaArrowAltCircleLeft className="hidden md:flex z-10 absolute left-0 top-1/2 -translate-y-1/2 text-white/60 cursor-pointer" size={50} onClick={handleScrollLeft} />
                <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory oresta-hide-scrollbar" ref={scrollContainerRef}>
                    {arlingtonListing.map((photo, index) => (
                        <div key={index} className="relative rounded-lg bg-green-500 flex-shrink-0 snap-start md:snap-none" onClick={() => handleZoomPhoto(photo.src)}>
                            <img
                                src={photo.src}
                                className="rounded-lg cursor-pointer"
                                width={275}
                                height={300}
                            />
                        </div>
                    ))}
                </div>
                <FaArrowAltCircleRight className="hidden md:flex z-10 absolute right-0 top-1/2 -translate-y-1/2 text-white/60 cursor-pointer" size={50} onClick={handleScrollRight} />
            </div>
            {photoZoomOpen && (
                <div className="fixed cursor-pointer top-0 left-0 w-full h-full z-50 bg-black/60 flex justify-center items-center overflow-y-hidden" data-role="modal" onClick={(e) => handleCloseZoomPhoto(e)}>
                    <span className="exit absolute cursor-pointer top-1 right-5 text-gray-100 font-semibold text-[2.5rem]" data-role="modal" onClick={(e) => handleCloseZoomPhoto(e)}>&#10005;</span>
                    <img
                        src={activePhoto}
                        className="rounded-lg cursor-default w-[800px] max-w-full"
                    />
                </div>
            )}
        </>
    )
}