import { ListingSlider } from "./ListingSlider"
import { SectionHeading } from "./SectionHeading"
import { MotionWrapper } from "./MotionWrapper"
import Link from "next/link"
import { magistrateListingPhotosArray, dyerListingPhotosArray } from "../data/data"



export const CurrentListingsSection = () => {

  return (
    <section className="oresta-section">
        <SectionHeading title="Current Listings" mb="0" />
        <MotionWrapper>
            <article className="py-12 border-b-2 border-gray-200" aria-label="active listings">
                <ul className="flex flex-col mb-10 space-y-1">
                    <li><h3 className="text-center sm:text-xl font-semibold">104 Dyer Court, Cambridge</h3></li>
                    <li><h4 className="text-center sm:text-xl">3 Beds, 3 Baths Semi-Detached</h4></li>
                    <li><h4 className="text-center sm:text-xl">$749,000</h4></li>
                </ul>
                <ListingSlider listingPhotosArray={dyerListingPhotosArray} />
                <p className="my-10 hyphens-auto">Come for the house, stay for the neighbourhood! Tucked away on a quiet court in the village of Hespeler, this beautifully maintained semi offers peaceful living, stunning sunsets, and a real sense of community. With trails, schools, and downtown charm just a short walk away, you&apos;ll love calling this home. Whether you&apos;re looking for your first home or downsizing smart, this one checks all the boxes.</p>
                <div className="flex justify-center">
                    <Link href="/contact#contact-form" className="px-6 py-4 font-semibold oresta-action-orange">Contact Me About This Listing</Link>
                </div>
            </article>
        </MotionWrapper>
        <MotionWrapper>
            <article className="py-12">
                <ul className="flex flex-col mb-10 space-y-1">
                    <li><h3 className="text-center sm:text-xl font-semibold">#66 - 7285 Magistrate Terrace, Mississauga</h3></li>
                    <li><h4 className="text-center sm:text-xl">3 Beds, 3 Baths Condo Townhome</h4></li>
                    <li><h4 className="text-center sm:text-xl">$825,000</h4></li>
                </ul>
                <ListingSlider listingPhotosArray={magistrateListingPhotosArray} />
                <p className="my-10 hyphens-auto">Bright and beautifully maintained, this end-unit townhouse is tucked into a quiet, family-friendly court with no through traffic and access to a private park. Inside, you&apos;ll find a beautifully renovated kitchen featuring quartz countertops, stainless steel appliances (fridge, stove, dishwasher, microwave), a modern backsplash and pot lights. The open living space boasts 18 foot ceilings, hardwood (no carpet on upper levels), and a hardwood staircases. Central vacuum, new A/C and furnace included. Located in a welcoming neighbourhood close to top-rated schools (check out HoodQ report), highways, public transit, Pearson Airport, shopping plazas, and Heartland Town Centre. Maintenance fees cover the roof, windows (and window cleaning), landscaping, and all exterior elements for added peace of mind.</p>
                <div className="flex justify-center">
                    <Link href="/contact#contact-form" className="px-6 py-4 font-semibold oresta-action-orange">Contact Me About This Listing</Link>
                </div>
            </article>
        </MotionWrapper>
    </section>
    )
}