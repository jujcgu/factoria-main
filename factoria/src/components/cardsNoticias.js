import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cardsNoticias.css';
import imgCardNoticias from '../img/imgCardNoticias.png';
import fotoCardNoticias from '../img/fotoCardNoticias.png';
import LuloVision from '../img/luloVisionCard.png';

const CardsNoticias = () => {

    return (
        <section className="mt-5">
            <div className="container-fluid mt-5">
                <div className="row ">
                    {/* Primera Columna */}
                    <div className="col-6 px-3">
                        <div className="cardNoticias ml-3">
                            <h2>Noticias Importantes</h2>
                        </div>

                        <div className="container px-5">
                            <div className="row">

                                {/* Primera Subcolumna */}
                                <div className="col">
                                    <div className="card cardSubNoticias">
                                        <img className="card-img-top d-block mx-auto imgCardNoticias" src={imgCardNoticias} alt="Card image cap" />
                                        <div className="card-body p-2">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-3">
                                                        <img className="d-block mx-auto rounded-circle fotoCardSubnoticias" src={fotoCardNoticias} alt="Card image cap" />
                                                    </div>
                                                    <div className="col-9">
                                                        <hr className="lineaNoticiasCard" size="1px" />
                                                        <h6 font-weight><strong>INFRAESTRUCTURA:</strong> <small className="text-muted Hace3horas"><i className="fas fa-clock"></i> Hace tres horas </small></h6>
                                                        <span className="d-inline-flex w-100 SpanCardsNoticias">
                                                            <a href="#"><i class="fas fa-share-alt cardNoticiasiconoCompartir"></i></a>
                                                            <a href="#"><i class="fab fa-facebook cardNoticiasiconoRedes"></i></a>
                                                            <a href="#"><i class="fab fa-instagram cardNoticiasiconoRedes"></i></a>
                                                            <a href="#"><i class="fab fa-twitter cardNoticiasiconoRedes"></i></a>
                                                            <small className="d-flex justify-content-end text-muted cardNoticiasVistas" >vistas:<em>1256</em></small>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <p>Nuevas aulas de investigación <br></br>en la Universidad Surcolombiana</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Segunda Subcolumna */}
                                <div className="col">
                                    <div className="card cardSubNoticias shadow-lg">
                                        <img className="card-img-top d-block mx-auto imgCardNoticias" src={imgCardNoticias} alt="Card image cap" />
                                        <div className="card-body p-2">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-3">
                                                        <img className="d-block mx-auto rounded-circle fotoCardSubnoticias" src={fotoCardNoticias} alt="Card image cap" />
                                                    </div>
                                                    <div className="col-9">
                                                        <hr className="lineaNoticiasCard" size="1px" />
                                                        <h6 font-weight><strong>INFRAESTRUCTURA:</strong> <small className="text-muted Hace3horas"><i className="fas fa-clock"></i> Hace tres horas </small></h6>
                                                        <span className="d-inline-flex w-100 SpanCardsNoticias">
                                                            <a href="#"><i class="fas fa-share-alt cardNoticiasiconoCompartir"></i></a>
                                                            <a href="#"><i class="fab fa-facebook cardNoticiasiconoRedes"></i></a>
                                                            <a href="#"><i class="fab fa-instagram cardNoticiasiconoRedes"></i></a>
                                                            <a href="#"><i class="fab fa-twitter cardNoticiasiconoRedes"></i></a>
                                                            <small className="d-flex justify-content-end text-muted cardNoticiasVistas" >vistas:<em>1256</em></small>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <p>Nuevas aulas de investigación <br></br>en la Universidad Surcolombiana</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="paginacion-cardsNoticias mt-4 d-flex justify-content-center" aria-label="Page navigation example">
                                <ul className="pagination ">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i class="fas fa-chevron-left quitar-negrita"></i></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                    </li>
                                    <li className="page-item"><a class="page-link color-diferente" href="#">1</a></li>
                                    <li className="page-item"><a class="page-link" href="#">2</a></li>
                                    <li className="page-item"><a class="page-link color-diferente" href="#">3</a></li>
                                    <li className="page-item">
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i class="fas fa-chevron-right quitar-negrita"></i></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>

                    {/* Segunda Columna */}
                    <div className="col-6 px-3">
                        <div className="cardNoticias mr-3">
                            <h2>Últimos Softwares Desarrollados</h2>
                        </div>

                        <div className="container pr-5 pl-4">
                            <div className="row">

                                {/* Tajetas-Media */}
                                <div className="col">
                                    <div class="media mediaNoticias">
                                        <div className="media-parte-izquierda">
                                            <img class="d-block mx-auto align-self-start mr-3 luloVisionimgMedia" src={LuloVision} alt="Generic placeholder image" />
                                            <span className="d-inline-flex d-flex justify-content-end w-100 SpanMediaNoticias">
                                                <a href="#"><i class="fas fa-share-alt cardNoticiasiconoCompartir"></i></a>
                                                <a href="#"><i class="fab fa-facebook cardNoticiasiconoRedes"></i></a>
                                                <a href="#"><i class="fab fa-instagram cardNoticiasiconoRedes"></i></a>
                                                <a href="#"><i class="fab fa-twitter cardNoticiasiconoRedes"></i></a>
                                            </span>
                                        </div>
                                        <div class="media-body media-parte-derecha pt-4 pl-5 pr-3 pb-3">
                                            <h6 font-weight><strong>VISION ARTIFICIAL: </strong> <small className="text-muted Hace2horas"><i className="fas fa-clock"></i> Hace dos horas </small></h6>
                                            <h4 className="mt-3 text-muted">LuloVision</h4>
                                            <p>
                                                Software de visión artificial para la detección de enfermedades en el cultivo de lilo. Fue desarrollado por el grupo de investigación <strong className="text-muted">Grinsoft</strong>.
                                                Su precisión es de 96.8%. Se espera que nuevos datasets sean generados para lograr la eficancia y protección en este tipo de cultivo.
                                        </p>
                                        </div>
                                    </div>

                                    <div class="media mediaNoticias mediaNoticias2">
                                        <div className="media-parte-izquierda">
                                            <img class="d-block mx-auto align-self-start mr-3 luloVisionimgMedia" src={LuloVision} alt="Generic placeholder image" />
                                            <span className="d-inline-flex d-flex justify-content-end w-100 SpanMediaNoticias">
                                                <a href="#"><i class="fas fa-share-alt cardNoticiasiconoCompartir"></i></a>
                                                <a href="#"><i class="fab fa-facebook cardNoticiasiconoRedes"></i></a>
                                                <a href="#"><i class="fab fa-instagram cardNoticiasiconoRedes"></i></a>
                                                <a href="#"><i class="fab fa-twitter cardNoticiasiconoRedes"></i></a>
                                            </span>
                                        </div>
                                        <div class="media-body media-parte-derecha pt-4 pl-5 pr-3 pb-3">
                                            <h6 font-weight><strong>VISION ARTIFICIAL: </strong> <small className="text-muted Hace2horas"><i className="fas fa-clock"></i> Hace dos horas </small></h6>
                                            <h4 className="mt-3 text-muted">LuloVision</h4>
                                            <p>
                                                Software de visión artificial para la detección de enfermedades en el cultivo de lilo. Fue desarrollado por el grupo de investigación <strong className="text-muted">Grinsoft</strong>.
                                                Su precisión es de 96.8%. Se espera que nuevos datasets sean generados para lograr la eficancia y protección en este tipo de cultivo.
                                        </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <nav className="paginacion-cardsNoticias mt-4 d-flex justify-content-center" aria-label="Page navigation example">
                                <ul className="pagination ">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i class="fas fa-chevron-left quitar-negrita"></i></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                    </li>
                                    <li className="page-item"><a class="page-link color-diferente" href="#">1</a></li>
                                    <li className="page-item"><a class="page-link" href="#">2</a></li>
                                    <li className="page-item"><a class="page-link color-diferente" href="#">3</a></li>
                                    <li className="page-item">
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                        <span className="cirulos-pequeños d-inline-flex"> </span>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i class="fas fa-chevron-right quitar-negrita"></i></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>





                    </div>
                </div>
            </div>

        </section>
    );
}
export default CardsNoticias;