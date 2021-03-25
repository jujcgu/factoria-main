import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/400x400.png';
import LogoUsco from '../../img/logolargo.png';

const Login = () => {
    //Funcion onSubmit para prevenir por defecto la accion del boton

    const onSubmit = e => {
        e.prevenDefault();
    }
    return (
        <div>
            <div className="text-center">
                <img src={LogoUsco} className="logolargo"></img>
            </div>
            <div className="barra"></div>
            <div className="container">
                <form className="form relative"
                onSubmit={onSubmit}>
                    <img className="imglogin absolute" src={Logo}/>
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
        
        
    );
}
 
export default Login;





