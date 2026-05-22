import { SectionHeading } from "./SectionHeading"
import { MotionWrapper } from "./MotionWrapper"
import { TiltDivider } from "./TiltDivider"


export const AboutSection = () => {

    return(
        <MotionWrapper>
            <section className="oresta-container">
                <div className="oresta-inner-container">
                    <SectionHeading title="About Me" />
                    <div className="leading-8">
                        <div className="shrink-0 flex justify-center md:me-6 mb-10 md:mb-0 overflow-hidden md:float-left">
                            <img src="/images/oresta_about_sm.jpg" className="rounded-md" style={{height: "260px"}} />
                        </div>
                        <p className="mb-6 italic text-lg">Real estate is where I commit to being fully present for you, in whatever direction your journey takes.</p>

                        <p className="mb-6">That&apos;s the foundation of everything I do in real estate, and it&apos;s become clearer to me over the nearly decade I&apos;ve been in this industry. When I started in 2015, I thought real estate was about transactions. What I&apos;ve discovered, though, is that it&apos;s truly about people&mdash;their dreams, their concerns, their timelines, and the unique circumstances that brought them to this moment. Every client is different, and I&apos;ve learned that the best real estate experiences come from genuinely understanding what matters to each person.</p>

                        <p className="mb-6">I adapt to your situation, not the other way around. Some clients need aggressive timelines; others need space to think. Some want to talk through every detail; others prefer clarity and efficiency. Rather than pushing a one-size-fits-all approach, I listen&mdash;really listen&mdash;and then move at a pace that feels right for you. Along the way, I&apos;m committed to honesty. If I think a situation might be challenging, I&apos;ll tell you. If I see an opportunity, I&apos;ll point it out. Transparency isn&apos;t just how I do business; it&apos;s who I am.</p>

                        <p className="mb-6">What you&apos;ll experience working with me is a steady, predictable process backed by solid systems. I&apos;m meticulous about the details because real estate transactions involve some of the most important decisions clients make. From initial consultation to closing, you&apos;ll know exactly what to expect at each stage. I&apos;ve built my practice around systems that keep everything organized, on track, and clear&mdash;so you can feel genuinely taken care of all the way through. You won&apos;t wonder where things stand or feel left in the dark. That consistency and reliability are non-negotiable for me.</p>

                        <p className="mb-6">Beyond my work with individual clients, I&apos;ve become increasingly involved in the broader conversations shaping our industry and community. Since 2021, I&apos;ve served as a Government Relations Committee Member and Climate Change Sub-Committee Member with the Toronto Regional Real Estate Board. These roles matter to me because I believe that positive change happens when we show up for the bigger picture&mdash;when we engage with the issues that affect our communities today and tomorrow.</p>

                        <p className="mb-6">Here&apos;s what I&apos;ve learned: community building actually starts small. It begins with genuine relationships&mdash;with clients, colleagues, friends, and family. It&apos;s about treating people with kindness and authenticity rather than approaching everything as transactional. My values are simple yet intentional: God, Family, and Business, in that order. That hierarchy informs every decision I make, both professionally and personally.</p>

                        <p className="mb-6">When you work with me, you get someone who&apos;s fully present. Someone who won&apos;t overcomplicate things or gatekeep information. Someone who genuinely cares about your outcome because I&apos;ve designed my business around what matters most&mdash;real relationships and real results.</p>

                        <p className="italic">Let&apos;s navigate this together.</p>
                    </div>
                </div>
            {/* <TiltDivider style="shape-divider" /> */}
            </section>
        </MotionWrapper>
    )
}