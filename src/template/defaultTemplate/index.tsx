import { Footer } from "../../components/footer"
import { Header } from "../../components/header"

export const DefaultTemplate = ({ children }: any) => {


    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
