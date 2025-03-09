import Link from "next/link"
import { ListingSlider } from "./ListingSlider"




export const CurrentListingsSection = () => {


  return (
        <section className="px-5 md:px-20 py-16">
            <h2 className="text-center text-3xl mb-10">Current Listings</h2>
            <h3 className="text-center text-xl italic">30 Arlington Crescent, Guelph</h3>
            <ListingSlider />
        </section>
    )
}