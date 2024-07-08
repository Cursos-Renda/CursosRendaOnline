import React, { ReactNode } from "react"
import { Header } from "../../components/header/index.tsx"
import { Footer } from "../../components/footer/index.tsx"

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