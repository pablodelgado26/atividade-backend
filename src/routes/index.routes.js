import { Router } from "express";

// Lista de importação das rotas do projeto
import desafiosRoutes from "./desafios.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Bora" });
});

// Lista de uso das rotas do projeto
routes.use("/desafios", desafiosRoutes);

export default routes;