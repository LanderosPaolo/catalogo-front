import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../stylesheets/footer.css';


import Buttons from "../components/Buttons";


const Products = () => {
    const { HomeButton, LoginButton } = Buttons

    return (
        <div>
            <Navbar />
            <div>
                {/* Botones de prueba */}
                <HomeButton />
                <LoginButton />
            </div>
            <Footer />
        </div>
    )
}

export default Products;