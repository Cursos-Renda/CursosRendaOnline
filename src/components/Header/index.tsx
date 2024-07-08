import styles from "./styles.module.scss";
import IMGLogo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import IMGStoreCar from "../../assets/storeCar.svg"


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <figure className={styles.header__logo}>
                    <img src={IMGLogo} alt="Renda Curso Online" className={styles.header__logo__img} />
                    <figcaption className={styles.header__logo__caption}>RENDA | <span className={styles.header__logo__span}>Cursos Online</span></figcaption>
                </figure>
                <nav className={styles.header__nav}>
                    <input type="text" className={styles.header__nav__input} placeholder="Pesquisa..." />
                    <ul className={styles.header__nav__list}>
                        <li className={styles.header__nav__list__item}>
                            <select className={styles.header__nav__list__item__select}>
                                <option disabled hidden selected>Cursos</option>
                                <option  selected>Cursos</option>
                                <option  selected>Cursos</option>
                                <option  selected>Cursos</option>
                                <option  selected>Cursos</option>
                            </select>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link to={"/"}>Sobre</Link>
                        </li>
                        <li className={styles.header__nav__list__item}>
                            <Link to={"/"}>Ajuda</Link>
                        </li>
                    </ul>
                    <img src={IMGStoreCar} alt="Store Car" className={styles.header__nav__car} />
                </nav>
            </div>
        </header>
    )
}
