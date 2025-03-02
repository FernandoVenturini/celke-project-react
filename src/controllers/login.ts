// Criar a aplicacao Express:
import express, {Request, Response} from 'express';

// Criar a rota GET principal
const router = express.Router();

// Exportar a instrucao que esta dentro da constante router:
router.get('/', (req:Request, res:Response) => {
    res.send('Bem Vindo ao time Celke! Seja Bem-vindo(a)!!!');
})

export default router;