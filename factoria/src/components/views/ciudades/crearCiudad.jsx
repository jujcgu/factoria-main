import React from "react";
import { Link } from "react-router-dom";
import Logoimg from "../../../img/logo usco.png";
import "./Ciudades.css";

const CrearCiudad = () => {
  const onSubmit = (e) => {
    e.prevenDefault();
  };

  return (
    <div id="container">
      <div className="icon_wrapper">
        <div className="cerrar">
          <a href="">Cerrar</a>
        </div>
        <img className="icon" src={Logoimg} />
      </div>

      <div className="underline">
        <h1> Añadir Ciudad</h1>
      </div>
      <form action="#" method="post" id="contact_form">
        <div className="box">
          <div className="left">
            <div className="content">
              <label className="labels">NOMBRE DE CIUDAD</label>
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
                <option></option>
                <option></option>
                <option></option>
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

export default CrearCiudad;
