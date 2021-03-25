import React from 'react';
import { Link } from 'react-router-dom';
import '../css/carousel.css';
import ej from '../img/400x400carrousel.png';



// const Carousel = () => {
//     return (

//     );

// }
// export default Carousell;

function Carousel2() {
    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li  data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ej} className="d-block w-100 imgC" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={ej} className="d-block w-100 imgC" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={ej} className="d-block w-100 imgC" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={ej} className="d-block w-100 imgC" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev flecha-derecha" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"> <i class="fas fa-chevron-left"></i> </span>
                <span className="sr-only" >Previous</span>
            </a>
            <a className="carousel-control-next flecha-izquierda" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"> <i class="fas fa-chevron-right icono-derecho"></i> </span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    );
}

export default Carousel2;