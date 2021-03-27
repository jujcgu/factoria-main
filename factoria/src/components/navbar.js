import React from 'react';
import '../css/nav.css';
import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <section>

            <nav className="navbar navbar-expand-lg navbar-principal">
                <ul class="nav nav-tabs atecion-c">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            Atención al cliente
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                </ul>
                <div className="collapse navbar-collapse justify-content-end navbar-secundaria" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className='nav-link mb-0'> <i class="fas fa-hand-point-right"></i> Iniciar sesion</a>
                        </li>
                        <li className="borde"></li>
                        <li className="nav-item">
                            <a href="#" className='nav-link mb-0'> <i class="fas fa-user-circle"></i> Registrarse</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="d-flex justify-content-between align-items-center div-nav-principal">

                <div className="d-flex align-items-center ES">
                    <a href="#"> <i class="fas fa-globe"></i> ES <i class="fas fa-sort-down"></i> </a>
                    <div className="ml-3" id="circulo"> </div>
                </div>


                <div className="rounded-pill search px-1">
                    <ul>
                        <li>
                            <select className="align-items-left">
                                <option>
                                    Categorías
                                </option>
                            </select>
                        </li>
                        <li className="buscarTexto">
                            <input type="text" className="align-items-center" placeholder="¿Qué deseas buscar?"></input>
                        </li>
                        <li className="float-right">
                            <button className="lupa"> <i class="fas fa-search"></i> </button>
                        </li>
                    </ul>
                </div>

                <div className="search2">
                    <ul className="">
                        <li>
                            <a href="#"> <i class="fas fa-home"> </i>Inicio</a>
                        </li>
                        <li>
                            <a href="#"> <i class="far fa-newspaper"></i> Acerca de</a>
                        </li>
                        <li>
                            <a href="#"> <i class="fas fa-palette"></i></a>
                        </li>
                    </ul>

                </div>

            </div>

        </section>
    );

}
export default NavBar;
