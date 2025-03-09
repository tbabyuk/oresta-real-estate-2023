import { SubscribeSection } from "../components/SubscribeSection"
import { EventsSection } from "../components/EventsSection"
import { ClientReviewsSection } from "../components/ClientReviewsSection"
import { BioSection } from "../components/BioSection"
import { ContactSection } from "../components/ContactSection"
import { CurrentListingsSection } from "../components/CurrentListingsSection"


export const metadata = {
  title: "OK+Co. | Home",
  description: "Buying and selling homes in Toronto, Mississauga, and the GTA!",
}


const Home = () => {

  return (
    <>
      <SubscribeSection />
      <main className="text-gray-600">
        {/* <EventsSection /> */}
        <CurrentListingsSection />
        <ClientReviewsSection />
        <BioSection />
        <ContactSection />
      </main>
    </>
  )
}

export default Home

