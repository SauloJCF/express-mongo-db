import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  console.log(erro);

  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).json({
      message: "Um ou mais dados informados estão incorretos.",
    });
    return;
  }

  res.status(500).json({
    message: "Erro interno de servidor.",
  });
}

export default manipuladorDeErros;
