import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Alert,
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import DataTable from "react-data-table-component";

//function GestionDepartamento() {
const GestionDepartamento = (props) => {
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [departamento_id, setDepartamento_id] = useState(0);

  const [listadepartamentos, setListadepartamentos] = useState([]);
  const [listaDepartamento, setListaDepartamento] = useState([]);

  const [selecteddepartamentos, setSelecteddepartamentos] = useState(-1);

  const [botonModalNombre, setBotonModalNombre] = useState("");
  const [operacion, setOperacion] = useState("");

  const [disabledId, setDisabledId] = useState(false);
  const [disabledNombre, setDisabledNombre] = useState(false);
  const [disabledDepartamento, setDisabledDepartamento] = useState(false);

  const [mensaje, setMensaje] = useState("");
  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
    },
    {
      name: "Nombre",
      selector: "nombre",
      sortable: true,
    },
    {
      name: "Departamento",
      selector: "departamento_nombre",
      sortable: true,
    },
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row.toggleSelected,
      style: {
        backgroundColor: "#EAEAEA",
        userSelect: "none",
      },
    },
  ];

  const handleRowClicked = (row) => {
    setSelecteddepartamentos(row.id);
    setNombre(row.nombre);
    setDepartamento_id(row.departamento_id);

    data.map((item) => {
      if (row.id !== item.id) {
        item.toggleSelected = false;
      } else {
        item.toggleSelected = !item.toggleSelected;
      }

      return {
        ...item,
      };
    });

    /*
        const updatedData = data.map(item => {
            if (row.id !== item.id) {
                return item;
            }
    
            return {
                ...item,
                toggleSelected: !item.toggleSelected
            };
        });
        setData(updatedData);
        */
  };

  const [data, setData] = useState([]);

  /*
    useEffect(() => {
        Axios.get('http://localhost:5000/api/departamentos/select-departamentos/41').then((response) => {            
            setData(response.data);
        })
    }, [])
    */

  const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    Axios.get(
      "http://localhost:5000/api/departamentos/select-departamentos"
    ).then((response) => {
      setListadepartamentos(response.data);
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/departamentos/").then((response) => {
      setListaDepartamento(response.data);
    });
  }, []);

  const getdepartamentoses = (e) => {
    const departamento_id = e.target.value;
    setDepartamento_id(departamento_id);

    Axios.get(
      `http://localhost:5000/api/departamentos/select-departamentos/${departamento_id}`
    ).then((response) => {
      setListadepartamentos(response.data);
      setData(response.data);
    });

    setSelecteddepartamentos(-1);
  };

  const editar = (operacion) => {
    setOperacion(operacion);

    if (operacion === "insert") {
      setBotonModalNombre("Adicionar");

      setDisabledId(false);
      setDisabledNombre(false);
      setDisabledDepartamento(false);

      setId("");
      setNombre("");
    } else {
      if (selecteddepartamentos === -1) {
        if (operacion === "update") {
          setMensaje(
            "  Por favor seleccione la departamentos que desea modificar."
          );
        }
        if (operacion === "delete") {
          setMensaje(
            "  Por favor seleccione la departamentos que desea eliminar."
          );
        }
        setVisible(true);
        return;
      } else {
        if (operacion === "update") {
          setBotonModalNombre("Modificar");
          setDisabledId(true);
          setDisabledNombre(false);
          setDisabledDepartamento(true);
        }
        if (operacion === "delete") {
          setBotonModalNombre("Eliminar");
          setDisabledId(true);
          setDisabledNombre(true);
          setDisabledDepartamento(true);
        }
        setId(selecteddepartamentos);
        setNombre(nombre);
      }
    }
    setModal(true);
  };

  const reload = () => {
    Axios.get(
      `http://localhost:5000/api/departamentos/select-departamentos/${departamento_id}`
    ).then((response) => {
      setListadepartamentos(response.data);
      setData(response.data);
    });
    setSelecteddepartamentos(-1);
  };

  const ejecutar = () => {
    setModal(false);

    const departamentos_id = document.getElementById("input_id").value;
    const departamentos_nombre = document.getElementById("input_nombre").value;
    const departamentos_departamento =
      document.getElementById("input_departamento").value;

    console.log(
      departamentos_id +
        "," +
        departamentos_nombre +
        "," +
        departamentos_departamento
    );

    if (operacion === "insert") {
      Axios.post("http://localhost:5000/api/departamentos/create", {
        id: departamentos_id,
        nombre: departamentos_nombre,
        departamento_id: departamentos_departamento,
      }).then(() => {
        reload();
      });
    }

    if (operacion === "update") {
      Axios.put(`http://localhost:5000/api/departamentos/update/${id}`, {
        id: departamentos_id,
        nombre: departamentos_nombre,
        departamento_id: departamentos_departamento,
      }).then(() => {
        reload();
      });
    }

    if (operacion === "delete") {
      Axios.delete(`http://localhost:5000/api/departamentos/delete/${id}`).then(
        (response) => {
          reload();
        }
      );
    }
  };

  return (
    <div className="GestionDepartamento">
      <div class="container">
        <div class="fs-1 my-5 text-center border-bottom">
          <h1 class="display-4 fw-bold">Gestion departamentos</h1>
        </div>

        <div class="row w-100 p-3">
          <div class="col md={6}">
            <select
              class="form-select form-select-lg mb-3"
              id="cboDepartamento"
              onChange={getdepartamentoses}
            >
              <option value={-1}>Seleccione el Departamento</option>
              {listaDepartamento.map((datoDepartamento) => (
                <option value={datoDepartamento.id}>
                  {datoDepartamento.nombre}
                </option>
              ))}
            </select>
          </div>

          <div class="col md={6} float-right">
            {" "}
            <button
              type="button"
              class="btn btn-primary float-right"
              onClick={() => {
                editar("insert");
              }}
            >
              Crear departamentos
            </button>{" "}
            <button
              type="button"
              class="btn btn-secondary float-right"
              onClick={() => {
                editar("update");
              }}
            >
              Editar departamentos
            </button>{" "}
            <button
              type="button"
              class="btn btn-danger float-right"
              onClick={() => {
                editar("delete");
              }}
            >
              Eliminar departamentos
            </button>
          </div>
        </div>

        <div class="row">
          <Alert color="danger" isOpen={visible} toggle={onDismiss}>
            {mensaje}
          </Alert>

          <DataTable
            title="Gestión departamentoses"
            columns={columns}
            data={data}
            striped
            dense
            noHeader
            pagination
            defaultSortFieldId={"nombre"}
            search
            onRowClicked={handleRowClicked}
            conditionalRowStyles={conditionalRowStyles}
          />

          <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Gestión departamentoses</ModalHeader>
              <ModalBody>
                <Label for="id">Id</Label>{" "}
                <Input
                  type="text"
                  placeholder="Escriba el Id de la departamentos"
                  defaultValue={id}
                  id="input_id"
                  disabled={disabledId}
                />
                <Label for="nombre">Nombre</Label>{" "}
                <Input
                  type="text"
                  placeholder="Escriba el nombre de la departamentos"
                  defaultValue={nombre}
                  id="input_nombre"
                  disabled={disabledNombre}
                />
                <Label for="departamento">Departamento</Label>{" "}
                <Input
                  type="select"
                  name="departamento"
                  id="input_departamento"
                  defaultValue={departamento_id}
                  disabled={disabledDepartamento}
                >
                  {listaDepartamento.map((datoDepartamento) => (
                    <option value={datoDepartamento.id}>
                      {datoDepartamento.nombre}
                    </option>
                  ))}
                </Input>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={ejecutar}>
                  {botonModalNombre}
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GestionDepartamento;
