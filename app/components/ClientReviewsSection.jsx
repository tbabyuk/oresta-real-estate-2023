import { clientReviewsArray } from "../clientReviews"
import { ClientReviewCard } from "./ClientReviewCard"
import { SectionHeading } from "./SectionHeading"
import { MotionWrapper } from "./MotionWrapper"
import { TiltDivider } from "./TiltDivider"


export const ClientReviewsSection = () => {

    return (
        <MotionWrapper>
            <section className="px-5 md:px-20 py-20 relative bg-gray-200/50">
                <TiltDivider style="tilt-divider-top" />
                <SectionHeading title="Happy Clients" />
                <div className="flex justify-center flex-wrap gap-5">
                    {clientReviewsArray && 
                        clientReviewsArray.filter(review => review.featured === true).map((review, index) => <ClientReviewCard key={index} review={review} />
                    )}
                </div>
                <TiltDivider style="tilt-divider-bottom" />
            </section>
        </MotionWrapper>
    )
}