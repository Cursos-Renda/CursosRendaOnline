import { BannerSection } from "./components/sections/bannerSections";
import { ContactSection } from "./components/sections/contactSection";
import { Roulette } from "./components/sections/rouletteSection";
import { DefaultTemplate } from "./template/defaultTemplate";
import React from "react";
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