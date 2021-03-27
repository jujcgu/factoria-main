import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
import LogoUsco from '../img/logo usco.png';

const Footer = () => {
    return (
        <footer>
            <div className="w-100 pBarraFooter"></div>

            <div className="w-100 d-flex flex-row d-flex justify-content-center navegacionFooter">

                <div class="navegacionFooterIcono mr-3">
                    <a href="#" className="d-flex flex-row m-0">
                        <i className="fas fa-headset mr-3"></i>
                        <p className="mb-0">Servicio al cliente</p>
                    </a>
                </div>

                <div class="ml-5 navegacionFooterIcono">
                    <a href="#" className="d-flex flex-row m-0">
                        <i className="fas fa-book-reader mr-3 "></i>
                        <p className="mb-0 align-items-center">Políticas de Privacidad</p>
                    </a>
                </div>

                <div class="d-flex flex-row d-flex justify-content-center navegacionFooterIcono">
                    <i className="fas fa-slash mr-3 ml-3 barraDiagonal"></i>
                    <a href="#"><p className="mb-0">Términos y Condiciones</p></a>
                </div>

            </div>

            <div className="container-fluid">
                <div className="row">
                    {/* Primera columna */}
                    <div className="col-4 imgLogoUscoFooter">
                        <img className="d-block mx-auto " src={LogoUsco} alt="Card image cap" />
                        <h4 className="text-center">Copyright&copy; 2021 USCO. All rigths reserved</h4>
                    </div>
                    {/* Segunda columna */}
                    <div className="col-8">
                        <div class="container container2columnaFooter">
                            <div class="row">
                                {/* primera subcolumna */}
                                <div class="col subcolumna2Footer">
                                    <h2>Legal</h2>
                                    <ul className="mt-5">
                                        <li> <a href="#" className="text-left">Políticas de Cookies </a></li>
                                        <li> <a href="#" className="text-left">Configuración de Cookies</a></li>
                                    </ul>
                                </div>

                                {/* segunda subcolumna  */}
                                <div class="col subcolumna2Footer p-0">
                                    <h2>Actividad</h2>
                                    <ul className="mt-5">
                                        <li> <a href="#" className="text-left">Influencers</a></li>
                                        <li> <a href="#" className="text-left">Boletín Informativo</a></li>
                                    </ul>
                                </div>

                                {/* tercera subcolumna */}
                                <div class="col subcolumna2Footer p-0">
                                    <h2>Redes sociales</h2>
                                    <span className="d-inline-flex w-100 SpanCardsNoticias mt-5">
                                        <a href="#"><i class="fab fa-facebook redesSocialesFooter"></i></a>
                                        <a href="#"><i class="fab fa-instagram redesSocialesFooter"></i></a>
                                        <a href="#"><i class="fab fa-twitter redesSocialesFooter"></i></a>
                                    </span>

                                </div>
                            </div>
                            
                            <hr className="lineaFooter"></hr>
                            <h3 className="text-center mt-3 boletinInfoFooter">Boletín informativo</h3>

                            <div className="rounded-pill  boletinInfoSearch d-flex flex-row">
                                <ul className="w-100 p-0 mb-0 rounded-pill d-inline-flex">
                                    <li className="w-100 primerLi_BoletinSearchFooter">
                                        <input type="email" className="w-100 p-0" placeholder="example@example.com"></input>
                                    </li>
                                    <li className="h-100">
                                        <button className="h-100">Suscribirse</button>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="ultimaActualizacionFooter">Última actualización: Jueves 4 Febrero 2 p.m</h4>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;