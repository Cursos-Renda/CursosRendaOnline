import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { IPropsReact } from "../../interface/propsReact"

export const DefaultTemplate = ({children}: IPropsReact ) => {
    return(
        <>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </>
    )
}