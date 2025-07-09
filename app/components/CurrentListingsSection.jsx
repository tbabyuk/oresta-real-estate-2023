import { ListingSlider } from "./ListingSlider"
import { SectionHeading } from "./SectionHeading"
import { MotionWrapper } from "./MotionWrapper"
import Link from "next/link"


export const CurrentListingsSection = () => {

  return (
        <MotionWrapper>
            <section className="oresta-section">
                <SectionHeading title="Current Listings" />
                <ul className="flex flex-col mb-12">
                    <li><h3 className="text-center text-xl">#66 - 7285 Magistrate Terrace, Mississauga</h3></li>
                    <li><h4 className="text-center text-xl">3 Beds, 3 Baths Condo Townhome</h4></li>
                    <li><h4 className="text-center text-xl">$839,000</h4></li>
                </ul>
                <ListingSlider />
                <p className="my-10">Bright and beautifully maintained, this end-unit townhouse is tucked into a quiet, family-friendly court with no through traffic and access to a private park. Inside, you'll find a beautifully renovated kitchen featuring quartz countertops, stainless steel appliances (fridge, stove, dishwasher, microwave), a modern backsplash and pot lights. The open living space boasts 18 foot ceilings, hardwood (no carpet on upper levels), and a hardwood staircases. Central vacuum, new A/C and furnace included. Located in a welcoming neighbourhood close to top-rated schools (check out HoodQ report), highways, public transit, Pearson Airport, shopping plazas, and Heartland Town Centre. Maintenance fees cover the roof, windows (and window cleaning), landscaping, and all exterior elements for added peace of mind.</p>
                <div className="flex justify-center">
                    <Link href="/contact#contact-form" className="px-6 py-4 font-semibold oresta-action-orange">Contact Me About This Listing</Link>
                </div>

            </section>
        </MotionWrapper>
    )
}