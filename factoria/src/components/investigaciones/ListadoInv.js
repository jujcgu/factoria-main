import React from 'react';
import Imagen from '../../img/400x400.png';
const ListadoInv = () => {
    return (
        <div className="card flexbox shadow m-5 borderlista">
            <img className="card-img-top img-listad" src={Imagen} alt="Card image cap" />
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="card-title text-rojo"><strong>Python as a IA learning tool</strong></h2>
                        </div>
                        <div className="col">
                            <h5 className="card-title"><strong>Tipo:</strong><span>trabajo de grado</span></h5>
                        </div>
                    </div>
                </div>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
          cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}

export default ListadoInv;