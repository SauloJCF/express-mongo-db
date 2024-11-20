import livro from "../models/Livros.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const livros = await livro.find({});
      res.status(200).json(livros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao processar requisição` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = String(req.params.id);
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha ao processar requisição do livro`,
      });
    }
  }

  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = String(req.params.id);
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha ao processar atualização do livro`,
      });
    }
  }
}

export default LivroController;
