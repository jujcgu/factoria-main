import React from 'react';
import '../css/patentes.css';
import patente from '../img/patentes.png';

const Patentes = () => {

    return (
        <section>
            <div className="container-fluid patentes">
                <h2>Ultimas Patentes Regitradas</h2>
                <div id="carouselExampleCaptions" className="carousel slide pb-5" data-ride="carousel">
                    <ol className="carousel-indicators pb-4">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner pt-5 pb-4 patente-p">
                        <div className="carousel-item active">
                            <div className="container-fluid rounded-2 shadow-1 p-5">
                                <div className="row">
                                    <div className="col-9">
                                        <h3 className="h2 mb-4">El poder de la visión artificial para combatir el coronavirus COVID-19</h3>
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quisquam possimus esse exercitationem consectetur nemo rerum ullam velit alias odio eius corrupti voluptatum, nostrum earum expedita. Sed quam voluptatem quae facere quod dolore magnam deserunt beatae, totam dolorem in autem earum debitis assumenda eveniet odio eligendi perspiciatis recusandae modi quisquam.</p>
                                        <small className="text-muted font-weight-bold"><i className="fas fa-clock"></i> Hace 1 semana</small>
                                    </div>
                                    <div className="col-3 d-flex align-items-center">
                                        <div>
                                            <img className="rounded-2" src={patente} alt="image" width="100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev pb-5" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <i className="fas fa-chevron-left"></i>
                    </a>
                    <a className="carousel-control-next pb-5" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Patentes;