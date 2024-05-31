
const Footer = () => {
    return (
        <footer>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="footer-title fs-1">Contáctanos</p>
                <div className="d-flex flex-row justify-content-around w-50 pb-5">
                    <a href="#">
                        <i className="fa-brands fa-facebook fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-whatsapp fa-2x"></i>
                    </a>
                </div>
            </div>
            <div className="text-center">
                <p>Todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;