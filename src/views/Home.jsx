import fondoHome from '../imgs/fondo.jpg'
import '../stylesheets/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <img src={fondoHome} alt="Joyas" />
            <div className='button'>
                <h1>Arwen Joyería</h1>
                <Link to='/productos'>
                    <button type="button" class="btn btn-outline-primary">Ver Catálogo</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;