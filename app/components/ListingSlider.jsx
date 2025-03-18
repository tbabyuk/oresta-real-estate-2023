"use client"

import { useState, useEffect, useRef } from "react";
import { arlingtonListingPhotosArray } from "../data/data";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";



export const ListingSlider = () => {
    const scrollContainerRef = useRef(null);
    const itemWidth = 275 + 8 // item width + gap width

    const [photoZoomOpen, setPhotoZoomOpen] = useState(false)
    const [activePhoto, setActivePhoto] = useState({})

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

    const handlePrevPhoto = () => {
        console.log("handlePrevPhoto FIRED")
        const prevPhoto = activePhoto.id === 1 ? arlingtonListingPhotosArray[0] : arlingtonListingPhotosArray.find((photo) => photo.id === activePhoto.id - 1)
        setActivePhoto(prevPhoto)
    }

    const handleNextPhoto = () => {
        console.log("handleNextPhoto FIRED")
        const nextPhoto = activePhoto.id === arlingtonListingPhotosArray.length ? arlingtonListingPhotosArray[arlingtonListingPhotosArray.length - 1] : arlingtonListingPhotosArray.find((photo) => photo.id === activePhoto.id + 1)
        setActivePhoto(nextPhoto)
    }

    useEffect(() => {
        
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault()
            if (e.key === "ArrowRight") {
                if(photoZoomOpen) {
                    handleNextPhoto()
                } else {
                    handleScrollRight()
                }
            }
            if (e.key === "ArrowLeft") {
                console.log("Left arrow fired")
                if(photoZoomOpen) {
                    handlePrevPhoto()
                } else {
                    handleScrollLeft()
                }
            }
            }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
    }, [photoZoomOpen, activePhoto]);


    return(
        <>
            <div className="relative mt-10">
                <RiArrowLeftSFill className="hidden md:flex z-10 absolute -left-3 top-1/2 -translate-y-1/2 text-white/80 cursor-pointer no-select" size={80} onClick={handleScrollLeft} />
                <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory oresta-hide-scrollbar" ref={scrollContainerRef}>
                    {arlingtonListingPhotosArray.map((photo) => (
                        <div key={photo.id} className="relative rounded-lg flex-shrink-0 snap-start md:snap-none" onClick={() => handleZoomPhoto(photo)}>
                            <img
                                src={photo.src}
                                className="rounded-lg cursor-pointer"
                                width={275}
                                height={300}
                            />
                        </div>
                    ))}
                </div>
                <RiArrowRightSFill className="hidden md:flex z-10 absolute -right-3 top-1/2 -translate-y-1/2 text-white/80  cursor-pointer no-select" size={80} onClick={handleScrollRight} />
            </div>
            {photoZoomOpen && (
                <div className="fixed cursor-pointer top-0 left-0 w-full h-full z-50 bg-black/80 flex justify-center items-center overflow-y-hidden" data-role="modal" onClick={(e) => handleCloseZoomPhoto(e)}>
                    <span className="exit absolute cursor-pointer top-1 right-5 text-gray-100 font-semibold text-[2.5rem]" data-role="modal" onClick={(e) => handleCloseZoomPhoto(e)}>&#10005;</span>
                    <div className="relative">
                        <img
                            src={activePhoto.src}
                            className="rounded-lg cursor-default w-[800px] max-w-full"
                        />

                        <RiArrowLeftSFill className={`z-10 absolute ${activePhoto.id === 1 && "hidden"} -left-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/90 no-select`} size={80} onClick={handlePrevPhoto} />
                        <RiArrowRightSFill className={`z-10 absolute ${activePhoto.id === arlingtonListingPhotosArray.length && "hidden"} -right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/90 no-select`} size={80} onClick={handleNextPhoto} />
                    </div>
                </div>
            )}
        </>
    )
}