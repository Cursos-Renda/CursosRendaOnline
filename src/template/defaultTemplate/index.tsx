import React, { ReactNode } from "react"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

interface props {
    children: ReactNode
}

export const DefaultTemplate: React.FC<props> = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}