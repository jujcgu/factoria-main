import axios from "axios";

export const selectCiudad = () => {
    return axios.get("http://localhost:5000/api/ciudad");
};

export const updateCiudad = () => {
    return axios.get("http://localhost:5000/api/ciudad");
};

export const getDepartamentos = () => {
    return axios.get("http://localhost:5000/api/departamentos");
  };