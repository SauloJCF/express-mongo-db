import express from "express";
import LivroController from "../controllers/livroController.js";
import paginar from "../middleware/paginar.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros, paginar);
routes.post("/livros", LivroController.cadastrarLivro);
routes.get("/livros/busca", LivroController.listarLivroPorFiltro, paginar);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.removerLivro);

export default routes;
