import {AiFillStar} from "react-icons/ai"


export const ReviewCard = ({review}) => {

    const {rating, profile_photo_url, author_name, relative_time_description, text} = review;

    console.log("logging review from ReviewCard:", review)

    const numStars = Array.from({length: rating})

    return ( 
        <div className="flex p-5 mb-6 rounded-md bg-gradient-to-r from-gray-100 to-white shadow-md">
            <div><img src={profile_photo_url} className="max-w-[40px]" alt="customer profile image" /></div>
            <div className="px-5">
                <p className="font-bold pb-1">{author_name}</p>
                <p className="text-xs pb-1">{relative_time_description}</p>
                <p className="flex pb-2">{numStars.map((star, index) => <AiFillStar key={index} color="#FB8E28" size="1.2em" />)}</p>
                <p>{text}</p>
            </div>
        </div>
     );
}