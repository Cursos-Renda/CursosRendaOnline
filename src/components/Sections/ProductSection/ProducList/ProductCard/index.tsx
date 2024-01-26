import styles from "./styles.module.scss"

export const ProductCard = () => {
    return (
        <li className={styles.productCard}>
            <figure>
                <span>img</span>
            </figure>
            <div>
                <span>description</span>
                <span>link</span>
            </div>
        </li>
    )
}