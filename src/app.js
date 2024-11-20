import express from 'express';
import connectDB from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await connectDB();

conexao.on('error', (error) => {
    console.error('Erro ao conectar com banco de dados:', error);
});

conexao.on('open', () => {
    console.log('Conexão com banco de dados realizada com sucesso.'); 
});

const app = express();

routes(app);

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);

    if (index < 0) {
        res.status(404).send('Livro não encontrado!');
    }

    livros.splice(index, 1);
    res.status(200).send('Livro removido com sucesso!');
});

function buscaLivro(id) {
    return (
        livros.findIndex((livro) => livro.id === Number(id))
    );
}

export default app;