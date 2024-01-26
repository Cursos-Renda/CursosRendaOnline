import { BannerSection } from "../../components/Sections/BannerSection"
import { ContactForm } from "../../components/Sections/ContactSection"
import { ProductSection } from "../../components/Sections/ProductSection"
import { DefaultTemplate } from "../../templates/DefaultTemplate"

export const HomePage = () => {
    return(
        <DefaultTemplate>
            <BannerSection/>
            <ProductSection/>
            <ContactForm/>
        </DefaultTemplate>
    )
}