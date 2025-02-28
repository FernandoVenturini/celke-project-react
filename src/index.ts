// IMPORTA A BIBLIOTECA EXPRESS:
import express from 'express';

// CRIA A APLICACAO EXPRESS:
const app = express(); 

// INCLUI(importa o login) OS CONTROLLERS:
import login from './controllers/login';

// CRIAR AS ROTAS:
app.use('/', login);


// INICIA O SERVIDOR:
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
                         