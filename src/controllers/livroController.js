import ErroNaoEncontrado from "../erros/ErroNaoEncontrado.js";
import { livro } from "../models/Index.js";

const mensagemIDLivroNaoEncontrado = "ID do livro não encontrado.";
class LivroController {
  static async listarLivros(req, res, next) {
    try {
      const livros = await livro.find({}).populate("autor").exec();
      res.status(200).json(livros);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const id = String(req.params.id);
      const livroEncontrado = await livro.findById(id).populate("autor").exec();
      if (livroEncontrado) {
        res.status(200).json(livroEncontrado);
      } else {
        next(new ErroNaoEncontrado(mensagemIDLivroNaoEncontrado));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarLivro(req, res, next) {
    try {
      const novoLivro = req.body;
      const livroCriado = await livro.create(novoLivro);
      res
        .status(201)
        .json({ message: "criado com sucesso", livro: livroCriado });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = String(req.params.id);
      if (await livro.findByIdAndUpdate(id, req.body)) {
        res.status(200).json({ message: "livro atualizado" });
      } else {
        next(new ErroNaoEncontrado(mensagemIDLivroNaoEncontrado));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async removerLivro(req, res, next) {
    try {
      const id = String(req.params.id);

      if (await livro.findByIdAndDelete(id)) {
        res.status(200).json({ message: "livro excluído" });
      } else {
        next(new ErroNaoEncontrado(mensagemIDLivroNaoEncontrado));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivroPorFiltro(req, res, next) {
    try {
      const { editora, titulo } = req.query;

      const busca = {};

      if (editora) busca.editora = editora;

      if (titulo) busca.titulo = titulo;

      const livrosEncontrados = await livro
        .find(busca)
        .populate("autor")
        .exec();

      res.status(200).json(livrosEncontrados);
    } catch (erro) {
      next(erro);
    }
  }
}

export default LivroController;
