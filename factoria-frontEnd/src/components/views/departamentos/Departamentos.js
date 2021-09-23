import React, { useEffect, useState } from "react";
import { getDepartamentos } from "../../../services/apiDepartamentos";
import Logoimg from "../../../img/logo usco.png";
import "./Departamentos.css";

const Departamentos = () => {
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

  const onSubmit = (e) => {
    e.prevenDefault();
  };

  return (
    <div id="container">
      <div className="icon_wrapper">
        <div className="cerrar">
          <a href="">Cerrar</a>
        </div>
        <img alt="logo de la universidad" className="icon" src={Logoimg} />
      </div>

      <div className="underline">
        <h1> Añadir Departamentos</h1>
      </div>
      <form action="#" method="post" id="contact_form">
        <div className="box">
          <div className="left">
            <div className="content">
              <label className="labels">NOMBRE DEL PAIS</label>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="left">
            <div className="content">
              <label className="labels">DEPARTAMENTO</label>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <select
                placeholder="Subject line"
                name="subject"
                id="subject_input"
                required
              >
                {" "}
                {departamentos &&
                  departamentos.map((departamento, i) => (
                    <option key={i}>{departamento.nombre}</option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="left">
            <div className="content">
              <label className="labels">CODIGO POSTAL</label>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <input class="inputs" type="text" />
            </div>
          </div>
        </div>
        <div className="submit">
          <a href="">Guardar</a>
        </div>
      </form>
    </div>
  );
};

export default Departamentos;
