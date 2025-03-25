import { clientReviewsArray } from "../clientReviews"
import { ClientReviewCard } from "./ClientReviewCard"
import { SectionHeading } from "./SectionHeading"
import { MotionWrapper } from "./MotionWrapper"



export const HappyClientsSection = () => {

    return (
        <MotionWrapper>
            <section className="oresta-section bg-oresta-light-green-with-image">
                <SectionHeading title="Happy Clients" />
                <div className="flex justify-center flex-wrap gap-5">
                    {clientReviewsArray && 
                        clientReviewsArray.filter(review => review.featured === true).map((review, index) => <ClientReviewCard key={index} review={review} />
                    )}
                </div>
            </section>
        </MotionWrapper>
    )
}