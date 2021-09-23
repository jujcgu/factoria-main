import React from 'react';
import { Link } from 'react-router-dom';
import Logoimg from '../img/400x400.png';
import Logo from '../components/logoHeader';
import BarraLateral from '../components/barraLateral';

const RegisterPage = () => {

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
                        <img className="imglogin absolute ml-5" src={Logoimg} alt="description" />
                        <h1 className="text-center">Registrate</h1>

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

                        <div className="campo-form ">

                            <input
                                type="password"
                                id="confirmar"
                                name="contrapassword"
                                placeholder="Repetir contraseña"
                                className="input"
                                required
                            />
                        </div>


                        <div className="campo-form">
                            <input
                                type="submit"
                                value="Crear cuenta"
                                className="button"

                            />
                        </div>

                        <p className="enlace-cuenta text-center">
                            ¿Ya tienes una cuenta?
                    </p>


                        <div className="campo-form">
                            <Link to={'/'} className="button-login">
                                Iniciar Sesion
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;