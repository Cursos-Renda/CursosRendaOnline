import contact from "../../../assets/contatos.svg"
import styles from "./styles.module.scss";


export const ContactSection = () => {
    return (
        <section id={styles.bannerSection}>
            <h2>CONTATE-NOS</h2>
            <form action="">
                <div>
                    <figure>
                        <img src={contact} alt="Contate-nos" />
                    </figure>
                    <div>
                        <input type="text" placeholder="Nome:" />
                        <input type="text" placeholder="E-mail:" />
                        <input type="text" placeholder="Telefone:" />
                        <input type="text" placeholder="Assunto:" />
                    </div>
                </div>
                <textarea name="" id="" cols={30} rows={6} placeholder="Escreva aqui..."></textarea>
                <button>Enviar mensagem</button>
            </form>
        </section>
    )
}