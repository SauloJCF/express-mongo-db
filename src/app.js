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

export default app;