import axios from "axios";

export const getPaises = () => {
  return axios.get("http://localhost:3001/api/paises");
};
export const setPais = (NuevoPais) => {
  console.log(NuevoPais);
  return axios.post("http://localhost:3001/api/paises/create", NuevoPais);
};
export const updatePais = (nuevoNombre, nuevaMoneda, id) => {
  return (
    axios.post("http://localhost:3001/api/paises/update/", {
    nombre: nuevoNombre,
    moneda: nuevaMoneda,
    id: id
  }))
}