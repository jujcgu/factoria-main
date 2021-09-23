import { useState } from "react";
import Axios from "axios";

function EditarCiudad() {
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [departamento_id, setDepartamento_id] = useState(0);  

  const [nuevoNombre, setNuevoNombre] = useState(0);

  const [listaCiudad, setListaCiudad] = useState([]);

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

  const selectCiudad = () => {
    Axios.get("http://localhost:3001/api/select-ciudad").then((response) => {
      setListaCiudad(response.data);
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

  return (
    <div className="App">
      <div className="information">
        <label>Nombre:</label>
        <input
          type="text"
          onChange={(event) => {
            setNombre(event.target.value);
          }}
        />
        <label>Departamento:</label>
        <input
          type="text"
          onChange={(event) => {
            setDepartamento_id(event.target.value);
          }}
        />       
        <button onClick={insertCiudad}>Añadir ciudad</button>
      </div>
      <div className="employees">
        <button onClick={selectCiudad}>mostrar ciudades</button>

        {listaCiudad.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Id: {val.id}</h3>
                <h3>Nombre: {val.nombre}</h3>
                <h3>Departamento: {val.departamento_id}</h3>                
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNuevoNombre(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateCiudad(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteCiudad(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EditarCiudad;