import { ProductSection } from "../../components/Sections/ProductSection"
import { ProductList } from "../../components/Sections/ProductSectionList/ProducList"
import { DefaultTemplate } from "../../templates/DefaultTemplate"

export const ProductPage = () => {
    return (
        <DefaultTemplate>
            <ProductSection/>
            <ProductList/>
        </DefaultTemplate>
    )
}