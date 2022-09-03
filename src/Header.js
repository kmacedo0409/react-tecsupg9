
import './Nav.css';
import imgmodal from '../src/img/modal.png';

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
            <section>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Suscríbete
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header justify-content-center">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Suscríbete
                      </h5>
                    </div>
                    <div class="modal-body text-center">
                      <h6>¡Aprovecha nuestras grandes ofertas!</h6>
                      <div>
                        <img width="400" src={imgmodal} alt="" />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-light"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button type="button" class="btn btn-danger">
                        Suscribirse
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </nav>

    </header>
    )
}
export default Header;