import { Footer } from "../../components/footer"
import { Header } from "../../components/header"

interface DefaultTemplateProps {
    children: React.ReactNode;
}

export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {


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
