import React, { useEffect } from 'react';
import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "../components/navbar";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

function CrudRoles(){ 

  const mostrarModalInsertar = () => {
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
  const [permisos, setPermisos] = useState("");
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoId, setNuevoId] = useState("");   
  const [MostrarInsertar, setMostrarInsertar] = useState({mostrar: false});
  const [MostrarActualizar, setMostrarActualizar] = useState({mostrar: false});
  const [rolesLista, setRolesLista] = useState([]);

  useEffect(() => {
      Axios.get('http://localhost:3001/api/select-roles').then((response) => {            
          setRolesLista(response.data)
      })
  }, [])

  const añadirRol = () => {

      Axios.post('http://localhost:3001/api/insert-roles',{
          id: id,
          nombre: nombre,
          permisos: permisos,
      });

      setRolesLista([
          ...rolesLista, 
          {id: id, nombre: nombre, permisos: permisos},
      ]);

  };

  const editarRol = (id) => {
      Axios.put("http://localhost:3001/api/update-roles", { nombre: nuevoNombre, id: id }).then(
        (response) => {
          setRolesLista(
            rolesLista.map((val) => {
              return val.id == id
                ? {
                    id: val.id,
                    nombre: val.nombre,
                    permisos: val.permisos,                      
                  }
                : val;
            })
          );
        }
      );
    };



  const eliminarRol = (id) => {
      Axios.delete(`http://localhost:3001/api/delete-roles/${id}`);
  };

    return(
      <><>
        <NavComponent />                
        <Container>
          <br />
          <Button color="danger" onClick={mostrarModalInsertar}>Crear</Button>
          <br />
          <br />          
          <Table>
            <thead>
              <tr>

                <th>ID</th>
                <th style={{ paddingLeft: '450px' }}>rol</th>

                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {rolesLista.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td style={{ paddingLeft: '450px' }}>{dato.nombre}</td>
                  <td>
                    <Button
                      color="danger"
                      onClick={() => {
                        mostrarModalActualizar(dato.id);
                    }}
                    >
                      Editar                      
                    </Button>{" "}
                    <Button color="danger" onClick={() => {
                      eliminarRol(dato.id);
                    } }>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container></><Modal isOpen={MostrarInsertar.mostrar}>
          <ModalHeader>
            <div><h3>Insertar rol</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                name="id"
                className="form-control"
                onChange={(e) => { setId(e.target.value); } }
                type="text" />
            </FormGroup>

            <FormGroup>
              <label>
                permisos:
              </label>
              
              <input
                className="form-control"
                name="permisos"
                type="text"
                onChange={(e) => { setPermisos(e.target.value); } } />
            </FormGroup>

            <FormGroup>
              <label>
                Rol:
              </label>

              <input
                name="nombre"
                className="form-control"
                onChange={(e) => { setNombre(e.target.value); } }
                type="text" />
            </FormGroup>
            
          </ModalBody>

          <ModalFooter>
            <Button
              color="danger"
              onClick={añadirRol}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        
        <Modal isOpen={MostrarActualizar.mostrar}>
          <ModalHeader>
            <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>


            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="rol"
                type="text"
                onChange={(e) => {
                  setNuevoNombre(e.target.value);
                }}              
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="danger"
              onClick={() => {
                editarRol(nuevoId);
              }}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={cerrarModalActualizar}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        
        </>  

        
);
}export default CrudRoles;