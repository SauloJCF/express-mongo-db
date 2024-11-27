import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, "O título é obrigatório"] },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum: {
        values: ["Casa do Código", "Alura", "Milenar"],
        message: "Editora '{VALUE}' não é um valor válido.",
      },
    },
    preco: { type: Number },
    paginas: {
      type: Number,
      validate: {
        validator: function (value) {
          return value >= 10 && value <= 5000;
        },
        message:
          "O número de páginas deve estar entre 10 e 5000. Valor informado: {VALUE}.",
      },
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"],
    },
  },
  { versionKey: false }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
