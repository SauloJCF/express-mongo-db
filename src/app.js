import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Curso de Express API');
});

export default app;