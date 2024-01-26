import styles from "./styles.module.scss"

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <figure>
                <h2>logomarcas</h2>
            </figure>
            <div>
                <span>Direitos</span>
                <span>Licensas</span>
            </div>
        </footer>
    )
}