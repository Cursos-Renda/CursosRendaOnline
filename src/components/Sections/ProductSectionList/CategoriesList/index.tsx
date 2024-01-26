import styles from "./styles.module.scss"
import { CategoriesCard } from "./CategoriesCard"

export const CategoriesList = () => {
    return(
        <ul className={styles.categoriesList}>
            <CategoriesCard/>
            <CategoriesCard/>
            <CategoriesCard/>
            <CategoriesCard/>
            <CategoriesCard/>
            <CategoriesCard/>
            <CategoriesCard/>
            <CategoriesCard/>
            <CategoriesCard/>
            <CategoriesCard/>
        </ul>
    )
}