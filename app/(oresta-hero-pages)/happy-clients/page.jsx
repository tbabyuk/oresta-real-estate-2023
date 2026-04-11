import { ClientReviewCard } from "@/app/components/ClientReviewCard"
import { clientReviewsArray } from "@/app/clientReviews"
import { PageHeading } from "@/app/components/PageHeading"
import { MotionWrapper } from "@/app/components/MotionWrapper"


export const metadata = {
  title: "OK+Co. | Happy Clients",
  description: "See what our clients are saying!",
}



const HappyClientsPage = async () => {

    return (
      <MotionWrapper>
        <div className="oresta-container">
          <div className="oresta-inner-container">
            <PageHeading title="Happy Clients" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {clientReviewsArray && 
                    clientReviewsArray.map((review, index) => <ClientReviewCard key={index} review={review} />
                )}
            </div>
          </div>
        </div>
      </MotionWrapper>
    )
  }
  
  export default HappyClientsPage;
  
  