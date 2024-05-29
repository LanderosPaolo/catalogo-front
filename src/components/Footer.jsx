
const Footer = () => {
    return (
        <div className='footer d-flex flex-row align-items-center justify-content-evenly'>
            <div className='mt-3 d-flex flex-column align-items-center'>
                <div className='d-flex flex-column'>
                    <p><i className="fa-regular fa-copyright mx-1"></i>Copyrights 2021 Diseñado por AffiniTI Labs</p>
                </div>
            </div>
            <div className='fs-3 d-flex flex-wrap gap-3'>
                <a href='#' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                <a href='#' target='_blank'><i className="fa-brands fa-facebook"></i></a>
                <a href='#' target='_blank'><i className="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    );
}

export default Footer;