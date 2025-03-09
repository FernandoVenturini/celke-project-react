// IMPORTANDO O REACT
import React from 'react';

// IMPORTANDO REACT-ROUTER-DOM
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// IMPORTANDO A PAGINA LOGIN
import { Login } from './pages/Login';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
      <h1>Criar o front-end do sistema de login com React</h1>
    </>
  );
}

export default App;
