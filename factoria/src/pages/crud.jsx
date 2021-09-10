import React from 'react';
import Crud from './../components/crud/Crud';
import NavBar from '../components/navbar';
import Logo from '../img/logocorto2.png';


const Cruds = () => {
    return (
        <div className="container">
            <div className="fondo2 text-center">
                <img className="logo" src={Logo} />
            </div>






                <>


                    <NavBar/>
                    <Crud />


                </>
        </div>
            );

}

            export default Cruds;