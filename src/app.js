import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middleware/manipuladorDeErros.js";
import manipulador404 from "./middleware/manipulador404.js";

const conexao = await connectDB();

conexao.on("error", (error) => {
  console.error("Erro ao conectar com banco de dados:", error);
});

conexao.on("open", () => {
  console.log("Conexão com banco de dados realizada com sucesso.");
});

const app = express();

routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);

export default app;
