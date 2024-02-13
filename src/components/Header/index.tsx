import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <figure>
        <img src={logo} alt="Logo" />
        <figcaption>
          <strong>RENDA |</strong> Cursos Online
        </figcaption>
      </figure>
      <nav>
        <li>Cursos</li>
        <li>Sobre</li>
        <li>Ajuda</li>
      </nav>
    </header>
  );
};
