import axios from "axios";

export const getPaises = () => {
  return axios.get("http://localhost:3001/api/paises");
};
export const setPais = (NuevoPais) => {
  return axios.post("http://localhost:3001/api/paises/create", NuevoPais);
};
