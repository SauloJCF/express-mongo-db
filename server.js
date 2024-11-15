import http from 'http';

const PORT = 3000;

const rotas = {
    "/": "Curso de Express.js API",
    "/livros": "Acessou rota de livros",
    "/autores": "Acessou rota de autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})