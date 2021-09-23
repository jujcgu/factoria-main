import React, { useEffect } from 'react';
import { useState } from "react";
import Logoimg from "../img/logo usco.png";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function GestionCiudad(){    

    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [departamento_id, setDepartamento_id] = useState(0);  

    const [nuevoNombre, setNuevoNombre] = useState(0);

    const [listaCiudad, setListaCiudad] = useState([]);
    const [listaDepartamento, setListaDepartamento] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/select-ciudad').then((response) => {            
            setListaCiudad(response.data)
        })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/select-departamento').then((response) => {            
            setListaDepartamento(response.data)
        })
    }, [])

    const insertCiudad = () => {
        Axios.post("http://localhost:3001/api/insert-ciudad", {
        id: id,
        nombre: nombre,
        departamento_id: departamento_id,      
        }).then(() => {
        setListaCiudad([
            ...listaCiudad,
            {
            id: id,
            nombre: nombre,
            departamento_id: departamento_id,          
            },
        ]);
        });
    };

    const updateCiudad = (id) => {
        Axios.put("http://localhost:3001/api/update-ciudad", { nombre: nuevoNombre, id: id }).then(
        (response) => {
            setListaCiudad(
            listaCiudad.map((val) => {
                return val.id == id
                ? {
                    id: val.id,
                    nombre: val.nombre,
                    departamento_id: val.departamento_id,                  
                    }
                : val;
            })
            );
        }
        );
    };

    const deleteCiudad = (id) => {
        Axios.delete(`http://localhost:3001/delete-ciudad/${id}`).then((response) => {
        setListaCiudad(
            listaCiudad.filter((val) => {
            return val.id != id;
            })
        );
        });
    };

    return(   
        <div class="container-fluid">

            <div class="fs-1 my-5 text-center border-bottom">
                <h1 class="display-4 fw-bold">Gestion ciudad</h1>
            </div>

            <div class="row">
                <div class="col">                          
                    <select class="form-select form-select-lg mb-3" >
                        {listaDepartamento.map((datoDepartamento) => (
                            <option>{datoDepartamento.nombre}</option>                          
                        ))}          
                    </select>
                </div>
                <div class="col"> 
                    <select class="form-select form-select-lg mb-3" >
                        {listaCiudad.map((datoCiudad) => (
                            <option>{datoCiudad.nombre}</option>
                        ))}                       
                    </select>
                </div>                 
            </div>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Crear ciudad
                        </button>                        
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Understood</button>
                                    </div>
                                </div>
                            </div>
                        </div>                            
                    </div>
                    <div class="col">
                    <button type="button" class="btn btn-secondary">
                        Editar ciudad
                    </button>
                    </div>
                    <div class="col">
                    <button type="button" class="btn btn-danger">
                        Eliminar ciudad
                    </button>
                    </div>
                </div>
            </div>

        </div> 
    );
}
export default GestionCiudad;