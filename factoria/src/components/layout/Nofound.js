import React from 'react';
import Logousco from '../../img/logocorto2.png';

const Nofound = () => {
    return (

        <section className="sectionPageNotFound w-100 h-100">
            <div className="espaciadoPageNotFound w-100"></div>
            <div className="container">
                <div className="fondo">
                    <img src={Logousco} className="img-usco" />
                    <div>
                        <h1 className="text-center">Error 404</h1>
                        <p className="parrafo text-center">Lo sentimos, no pudimos encontrar la pagina solicitada.</p>
                    </div>
                </div>
            </div>
            <div className="espaciadoPageNotFound w-100"></div>
        </section>
    );
}

export default Nofound;