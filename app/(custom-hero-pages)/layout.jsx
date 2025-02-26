import { Header } from "../components/Header"
import { NeighbourhoodsHero } from "./components/NeighbourhoodsHero"
import { Footer } from "../components/Footer"


export default function NoHeroLayout({ children }) {
    return (
      <>
        <Header />
            {children}
        <Footer />
      </>
    )
}