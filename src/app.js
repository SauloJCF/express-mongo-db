import express from 'express';
import connectDB from './config/dbConnect.js';
import livro from './models/Livros.js';

const conexao = await connectDB();

conexao.on('error', (error) => {
    console.error('Erro ao conectar com banco de dados:', error);
});

conexao.on('open', () => {
    console.log('Conexão com banco de dados realizada com sucesso.'); 
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Curso de Express API');
});

app.get('/livros', async (req, res) => {
    const livros = await livro.find({});
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso!');
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
});

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