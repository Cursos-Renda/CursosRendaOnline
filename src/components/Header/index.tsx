import logo from "../../assets/logo.svg"
import carrinho from "../../assets/carrinhoHeader.svg"
import styles from "./styles.module.scss"

export const Header = () => {
    return (
        <header id={styles.header}>
            <div id={styles.headerContainer}>
            <div id={styles.logoBox}>
                <figure>
                    <img src={logo} alt="Renda Cursos Online" />
                </figure>
                <p><span className={styles.logo1}>RENDA | </span><span className={styles.logo2}>Cursos Online</span></p>
            </div>
            <form action="">
                <input type="text" placeholder="Pesquise aqui..." />
            </form>
            <menu>
                <select name="cursos" id="cursos">
                    <option value="" selected>Cursos</option>
                </select>
                <li>Sobre</li>
                <li>Ajuda</li>
            </menu>
            <button>
                <img src={carrinho} alt="Carrinho" />
            </button>
            </div>
        </header>
    )
}