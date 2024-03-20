import { BannerSection } from "./components/sections/bannerSections/BannerSection.tsx";
import { ContactSection } from "./components/sections/contactSection/index.tsx";
import { Roulette } from "./components/sections/rouletteSection/index.tsx";
import { DefaultTemplate } from "./template/defaultTemplate/index.tsx";

export function App() {

  return (
    <>
    <DefaultTemplate>
      <BannerSection />
      <Roulette />
      <ContactSection/>
    </DefaultTemplate>
    </>
  )
}