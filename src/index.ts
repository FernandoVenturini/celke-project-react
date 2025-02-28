// Importando a biblioteca Express:
import express, {Request, Response} from 'express';

// Criando aplicacao Express:
const app = express();

// Definindo rota raiz: Criando a rota GET
app.get('/', (req:Request, res:Response) => {
    res.send('Bem vindo, Celke!');
})

// Iniciando o servidor:
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
                         