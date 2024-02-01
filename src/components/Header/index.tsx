import logo from "../../assets/Logotipo_para_loja_de_informatica_e_computacao.png"
import styles from "./styles.module.scss"

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