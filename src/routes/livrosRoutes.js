import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.post("/livros", LivroController.cadastrarLivro);
routes.get("/livros/busca", LivroController.listarLivroPorFiltro);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.removerLivro);

export default routes;
