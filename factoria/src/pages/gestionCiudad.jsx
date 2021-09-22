import React, { useEffect, useState } from "react";
import Logoimg from "../img/logo usco.png";
import Axios from "axios";
import '../css/crearCiudad.css';

function gestionCiudad(){

    /*const mostrarModalInsertar = () => {        
        setMostrarInsertar({mostrar:true})
    };
    
    const cerrarModalInsertar = () => {
        setMostrarInsertar({mostrar:false})
    };
    
    const mostrarModalActualizar = (id) => {
        setNuevoId(id);
        setMostrarActualizar({mostrar:true})
    };
    
    const cerrarModalActualizar = () => {        
        setMostrarActualizar({mostrar:false})
    };

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [departamento_id, setDepartamentoId] = useState("");
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoId, setNuevoId] = useState("");   
    const [MostrarInsertar, setMostrarInsertar] = useState({mostrar: false});
    const [MostrarActualizar, setMostrarActualizar] = useState({mostrar: false});
    const [rolesLista, setRolesLista] = useState([]);*/

    return(   
        <div>
            <div id="Container">                                
                <div class="d-flex justify-content-center">
                    <img className="icon" src={Logoimg} />
                </div>
            </div>
        </div> 
    );
}
export default gestionCiudad;