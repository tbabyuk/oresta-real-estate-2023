import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Footer } from "../components/Footer"


export default function TestLayout({ children }) {
    return (
      <>
        <Header />
        <Hero />
          <main>
            {children}
          </main>
        <Footer />
      </>
    )
}