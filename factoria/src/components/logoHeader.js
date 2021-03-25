import React from 'react';
import { Link } from 'react-router-dom';
import LogoUsco from '../img/logolargo.png';
import '../css/logoHeader.css';


const Logo = () => {
    return(
    <section>
        <div className="div-logo">
            <img src={LogoUsco}></img>
        </div>
   
    </section>
);

}
export default Logo;


