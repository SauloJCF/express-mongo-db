import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const autores = await autor.find({});
      res.status(200).json(autores);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao processar requisição` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = String(req.params.id);
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha ao processar requisição do autor`,
      });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = String(req.params.id);
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "autor atualizado" });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha ao processar atualização do autor`,
      });
    }
  }

  static async removerAutor(req, res) {
    try {
      const id = String(req.params.id);
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "autor excluído" });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha ao processar exclusão do autor`,
      });
    }
  }
}

export default AutorController;
