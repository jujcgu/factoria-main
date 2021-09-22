import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//Views
import Feed from "./pages/feed";
import Login from "./components/auth/Login";
import LoginPage from "./pages/login";
import Register from "./components/auth/Register";
import RegisterPage from "./pages/register";
import Nofound from "./components/layout/Nofound";
import NotFound from "./pages/notFound";
import Panel from "./components/panel/Panel";
import Investigaciones from "./components/investigaciones/Investigaciones";
import NuevaPub from "./components/publicaciones/NuevaPub";
import CrudRoles from "./pages/crudRoles";
import Departamentos from "./components/views/departamentos/Departamentos";
import CrearCiudad from "./components/views/ciudad/crearCiudad";
import EditarCiudad from "./components/views/ciudad/editarCiudad";
import GestionCiudad from "./pages/gestionCiudad";

import editDepartamentos from "./components/views/departamentos/editDepartamentos";

import CrearCiudad from "./components/views/ciudades/crearCiudad";
import EditarCiudad from "./components/views/ciudades/editarCiudad";

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
        <Route exact path="/gestion-roles" component={CrudRoles} />
        <Route exact path="/crear-publicacion" component={NuevaPub} />        
        <Route path="/departamentos" exact component={Departamentos} />
        <Route path="/editdepartamentos" exact component={editDepartamentos} />

        <Route exact path="/crear-ciudad" component={CrearCiudad} />
        <Route exact path="/editar-ciudad" component={EditarCiudad} />
        <Route exact path="/gestion-ciudad" component={GestionCiudad} />
        <Redirect to="notFound" />
      </Switch>
    </Router>
  );
}

export default App;