import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/400x400.png';
import LogoUsco from '../../img/logolargo.png';

const Register = () => {
    
    const onSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <div className="text-center">
                <img src={LogoUsco}></img>
            </div>
            <div className="barra"></div>
            <div className="container">
                <form className="form relative"
                onSubmit={onSubmit}>
                    <img className="imglogin absolute" src={Logo}/>
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
                            className="btn btn-primario btn-block"
                            value="Crear cuenta"
                            className="button"
                            
                        />
                    </div> 

                    <Link to={'/'} className="enlace-cuenta">
                    ¿Ya tienes una cuenta?
                    </Link>


                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar sesion"
                            className="button-login"
                        />
                    </div>
                </form>
            </div>
        </div>
        
        
    );
}
 
export default Register;