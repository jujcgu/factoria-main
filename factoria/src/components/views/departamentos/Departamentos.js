import React, { useEffect, useState } from "react";
import { getDepartamentos } from "../../../services/apiDepartamentos";
import "./Departamentos.css";

const Home = () => {
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    fetchDepartamentos();
  }, []);

  const fetchDepartamentos = () => {
    getDepartamentos().then((json) => {
      if (json.error) {
        console.log("error");
      } else {
        setDepartamentos(json.data);
      }
    });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }} className="my-5">
        Lista de Departamentos
      </h1>
      <div className="container cards-cont">
        <div className="row">
          {departamentos &&
            departamentos.map((departamento, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3 card-col">
                <div className="card">
                  {departamento.nombre}
                  <br></br>
                  {departamento.pais_id}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
