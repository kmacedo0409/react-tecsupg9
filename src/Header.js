
import './Nav.css';
const Header = ()=>{
    return(
    <header>
        <nav className='nav'>
        <div>
              <img
                width="200"
                src="https://ca.aceaperu.com/wp-content/uploads/2022/08/logo-topitop.jpg"
                alt="logo"
              />
            </div>
            <ul className='nav__list'>
                <li className='nav__item'>Mujer</li>
                <li className='nav__item'>Hombre</li>
                <li className='nav__item'>Niños</li>
                
                
            </ul>
        </nav>

    </header>
    )
}
export default Header;