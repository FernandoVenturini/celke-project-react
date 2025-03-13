// IMPORTANDO REACT
import React from 'react';

// IMPORTANDO REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORTANDO LOGIN
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <h1>Bem vindo Celke!</h1>
        </Switch>
      </Router>
    </>
  );
}

export default App;