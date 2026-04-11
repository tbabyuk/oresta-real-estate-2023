import { clientReviewsArray } from "../clientReviews"
import { ClientReviewCard } from "./ClientReviewCard"
import { SectionHeading } from "./SectionHeading"
import { MotionWrapper } from "./MotionWrapper"



export const HappyClientsSection = () => {

    return (
        <MotionWrapper>
            <section className="oresta-container bg-oresta-light-green-with-image">
                <div className="oresta-inner-container">
                    <SectionHeading title="Happy Clients" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {clientReviewsArray && 
                            clientReviewsArray.filter(review => review.featured === true).map((review, index) => <ClientReviewCard key={index} review={review} />
                        )}
                    </div>
                </div>
            </section>
        </MotionWrapper>
    )
}