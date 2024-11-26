import ErroNaoEncontrado from "../erros/ErroNaoEncontrado.js";

function manipulador404(req, res, next) {
  next(new ErroNaoEncontrado());
}

export default manipulador404;
