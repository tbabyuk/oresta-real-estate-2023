import { SectionHeading } from "./SectionHeading"
import { MotionWrapper } from "./MotionWrapper"


export const BioSection = () => {

    return(
        <MotionWrapper>
            <section className="px-5 md:px-20 py-16">
                <SectionHeading title="About Me" />
                <div className="leading-8">
                    <div className="shrink-0 flex justify-center md:me-6 mb-10 md:mb-0 overflow-hidden md:float-left">
                        <img src="/images/oresta_about_sm.jpg" className="rounded-md" style={{height: "260px"}} />
                    </div>
                    <p className="mb-6">Oresta&apos;s journey in real estate began in 2015, and over the years, she has evolved into an experienced Realtor with a strong commitment to building lasting client relationships and making a positive impact in her community. Outside of her real estate endeavors, Oresta dedicates a significant amount of time to volunteering, showcasing her dedication to community service.</p>

                    <p className="mb-6">Her involvement as a Government Relations Committee Member and Climate Change Sub-Committee Member on the Toronto Regional Real Estate Board (TRREB) since 2021 reflects her active participation in industry-related committees, highlighting her interest in broader issues such as government relations and climate change.</p>

                    <p className="mb-6">Oresta&apos;s identity as a community advocate stems from her deep love for her family, clients, and community. Her philosophy centers on being a reliable resource for her clients, colleagues, and friends, with an emphasis on openness and a lack of gatekeeping. Her values are rooted in traditional principles regarding family and friends, prioritizing relationships above all else.</p>

                    <p className="mb-6">In navigating the real estate industry, Oresta places great importance on positivity, transparency, and doing what is right. Her alignment with these values led her to Keller Williams (KW), where she found a platform that allowed her to design her business and life according to her vision: God, Family then Business.</p>

                    <p className="mb-6">Her transparency in business dealings is a key aspect of her approach, as she believes in openly addressing challenges or issues. Oresta is not afraid to convey when a situation may be difficult, expressing honesty with her clients about potential challenges and solutions.</p>

                    <p className="mb-6">For Oresta, the foundation of a happy and healthy community begins at a micro level, emphasizing the significance of cultivating meaningful relationships. She views this process as inherently human, requiring kindness and authenticity rather than excessive effort.</p>

                    <p className="mb-6">In summary, Oresta&apos;s story is one of a Realtor who has not only found success in her professional journey but has also made a conscious effort to contribute positively to her community and industry, embodying values of transparency, positivity, and a strong focus on relationships.</p>
                </div>
            </section>
        </MotionWrapper>
    )
}