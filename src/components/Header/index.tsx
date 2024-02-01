export const Header = () => {
    return (
        <header className={styles.header}>
            <figure>
                <img src={logo} alt="Logo" />
            </figure>
            <nav>
                <li>Sobre</li>
                <li>Produtos</li>
                <li>Contatos</li>
            </nav>
        </header>
    )
}