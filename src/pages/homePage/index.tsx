import { BannerSection } from "../../components/sections/bannerSection"
import { ContactSection } from "../../components/sections/contactSection"
import { SliderSection } from "../../components/sections/sliderSection"
import { DefaultTemplate } from "../../template/defaultTemplate"

export const HomePage = () => {
    return (
        <>
        <DefaultTemplate>
            <BannerSection/>
            <SliderSection/>
            <ContactSection/>
        </DefaultTemplate>
        </>
    )
}