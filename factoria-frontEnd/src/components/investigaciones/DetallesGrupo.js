import React from 'react';
import Imagen from '../../img/400x400.png';
const DetallesGrupo = () => {
    return (
        <div className="fondointegrante ">
        <div className="flexbox">
            <img className="img-investigacion" src={Imagen}/>
            <div className="container">
                <div className="row align-items-center" >
                    <div className="col">
                        <strong>Nombre</strong>                        
                    </div>
                    <div className="col">
                        Computer Science
                    </div>
                    <div className="col">
                    <strong>Creacion del grupo</strong>
                    </div>
                    <div className="col">
                        10 - 02 - 2021
                    </div>
                    
                </div>
                <br></br>
                <div className="row align-items-center">
                    <div className="col">
                    <strong>Lider</strong>
                    </div>
                    <div className="col">
                        Diomedez dias
                    </div>
                    <div className="col">
                    <strong>Categoria 933 de 2019</strong>
                    </div>
                    <div className="col">
                        A1
                    </div>
                    
                </div>
                <br></br>
                <div className="row align-items-center">
                    <div className="col">
                    <strong>Facultad</strong>
                    </div>
                    <div className="col">
                        Ingenieria
                    </div>
                    <div className="col">
                    <strong>Colciencias</strong>
                    </div>
                    <div className="col">
                        Computer Science
                    </div>
                    
                </div>                
            </div>            
        </div>
    </div>
     );
}
 
export default DetallesGrupo;