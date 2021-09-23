import React from 'react';
// import { Link } from 'react-router-dom';
import '../css/cards.css';
import imgCard from '../img/imgCard.png';

const Cards = () => {

    return (
        <section className="sectionCards">
            <div className="container">
                <div className="row">
                    {/* Primer col  */}
                    <div className="col">
                        <div className="card">
                            <img src={imgCard} className="card-img-top d-block mx-auto" alt="..." />
                            <div className="card-body">
                                <a className="buton" href="#" role="button">Noticias</a>
                            </div>
                        </div>
                    </div>

                    {/* Segun col  */}
                    <div className="col">
                        <div className="card">
                            <img src={imgCard} className="card-img-top d-block mx-auto" alt="..." />
                            <div className="card-body">
                                <a className="buton" href="#" role="button">Proyectos Relevantes</a>
                            </div>
                        </div>
                    </div>

                    {/* Tercer col  */}
                    <div className="col">
                        <div className="card">
                            <img src={imgCard} className="card-img-top d-block mx-auto" alt="..." />
                            <div className="card-body">
                                <a className="buton" href="#" role="button">Investigaciones recientes</a>
                            </div>
                        </div>
                    </div>

                    {/* Cuarto col  */}
                    <div className="col">
                        <div className="card">
                            <img src={imgCard} className="card-img-top d-block mx-auto" alt="..." />
                            <div className="card-body">
                                <a className="buton" href="#" role="button">Software Desarrollados</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>

    );
}
export default Cards; 