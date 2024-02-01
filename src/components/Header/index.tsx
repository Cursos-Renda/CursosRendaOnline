import logo from "../../assets/Logotipo_para_loja_de_informatica_e_computacao.png"

export const Header = () => {
    return (
        <header>
            <figure>
                <img src={logo} alt="Logo" />
            </figure>
            <nav>
                <li>Sobre</li>
                <li>Produtos</li>
                <li>Contatos</li>
            </nav>
        </header>
    )
}