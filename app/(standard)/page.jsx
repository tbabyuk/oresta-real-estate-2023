import { SubscribeSection } from "../components/SubscribeSection"
import { EventsSection } from "../components/EventsSection"
import { ClientReviewsSection } from "../components/ClientReviewsSection"
import { BioSection } from "../components/BioSection"


export const metadata = {
  title: "OK+Co. | Home",
  description: "Buying and selling homes in Toronto, Mississauga, and the GTA!",
}


const Home = () => {

  return (
    <>
      <SubscribeSection />
      <main className="text-gray-600">
        <EventsSection />
        <ClientReviewsSection />
        <BioSection />
      </main>
    </>
  )
}

export default Home

