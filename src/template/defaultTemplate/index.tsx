import { ReactNode } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

interface Props {
    children: ReactNode;
}

export const DefaultTemplate: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};
