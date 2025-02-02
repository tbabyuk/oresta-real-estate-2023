import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";



export const ClientReviewCard = ({review}) => {

    return ( 
        <div href={review.link} className="w-full max-w-[420px] relative flex flex-col p-5 rounded-sm border-2 border-s-4 border-s-oresta-orange/60 shadow-md shadow-gray-200">
            <div className="flex gap-x-1">
                <FaStar className="text-oresta-orange/60 text-xl"/>
                <FaStar className="text-oresta-orange/60 text-xl"/>
                <FaStar className="text-oresta-orange/60 text-xl"/>
                <FaStar className="text-oresta-orange/60 text-xl"/>
                <FaStar className="text-oresta-orange/60 text-xl"/>
            </div>
            <div className="my-5">{review.text.slice(0, 200) + "..."}<Link href={review.link} target="_blank" className="underline text-oresta-moss text-sm">full review</Link></div>
            <div className="flex items-center gap-x-3">
                <img src={review.icon} className="rounded-full h-[45px]" />
                <div className="text-[0.9rem]">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-gray-400">{review.role}</div>
                </div>
            </div>
            <FcGoogle className="absolute right-3 bottom-3 text-[2rem]" />
        </div>
     );
}