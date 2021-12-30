import React from 'react';
import './Banner.css'

function Banner(props) {
    return (
        <div>
            <div><div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <img data-target="#carouselExampleCaptions" data-slide-to="0" className="active" src={"https://image.tmdb.org/t/p/w500"+props[0].poster_path} alt=''/>
      <img data-target="#carouselExampleCaptions" data-slide-to="1" className="active" src={"https://image.tmdb.org/t/p/w500"+props[1].poster_path} alt=''/>
      <img data-target="#carouselExampleCaptions" data-slide-to="2" className="active" src={"https://image.tmdb.org/t/p/w500"+props[2].poster_path} alt=''/>
      <img data-target="#carouselExampleCaptions" data-slide-to="3" className="active" src={"https://image.tmdb.org/t/p/w500"+props[3].poster_path} alt=''/>
    </ol>
    <div className="carousel-inner ">
      <div className="carousel-item active hgt">
        <img src={"https://image.tmdb.org/t/p/original"+props[0].backdrop_path} className="d-block w-100" alt="..."/>
        <div className="carousel-caption  d-md-block">
          <h5 className='font'>{props[0].title}</h5>
          <p>{props[0].media_type}</p>
        </div>
      </div>

      <div className="carousel-item hgt">
        <img src={"https://image.tmdb.org/t/p/original"+props[1].backdrop_path} className="d-block w-100" alt="..."/>
        <div className="carousel-caption  d-md-block">
          <h5 className='font'>{props[1].title}</h5>
          <p>{props[1].media_type}</p>
        </div>
      </div>

      <div className="carousel-item hgt">
        <img src={"https://image.tmdb.org/t/p/original"+props[2].backdrop_path} className="d-block w-100" alt="..."/>
        <div className="carousel-caption  d-md-block">
          <h5 className='font'>{props[2].title}</h5>
          <p>{props[2].media_type}</p>
        </div>
      </div>

      <div className="carousel-item hgt">
        <img src={"https://image.tmdb.org/t/p/original"+props[3].backdrop_path} className="d-block w-100" alt="..."/>
        <div className="carousel-caption  d-md-block">
          <h5 className='font'>{props[3].title}</h5>
          <p>{props[3].media_type}</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
                
            </div>
        </div>
    )
}

export default Banner
