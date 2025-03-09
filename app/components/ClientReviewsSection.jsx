import { clientReviewsArray } from "../clientReviews"
import { ClientReviewCard } from "./ClientReviewCard"
import { SectionHeading } from "./SectionHeading"



export const ClientReviewsSection = () => {

    return (
        <section className="px-5 md:px-20 py-16 bg-gray-100">
            <SectionHeading title="Happy Clients" />
            <div className="flex justify-center flex-wrap gap-5">
                {clientReviewsArray && 
                    clientReviewsArray.filter(review => review.featured === true).map((review, index) => <ClientReviewCard key={index} review={review} />
                )}
            </div>
        </section>
    )
}