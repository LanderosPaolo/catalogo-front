import { Link } from 'react-router-dom'

// Botones de prueba

const HomeButton = () => {
    return (
        <>
            <Link to="/">
                <button type="button" class="btn btn-danger">Ir a Home</button>
            </Link>
        </>
    )
}

const ProductsButton = () => {
    return (
        <>
            <Link to="/productos">
                <button type="button" class="btn btn-danger">Ir a Poductos</button>
            </Link>
        </>
    )
}

const LoginButton = () => {
    return (
        <>
            <Link to="/login">
                <button type="button" class="btn btn-danger">Ir a Login</button>
            </Link>
        </>
    )
}

const Buttons = {
    HomeButton,
    ProductsButton,
    LoginButton
}

export default Buttons;