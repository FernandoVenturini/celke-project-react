// Importando a biblioteca Express:
import express from 'express';
// Criando aplicacao Express:
const app = express();
// Incluir os Controllers
import login from './controllers/login';
// Criar as rotas
app.use('/', login);
// Iniciando o servidor:
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
