import styles from "./styles.module.scss"
import logo from "../../assets/logo_white.svg"
import logoHotmart from "../../assets/logo_hotmart.svg"
import React from "react";


export const Footer = () => {
    
    return (
        <footer id={styles.footer}>
            <div id={styles.footerContainer}>
                <div id={styles.logoBox}>
                    <figure>
                        <img src={logo} alt="Renda Cursos Online" />
                    </figure>
                    <p><span className={styles.logo1}>RENDA | </span><span className={styles.logo2}>Cursos Online</span></p>
                </div>
                <p className={styles.rights}>© Todos os direitos reservados</p>
                <figure>
                    <img src={logoHotmart} alt="Hotmart" />
                </figure>
            </div>
        </footer>
    )
}