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
        <main className="px-5 xl:px-30 py-20 md:py-22 text-gray-600">
          <PageHeading title="Happy Clients" />
          <div className="flex justify-center flex-wrap gap-5">
              {clientReviewsArray && 
                  clientReviewsArray.map((review, index) => <ClientReviewCard key={index} review={review} />
              )}
          </div>
        </main>
      </MotionWrapper>
    )
  }
  
  export default HappyClientsPage;
  
  