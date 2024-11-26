import ErroNaoEncontrado from "../erros/ErroNaoEncontrado.js";
import { autor } from "../models/Autor.js";

const mensagemIDAutorNaoEncontrado = "ID do(a) autor(a) não encontrado.";
class AutorController {
  static async listarAutores(req, res, next) {
    try {
      const autores = await autor.find({});
      res.status(200).json(autores);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      if (autorEncontrado) {
        res.status(200).json(autorEncontrado);
      } else {
        next(new ErroNaoEncontrado(mensagemIDAutorNaoEncontrado));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = String(req.params.id);
      if (await autor.findByIdAndUpdate(id, req.body)) {
        res.status(200).json({ message: "autor atualizado" });
      } else {
        next(new ErroNaoEncontrado(mensagemIDAutorNaoEncontrado));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async removerAutor(req, res, next) {
    try {
      const id = String(req.params.id);
      if (await autor.findByIdAndDelete(id)) {
        res.status(200).json({ message: "autor excluído" });
      } else {
        next(new ErroNaoEncontrado(mensagemIDAutorNaoEncontrado));
      }
    } catch (erro) {
      next(erro);
    }
  }
}

export default AutorController;
