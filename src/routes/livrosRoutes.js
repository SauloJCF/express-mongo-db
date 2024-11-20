import express from 'express';
import LivroController from '../controller/livroController.js';

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);
routes.post('/livros', LivroController.cadastrarLivro);

export default routes;