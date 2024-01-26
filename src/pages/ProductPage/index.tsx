import { ProductSection } from "../../components/Sections/ProductSection"
import { ProductList } from "../../components/Sections/ProductSectionList/ProducList"
import { DefaultTemplate } from "../../templates/DefaultTemplate"

export const ProductPage = () => {
    return (
        <DefaultTemplate>
            <ProductSection/>
            <ProductList/>
            <div style={{"background" : "black"}}> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aliquid nihil quae. Modi perspiciatis inventore numquam repellendus, ex distinctio consequuntur molestias quisquam, quidem ut veritatis officiis molestiae repellat quos corrupti.</p></div>
        </DefaultTemplate>
    )
}