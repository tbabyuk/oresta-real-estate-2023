import Link from "next/link"
import { ListingSlider } from "./ListingSlider"
import { SectionHeading } from "./SectionHeading"



export const CurrentListingsSection = () => {


  return (
        <section className="px-5 md:px-20 py-16">
            <SectionHeading title="Current Listings" />
            <h3 className="text-center text-2xl">30 Arlington Crescent, Guelph</h3>
            <ListingSlider />
        </section>
    )
}