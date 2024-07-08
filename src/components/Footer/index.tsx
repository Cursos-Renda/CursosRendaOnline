import styles from './styles.module.scss';
import IMGLogoWhite from '../../assets/logo_white.svg';
import IMGLogoHotmart from '../../assets/logo_hotmart.svg';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <figure className={styles.footer__logo}>
                    <img src={IMGLogoWhite} alt="Renda Curso Online" className={styles.footer__logo__img} />
                    <figcaption className={styles.footer__logo__caption}>RENDA | <span className={styles.footer__logo__span}>Cursos Online</span></figcaption>
                </figure>
                <span className={styles.footer__copyright}>Todos os direitos reservados &copy; 2024</span>
                <img src={IMGLogoHotmart} alt="Hotmart" />
            </div>
        </footer>
    )
}