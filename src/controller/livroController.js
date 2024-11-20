import livro from "../models/Livros.js";

class LivroController {
  static async listarLivros(req, res) {
    const livros = await livro.find({});
    res.status(200).json(livros);
  }
}

export default LivroController;
