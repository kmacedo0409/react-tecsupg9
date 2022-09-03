import slideone from './assets/slide-1.png'
import slidetwo from './assets/slide-2.png'
import slidethree from './assets/slide-3.png'
import slidefour from './assets/slide-4.png'
import slidefive from './assets/slide-5.png'
import slidesix from './assets/slide-6.png'


const SectionTwo = ()=>{
    return(

<section>
      <div id="controls" className="carousel slide" date-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            data-bs-target="#controls"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button data-bs-target="#controls" data-bs-slide-to="1"></button>
          <button data-bs-target="#controls" data-bs-slide-to="2"></button>
          <button data-bs-target="#controls" data-bs-slide-to="3"></button>
          <button data-bs-target="#controls" data-bs-slide-to="4"></button>
          <button data-bs-target="#controls" data-bs-slide-to="5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slideone} alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={slidetwo} alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={slidethree} alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={slidefour} alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={slidefive} alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={slidesix} alt="" className="d-block w-100" />
          </div>
          <button
            className="carousel-control-prev"
            data-bs-target="#controls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-target="#controls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
    )
}
export default SectionTwo;
