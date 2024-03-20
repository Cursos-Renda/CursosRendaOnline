import { BannerSection } from "./components/sections/bannerSections";
import { ContactSection } from "./components/sections/contactSection";
import { Roulette } from "./components/sections/rouletteSection";

export function App() {

  return (
    <>
      <BannerSection />
      <Roulette />
      <ContactSection/>
    </>
  )
}