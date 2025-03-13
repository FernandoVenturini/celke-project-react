// IMPORTANDO REACT
import React from 'react';

// IMPORTANDO REACT-ROUTER-DOM
import { Router } from "react-router-dom";

import Routes from './routes/routesAdm';

import history from './services/history';

// IMPORTANDO AUTHPROVIDER
import { AuthProvider } from './Context/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
        <Router history={history}>
          <Routes/>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;