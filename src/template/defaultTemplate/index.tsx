import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React, { ReactNode } from "react";

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
