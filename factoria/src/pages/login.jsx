import React from 'react';
import { Link } from 'react-router-dom';
import Logoimg from '../img/400x400.png';
import Logo from '../components/logoHeader';
import BarraLateral from '../components/barraLateral';

const LoginPage = () => {

    const onSubmit = e => {
        e.prevenDefault();
    }

    return (

        <div>
            <Logo />
            <BarraLateral />

            <div className="bodyLogin">
                <div className="container">
                    <form className="form relative w-100"
                        onSubmit={onSubmit}>
                        <img className="imglogin absolute ml-5" src={Logoimg} />
                        <h1 className="text-center">Inicio Sesion</h1>

                        <div className="campo-form ">

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu email"
                                className="input"
                                required
                            />
                        </div>

                        <div className="campo-form ">

                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Tu contraseña"
                                className="input"
                                required
                            />
                        </div>

                        <div className="campo-form">
                            <input
                                type="submit"
                                value="Ingresar"
                                className="button"
                            />
                        </div>

                        <a href="#!">¿Olvidaste tu contraseña?</a>

                        <p className="enlace-cuenta text-center">
                            ¿No tienes una cuenta?
                    </p>

                        <div className="campo-form">

                            <Link to={'/register'} className="button-login">
                                Registrate
                        </Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
