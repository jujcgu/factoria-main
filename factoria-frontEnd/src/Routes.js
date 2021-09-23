import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//Views
import Feed from "./pages/feed";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import NotFound from "./pages/notFound";
import Panel from "./components/panel/Panel";
import Investigaciones from "./components/investigaciones/Investigaciones";
import NuevaPub from "./components/publicaciones/NuevaPub";
import Cruds from "./pages/crud";
import CrudRoles from "./pages/crudRoles";
import Departamentos from "./components/views/departamentos/Departamentos";
import CrearCiudad from "./components/views/ciudades/crearCiudad";
import EditarCiudad from "./components/views/ciudades/editarCiudad";

// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import Nofound from "./components/layout/Nofound";
//PAISES
import Pais from "./components/views/pais/pais";
import AñadirPais from "./components/views/pais/añadirPais";
import EditarPais from "./components/views/pais/editarPais";
///PAISES

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/notFound" component={NotFound} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/panel" component={Panel} />
        <Route exact path="/investigaciones" component={Investigaciones} />
        <Route exact path="/crear-publicacion" component={NuevaPub} />
        <Route exact path="/crud" component={Cruds} />
        <Route exact path="/crudRoles" component={CrudRoles} />
        <Route path="/departamentos" exact component={Departamentos} />
        <Route exact path="/crear-ciudad" component={CrearCiudad} />
        <Route exact path="/editar-ciudad" component={EditarCiudad} />
        {/* PAISES */}
        <Route exact path="/paises" component={Pais} />
        <Route exact path="/crear-pais" component={AñadirPais} />
        <Route exact path="/editar-pais" component={EditarPais} />
        {/* PAISES */}
        <Redirect to="notFound" />
      </Switch>
    </Router>
  );
}

export default App;
