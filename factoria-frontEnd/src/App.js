/* import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Feed from './pages/feed';
import Login from './components/auth/Login';
import LoginPage from './pages/login';
import Register from './components/auth/Register';
import RegisterPage from './pages/register';
import Nofound from './components/layout/Nofound';
import NotFound from './pages/notFound';
import Panel from './components/panel/Panel';
import Investigaciones from './components/investigaciones/Investigaciones';
import NuevaPub from './components/publicaciones/NuevaPub';
import Cruds from './pages/crud';
import CrudRoles from './pages/crudRoles';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Feed}/>
        <Route exact path="/notFound" component={NotFound}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>      
        <Route exact path="/panel" component={Panel}/>
        <Route exact path="/investigaciones" component={Investigaciones}/>
        <Route exact path="/crear-publicacion" component={NuevaPub}/>
        <Route exact path="/crud" component={Cruds}/>
        <Route exact path="/crudRoles" component={CrudRoles}/>
        <Redirect to="notFound"/>
      </Switch>
    </Router>
  );
}

export default App;
 */