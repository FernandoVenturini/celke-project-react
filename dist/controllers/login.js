// Criar a aplicacao Express:
import express from 'express';
// Criar a rota GET principal
const router = express.Router();
// Exportar a instrucao que esta dentro da constante router:
router.get('/', (req, res) => {
    res.send('Bem Vindo ao time Celke!');
});
export default router;
