import styles from "./styles.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <figure>
                <h2>logomarca</h2>
            </figure>
            <nav>
                <li>Sobre</li>
                <li>Produtos</li>
                <li>Contatos</li>
            </nav>
        </header>
    )
}