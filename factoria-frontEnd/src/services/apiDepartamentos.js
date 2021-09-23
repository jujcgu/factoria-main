import axios from "axios";

export const getDepartamentos = () => {
  return axios.get("http://localhost:5000/api/departamentos");
};
