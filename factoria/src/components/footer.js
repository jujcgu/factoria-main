import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="w-100 pBarraFooter"></div>
            
            <div className="w-100 d-flex flex-row d-flex justify-content-center navegacionFooter">

                <div class="navegacionFooterIcono mr-3">
                    <a href="#" className="d-flex flex-row m-0">
                        <i className="fas fa-headset mr-3"></i>
                        <p className="mb-0">Servicio al cliente</p>
                    </a>
                </div>

                <div class="ml-5 navegacionFooterIcono">
                    <a href="#" className="d-flex flex-row m-0"> 
                        <i className="fas fa-book-reader mr-3 "></i>
                        <p className="mb-0 align-items-center">Políticas de Privacidad</p>
                    </a>
                </div>

                <div class="d-flex flex-row d-flex justify-content-center navegacionFooterIcono">
                    <i className="fas fa-slash mr-3 ml-3 barraDiagonal"></i>
                    <a href="#"><p className="mb-0">Términos y Condiciones</p></a>
                </div>

            </div>
            
            <div> 
                
            </div>

        </footer>
    );
}

export default Footer;