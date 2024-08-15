import { ReviewCard } from "./ReviewCard"

export const metadata = {
  title: "OK+Co. | Happy Clients",
  description: "See what our clients are saying!",
}


const fetchReviews = async () => {
      const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJo0v07uJHK4gRL9AzD12-yxM&key=${process.env.GOOGLE_REVIEWS_API_KEY}&fields=reviews&maxheight=10`, {
        next: {
            // revalidate: 604800
            revalidate: 0
        }
      })
      const data = await res.json()
      return data.result.reviews
}


const HappyClients = async () => {

  const reviews = await fetchReviews();

    return (
      <main className="px-5 md:px-20 xl:px-40 py-20 md:py-28 text-gray-600">
        <h1 className="text-center text-4xl mb-20">Happy Clients</h1>
        <div className="flex flex-wrap gap-4">
            {reviews && 
                reviews.map((review, index) => <ReviewCard key={index} review={review} />
            )}
        </div>
      </main>
        
    )
  }
  
  export default HappyClients;
  
  