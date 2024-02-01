import styles from "./styles.module.scss"
import { ProductCard } from "./ProductCard"

export const ProductList = () => {
    return(
        <ul className={styles.productList}>
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
        </ul>
    )
}