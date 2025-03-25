import { ContactForm } from "./ContactForm"
import { SectionHeading } from "./SectionHeading"
import { MotionWrapper } from "./MotionWrapper"



export const ContactSection = () => {

    return (
        <MotionWrapper>
            <section className="oresta-section bg-oresta-light-green-with-image">
                <SectionHeading title="Contact Me" />
                <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="flex-1 flex flex-col items-center mb-12 md:mb-0">
                        <ContactForm />
                    </div>
                    {/* MAP */}
                    <div className="flex-1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11566.196608402468!2d-79.5833131!3d43.5534391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47e2eef44ba3%3A0x13cbbe5d0f33d02f!2sOresta%20Kisil%20Real%20Estate%20Services!5e0!3m2!1sen!2sca!4v1684509067581!5m2!1sen!2sca" width="100%" height={455} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>        
            </section>
        </MotionWrapper>
    )
}