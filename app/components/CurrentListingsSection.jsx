import { ListingSlider } from "./ListingSlider"
import { SectionHeading } from "./SectionHeading"
import { MotionWrapper } from "./MotionWrapper"



export const CurrentListingsSection = () => {

  return (
        <MotionWrapper>
            <section className="oresta-section">
                <SectionHeading title="Current Listings" />
                <h3 className="text-center text-2xl">30 Arlington Crescent, Guelph</h3>
                <ListingSlider />
            </section>
        </MotionWrapper>
    )
}