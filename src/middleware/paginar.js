import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

async function paginar(req, res, next) {
  try {
    let { limite = 5, pagina = 1, ordenacao = "_id:-1" } = req.query;

    let [campoOrdenacao, ordem] = ordenacao.split(":");

    limite = parseInt(limite);
    pagina = parseInt(pagina);

    if (limite <= 0 || pagina <= 0) {
      next(new RequisicaoIncorreta());
    } else {
      const resultadoPesquisa = req.resultado;
      const resultadoPaginado = await resultadoPesquisa
        .sort({ [campoOrdenacao]: ordem })
        .skip((pagina - 1) * limite)
        .limit(limite)
        .exec();
      res.status(200).json(resultadoPaginado);
    }
  } catch (erro) {
    next(erro);
  }
}

export default paginar;
