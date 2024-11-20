import livro from "../models/Livros.js";

class LivroController {
  static async listarLivros(req, res) {
    const livros = await livro.find({});
    res.status(200).json(livros);
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
}

export default LivroController;
