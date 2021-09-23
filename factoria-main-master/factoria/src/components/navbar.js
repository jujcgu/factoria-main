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
                            <a href="#" className='nav-link mb-0'> <i class="fas fa-hand-point-right"></i> Cerrar Sesion </a>
                        </li>
                        <li className="borde"></li>
                        <li className="nav-item">
                            <a href="#" className='nav-link mb-0'> <i class="fas fa-user-circle"></i> Perfil </a>
                        </li>
                    </ul>
                </div>
            </nav>

            

        </section>
    );

}
export default NavBar;
