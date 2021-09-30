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

//Roles
import Roles from "./components/views/roles/roles";

//Ciudad
import GestionCiudad from "./components/views/ciudad/gestionCiudad";
import GestionCiudadTable from "./components/views/ciudad/gestionCiudadTable";
import CrearCiudad from './components/views/ciudad/crearCiudad';
import EditarCiudad from './components/views/ciudad/editarCiudad';

//Departamentos
import Departamentos from "./components/views/departamentos/Departamentos";

///PAISES
import Pais from "./components/views/pais/pais";

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

        { /*ROLES*/ }
        <Route exact path="/roles" component={Roles} />        
        { /*ROLES*/ }

        {/* CIUDAD */}
        <Route exact path="/gestion-ciudad" component={GestionCiudad} />
        <Route exact path="/gestion-ciudad-table" component={GestionCiudadTable} />
        <Route exact path="/crear-ciudad" component={CrearCiudad} />
        <Route exact path="/editar-ciudad" component={EditarCiudad} />
        {/* CIUDAD */}

        {/* DEPARTAMENTOS */}
        <Route path="/departamentos" exact component={Departamentos} />
        {/* DEPARTAMENTOS */}

        {/* PAISES */}
        <Route exact path="/paises" component={Pais} />
        {/* PAISES */}
        
        <Redirect to="notFound" />
      </Switch>
    </Router>
  );
}

export default App;
