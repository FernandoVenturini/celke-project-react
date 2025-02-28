// Importando a biblioteca Express:
import express, { Request, Response } from "express";

// Criando aplicacao Express:
const router = express.Router();

// Definindo rota raiz: Criando a rota GET
router.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo, Celke!");
});

export default router;
