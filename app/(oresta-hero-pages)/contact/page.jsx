import { ContactForm } from "@/app/components/ContactForm"
import { PageHeading } from "@/app/components/PageHeading"


export const metadata = {
    title: "OK+Co. | Contact",
    description: "Get in touch today for a free consulation!",
}

const Contact = () => {

    return (
      <main className="px-5 sm:px-20 md:px-40 lg:px-20 py-20 md:py-22 text-gray-600">
        {/* CONTACT FORM */}
        <PageHeading title="Contact Me" />
        <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1 flex flex-col items-center mb-12 md:mb-0">
                <ContactForm />
            </div>
            {/* MAP */}
            <div className="flex-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11566.196608402468!2d-79.5833131!3d43.5534391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47e2eef44ba3%3A0x13cbbe5d0f33d02f!2sOresta%20Kisil%20Real%20Estate%20Services!5e0!3m2!1sen!2sca!4v1684509067581!5m2!1sen!2sca" width="100%" height={455} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>
        </div>
      </main>
    )
  }
  
  export default Contact
  
  