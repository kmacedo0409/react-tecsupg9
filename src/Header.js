
import './Nav.css';
const Header = ()=>{
    return(
    <header>
        <nav className='nav'>
            <h1>Logo</h1>
            <ul className='nav__list'>
                <li className='nav__item'>Inicio</li>
                <li className='nav__item'>Nosotros</li>
                <li className='nav__item'>Portafolio</li>
                <li className='nav__item'>Contacto</li>
                
            </ul>
        </nav>

    </header>
    )
}
export default Header;