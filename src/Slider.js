const Slider = ()=>{
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
            <img src="./img/slide-1.png" alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="./img/slide-2.png" alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="./img/slide-3.png" alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="./img/slide-4.png" alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="./img/slide-5.png" alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="./img/slide-6.png" alt="" className="d-block w-100" />
          </div>
          <button
            className="carousel-control-prev"
            data-bs-target="#controls"
            data-bs-slide="prev"
            style="background-color: rgb(180, 180, 180)"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-target="#controls"
            data-bs-slide="next"
            style="background-color: rgb(180, 180, 180)"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Slider;