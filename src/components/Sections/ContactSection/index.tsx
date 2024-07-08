import React from 'react';
import styles from './styles.module.scss';
import IMGContact from '../../../assets/contactIMG.svg'

export const ContactSection = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactSection__container}>
                <h3 className={styles.contactSection__title}>CONTATE-NOS</h3>
                <form className={styles.contactSection__form}>
                    <div className={styles.contactSection__form__primarySection}>
                        <img src={IMGContact} alt="CONTATE-NOS" className={styles.contactSection__form__primarySection__img} />
                        <div className={styles.contactSection__form__primarySection__inputsDiv}>
                            <input type="text" className={styles.contactSection__form__primarySection__inputsDiv__input} placeholder='Nome:' />
                            <input type="text" className={styles.contactSection__form__primarySection__inputsDiv__input} placeholder='E-mail:' />
                            <input type="text" className={styles.contactSection__form__primarySection__inputsDiv__input} placeholder='Telefone:' />
                            <input type="text" className={styles.contactSection__form__primarySection__inputsDiv__input} placeholder='Assunto:' />
                        </div>
                    </div>
                    <textarea className={styles.contactSection__form__textareaContent} rows={4} placeholder='Escreva aqui...'/>
                    <button type="submit" className={styles.contactSection__form__buttonSend}>Enviar</button>
                </form>
            </div>
        </section>
    )
}