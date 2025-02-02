import { clientReviewsArray } from "../clientReviews"
import { ClientReviewCard } from "./ClientReviewCard"




export const ClientReviewsSection = () => {

    return (
        <section className="px-5 md:px-20 py-16 bg-gray-100">
            <h2 className="text-center text-3xl mb-10">Happy Clients</h2>
            <div className="flex justify-center flex-wrap gap-5">
                {clientReviewsArray && 
                    clientReviewsArray.filter(review => review.featured === true).map((review, index) => <ClientReviewCard key={index} review={review} />
                )}
            </div>
        </section>
    )
}