import React, { useState, useEffect } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const GestionCiudad = (props) => {
    
    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [departamento_id, setDepartamento_id] = useState(0);  

    const [nuevoNombre, setNuevoNombre] = useState("");

    const [listaCiudad, setListaCiudad] = useState([]);
    const [listaDepartamento, setListaDepartamento] = useState([]);

    const [selectedCiudad, setSelectedCiudad] = useState(-1);

    const [botonModalNombre, setBotonModalNombre] = useState("");
    const [operacion, setOperacion] = useState("");

    const [disabled, setDisabled] = useState(false);
    
    const [mensaje, setMensaje] = useState("");
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);

    const {
        buttonLabel,
        className
    } = props;
    

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    useEffect(() => {
        Axios.get('http://localhost:5000/api/ciudad/select-ciudad').then((response) => {            
            setListaCiudad(response.data)
        })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:5000/api/departamentos/').then((response) => {            
            setListaDepartamento(response.data)
        })
    }, [])

    const insertCiudad = () => {

        console.log("insertCiudad: " +  id + "," + nombre + "," + departamento_id);
        
        Axios.post("http://localhost:5000/api/ciudad/insert-ciudad", {
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
        Axios.put("http://localhost:5000/api/ciudad/update-ciudad", { 
            nombre: nuevoNombre, 
            id: id 
        }).then(
            (response) => {
                setListaCiudad(
                    listaCiudad.map((val) => {
                        return val.id === id
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
        Axios.delete(`http://localhost:5000/api/ciudad/delete-ciudad/${id}`).then((response) => {
        setListaCiudad(
            listaCiudad.filter((val) => {
            return val.id !== id;
            })
        );
        });
    };

    const getCiudades = (e) => {
        const departamento_id = e.target.value;
        setDepartamento_id(departamento_id);

        console.log("dpto_id: " + departamento_id);

        Axios.get(`http://localhost:5000/api/ciudad/select-ciudad/${departamento_id}`).then((response) => {            
            setListaCiudad(response.data)
        });

        setSelectedCiudad(-1); 
    };

    const handleChange = (e) => {
        setSelectedCiudad(e.target.value); 
        var index = e.target.selectedIndex;
        setNombre(e.target[index].text);
    }

    const editar = (operacion) => {
        setOperacion(operacion);
        
        if (operacion === "insert"){
            setBotonModalNombre("Adicionar");
            setDisabled(false);
            setId("");
            setNombre("");
        }
        else{
            if (selectedCiudad === -1){
                if (operacion == "update"){
                    setMensaje("Por favor seleccione la ciudad que desea modificar.");
                }
                if (operacion == "delete"){
                    setMensaje("Por favor seleccione la ciudad que desea eliminar.");
                }
                setVisible(true);
                return;
            }
            else{
                if (operacion == "update"){
                    setBotonModalNombre("Modificar");    
                }
                if (operacion == "delete"){
                    setBotonModalNombre("Eliminar");    
                }
                setDisabled(true);
                setId(selectedCiudad);
                setNombre(nombre);
            }
        }
        setModal(true);
    };

    const ejecutar = () => {
        setModal(false);

        console.log(operacion);

        const ciudad_id = document.getElementById("input_id").value
        const ciudad_nombre = document.getElementById("input_nombre").value
        const ciudad_departamento = document.getElementById("input_departamento").value

        console.log(ciudad_id +  "," + ciudad_nombre + "," + ciudad_departamento);

        if (operacion == "insert"){

           Axios.post("http://localhost:5000/api/ciudad/insert-ciudad", {
                id: ciudad_id,
                nombre: ciudad_nombre,
                departamento_id: ciudad_departamento,      
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
        }
        

        if (operacion == "update"){
            Axios.put("http://localhost:5000/api/ciudad/update-ciudad", {
                id: ciudad_id,    
                nombre: ciudad_nombre, 
                departamento_id: ciudad_departamento,  
            }).then(() => {
                Axios.get(`http://localhost:5000/api/ciudad/select-ciudad/${departamento_id}`).then((response) => {            
                    setListaCiudad(response.data)
                });
                setSelectedCiudad(-1);
            });
        }

        if (operacion == "delete"){
            Axios.delete(`http://localhost:5000/api/ciudad/delete-ciudad/${id}`).then((response) => {
                console.log("update dpto_id: " + departamento_id);
                Axios.get(`http://localhost:5000/api/ciudad/select-ciudad/${departamento_id}`).then((response) => {            
                    setListaCiudad(response.data)
                });
                setSelectedCiudad(-1);
            });
        }
    }

    return (
        <div className="GestionCiudad">
            <div class="container-fluid">

                <div class="fs-1 my-5 text-center border-bottom">
                    <h1 class="display-4 fw-bold">Gestion ciudad</h1>
                </div>

                <div class="row">
                    <div class="col">                          
                        <select class="form-select form-select-lg mb-3" onChange={getCiudades}> 
                            <option value={-1}>Seleccione el Departamento</option>
                            {listaDepartamento.map((datoDepartamento) => (
                                <option value={datoDepartamento.id}>{datoDepartamento.nombre}</option>                          
                            ))}          
                        </select>
                    </div>

                    <div class="col"> 
                        <select class="form-select form-select-lg mb-3" value={selectedCiudad} id="cboCiudad" onChange={handleChange}>
                        <option value={-1} selected>Seleccione la Ciudad</option>
                            {listaCiudad.map((datoCiudad) => (
                                <option value={datoCiudad.id}>{datoCiudad.nombre}</option>
                            ))}                       
                        </select>
                    </div>                 
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <button type="button" class="btn btn-primary" onClick={()=>{editar('insert');}}>
                                Crear ciudad
                            </button>
                        </div>                        
                        <div class="col">                            
                            <button type="button" class="btn btn-secondary" onClick={()=>{editar('update');}}>
                                Editar ciudad
                            </button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-danger" onClick={()=>{editar('delete');}}>                                
                                Eliminar ciudad
                            </button>
                        </div>
                    </div>
                                        
                    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                        {mensaje}
                    </Alert>

                    <div>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Gestión Ciudades</ModalHeader>
                            <ModalBody>
                                <Label for="id">Id</Label>{' '}
                                <Input type="text" placeholder="Escriba el Id de la Ciudad" defaultValue={id} id="input_id" disabled={disabled} />

                                <Label for="nombre">Nombre</Label>{' '}
                                <Input type="text" placeholder="Escriba el nombre de la Ciudad" defaultValue={nombre} id="input_nombre" />
                                
                                <Label for="departamento">Departamento</Label>{' '}
                                <Input type="select" name="departamento" id="input_departamento" defaultValue={departamento_id}>
                                    {listaDepartamento.map((datoDepartamento) => (
                                        <option value={datoDepartamento.id}>{datoDepartamento.nombre}</option>                          
                                    ))}        
                                </Input>

                            </ModalBody>
                            <ModalFooter>
                            <Button color="primary" onClick={ejecutar}>{botonModalNombre}</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>


                </div>
            </div>
        </div> 
    );
}
export default GestionCiudad;