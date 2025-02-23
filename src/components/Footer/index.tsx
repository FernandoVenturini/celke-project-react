import Menu from "../Menu";

const Footer = () => {
    return (
        <main>
            <Menu />
            <p>&copy; {new Date().getFullYear()} LVF_Code. Todos os direitos reservados.</p>
        </main>
    );
}

export default Footer;