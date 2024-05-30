
const Footer = () => {
    return (
        // <div className='footer d-flex flex-row align-items-center justify-content-evenly'>
        //     <div className='mt-3 d-flex flex-column align-items-center'>
        //         <div className='d-flex flex-column'>
        //             <p><i className="fa-regular fa-copyright mx-1"></i>Copyrights 2021 Diseñado por AffiniTI Labs</p>
        //         </div>
        //     </div>
        //     <div className=''>
        //         <div>
        //             <h4>Contáctanos</h4>
        //         </div>
        //         <div className="fs-3 d-flex justify-content-around">
        //         <a href='#' target='_blank'><i className="fa-brands fa-instagram"></i></a>
        //         <a href='#' target='_blank'><i className="fa-brands fa-facebook"></i></a>
        //         <a href='#' target='_blank'><i className="fa-brands fa-whatsapp"></i></a>
        //         </div>
        //     </div>
        // </div>

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