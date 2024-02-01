import styles from "./styles.module.scss"
import { Input } from "../../../Input"

export const FormSection = () => {
    return(
        <form action="" className={styles.formSection}>
            <Input label={"Nome"} type={"text"} placeholder={"Escreva seu nome aqui..."} id={"name"}/>
            <Input label={"Email"} type={"email"} placeholder={"Escreva seu email aqui..."} id={"email"}/>
            <Input label={"Telefone"} type={"tel"} placeholder={"Escreva seu numero aqui..."} id={"tel"}/>
            <Input label={"Assunto"} type={"text"} placeholder={"Escreva o assunto da sua mensagem aqui..."} id={"title"}/>
            <textarea name="menssage" id="menssage" cols={30} rows={15} placeholder="Escreva sua Mensagem aqui..."></textarea>
            <button>Enviar</button>
            <button>Limpar</button>
        </form>
    )
}