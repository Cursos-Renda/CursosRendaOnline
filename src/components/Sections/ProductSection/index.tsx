import styles from "./styles.module.scss"
import { CategoriesList } from "./CategoriesList"
import { ProductList } from "./ProducList"

export const ProductSection = () => {
    return(
        <section className={styles.productSection}>
            <CategoriesList/>
            <ProductList/>
        </section>
    )
}