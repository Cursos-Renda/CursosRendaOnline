import { BannerSection } from "../../components/Sections/BannerSection"
import { ContactSection } from "../../components/Sections/ContactSection"
import { ProductSection } from "../../components/Sections/ProductSectionList"
import { DefaultTemplate } from "../../templates/DefaultTemplate"

export const HomePage = () => {
    return(
        <DefaultTemplate>
            <BannerSection/>
            <ProductSection/>
            <ContactSection/>
        </DefaultTemplate>
    )
}