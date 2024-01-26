import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

export const ProductCard = () => {
    return (
        <li className={styles.productCard}>
            <figure>
                <span>img</span>
            </figure>
            <div>
                <span>description</span>
                <Link to={"/product"}>
                    comprar
                </Link>
            </div>
        </li>
    )
}