import React from 'react';
import { Link } from 'react-router-dom';
import '../css/innovacion.css';
import Calendario from './calendario';
import Idea from '../img/idea.png';

const Inovacion = () => {

    return (
        <section>
            <div className="container-fluid contenedorPrincipal">
                <div className="row">

                    {/* Primera columna */}
                    <div className="col-9">
                        <div className="container">
                            <h2 className="text-center textoh2">¿Por qué buscamos innovación?</h2>
                            <div className="row contenedor_row_inovacion">

                                {/* Primera subcolumna */}
                                <div className="col pr-0">
                                    <div class="circle-custom">
                                        <div class="circle-custom-container">
                                            <div class="circle-custom-top pt-2">
                                                <img src={Idea} alt="idea" height="90%" />
                                            </div>
                                            <div class="circle-custom-bottom">
                                                <span>Lorem</span>
                                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Segunda subcolumna */}
                                <div className="col pl-0 pr-0">
                                    <div class="circle-custom">
                                        <div class="circle-custom-container">
                                            <div class="circle-custom-top pt-2">
                                                <img src={Idea} alt="idea" height="90%" />
                                            </div>
                                            <div class="circle-custom-bottom">
                                                <span>Lorem</span>
                                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tercera subcolumna */}
                                <div className="col pl-0">
                                    <div class="circle-custom">
                                        <div class="circle-custom-container">
                                            <div class="circle-custom-top pt-2">
                                                <img src={Idea} alt="idea" height="90%" />
                                            </div>
                                            <div class="circle-custom-bottom">
                                                <span>Lorem</span>
                                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Segunda Columna */}
                    <div className="col-3 pl-0 colN°2">
                        <h3 className="inovacionContador text-center">Contador de visitas</h3>
                        <div className="contadorVisitas d-block justify-content-center"><h4 className="text-center pt-2 pb-2 mb-0">2,589</h4></div>
                        <h3 className="inovacionContador text-center mt-5">Calendario de eventos</h3>
                        <Calendario />
                    </div>
                </div>
            </div>

            <div className="circulosFinales"></div>
            <div className="circulosFinales"></div>
            <div className="circulosFinales circuloFinal_Ultimo"></div>
           
        </section>
    );
}
export default Inovacion;