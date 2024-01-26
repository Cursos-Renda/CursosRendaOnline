import styles from "./styles.module.scss"
import { FormSection } from "./FormSection"
import { OtherContact } from "./OtherContact"

export const ContactSection = () => {
    return(
        <section className={styles.contactSection}>
            <OtherContact/>
            <FormSection/>
        </section>
    )
}