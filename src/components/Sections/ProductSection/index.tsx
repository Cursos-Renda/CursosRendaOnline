import styles from "./styles.module.scss"

export const ProductSection = () => {
    return(
        <section className={styles.productSection}>
            <h2>titulo do produto</h2>
            <figure><p>capa do produto</p></figure>
            <span>autor do produto</span>
            <p>descrição do produto</p>
            <span>valor do produto</span>
            <button>Comprar</button>
        </section>
    )
}