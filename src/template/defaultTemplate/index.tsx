import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import React from "react"

export const DefaultTemplate = ({ children }:any) => {


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
