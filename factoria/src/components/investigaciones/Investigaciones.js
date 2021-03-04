import React from 'react';
import ListadoInv from '../investigaciones/ListadoInv';
import DetallesGrupo from './DetallesGrupo';
import logousco from '../../img/logo usco.png';
import Logo from '../../img/400x400.png';
import Imagen from '../../img/400x400.png';
const Investigaciones = () => {
    return (
        <div className="container ">

            <div className="fondoinves mb-5">

                <div className="fondotittle">
                    <div className="row align-items-center">
                        <div className="col-10 ">
                            <img src={logousco} className=" w-90 m-0 p-0 img-usco" />
                        </div>
                        <div className="col-2">
                            <a type="button" className="btn  button-reg ">Regresar</a>
                        </div>

                    </div>
                </div>

                <div className=" fondodatosuser ">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-2">
                                <img className="imgperfil " src={Logo} />
                            </div>
                            <div className="col-2">
                                <h4 className=""><strong> JUAN CAMILO DEGADO MONTES</strong></h4>
                            </div>
                            <div className="col-2">
                                <h4 className=""> 20182171875</h4>
                            </div>
                            <div className="col-2">
                                <a type="button" className="btn btn-block  button-perfil m-3 ">Perfil</a>
                            </div>
                            <div className="col-2">
                                <a type="button" className="btn btn-block button-perfil m-3">Regresar</a>
                            </div>
                            <div className="col-2">
                                <a type="button" className="btn btn-block button-perfil m-3">Cerrar Sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr ></hr>
                <h1 className="text-center">Grupo de investigación</h1>
                <hr ></hr>

                <DetallesGrupo />
                <div className="container   p-5">
                    <div className="row addcenter">

                        <a className="button-gris-amarillo align-middle">Publicaciones</a>
                        <a className="button-gris-amarillo">Miembros</a>
                        <a className="button-gris-amarillo">Información</a>
                        <a className="button-gris-amarillo">Contactos</a>

                    </div>
                    <div className="row addcenter">
                        <a className="button-gris-amarillo">Publicaciones</a>
                        <a className="button-gris-amarillo">Publicaciones</a>

                    </div>

                </div>

                <ListadoInv />
                <ListadoInv />
                <div className="container addcenter ">
                    <div className="row">
                        <div className="col-lg-5"></div>
                        <div className="col-lg-5">
                            <nav aria-label="Page navigation example border ">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only bg-amarillo m-1">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a class="page-link bg-amarillo m-1" href="#">1</a></li>
                                    <li className="page-item"><a class="page-link bg-amarillo m-1" href="#">2</a></li>
                                    <li className="page-item"><a class="page-link bg-amarillo m-1" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
            <br></br>

        </div>


    );
}

export default Investigaciones;