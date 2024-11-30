# Curso de Express com MongoDB - Alura

Este projeto foi desenvolvido durante o curso: ["Node.js: criando uma API Rest com Express e MongoDB"](https://cursos.alura.com.br/course/node-js-api-rest-express-mongodb), que tem como objetivo aprender de forma prática como criar uma simples API REST utilizando Express e o banco de dados MongoDB.

## 💥 Funcionalidades

Trata-se de um projeto que busca representar o domínio de um sistema de livrari, onde o usuário pode cadastrar Livros e Autores.

O projeto é composto de API desenvolvida com Express, que utiliza o MongoDB para persistir os dados.

O Banco foi hospedado de forma gratuita na plataforma [Mongo Atlas](https://www.mongodb.com/pt-br).

## 🛠️ Tecnologias

As seguintes tecnologias foram utilizadas na construção do projeto:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): linguagem de programação simples e poderosa.
- [Node.js](https://nodejs.org/pt): ambiente de execução de JavaScript disponível para várias plataformas, e que permite criação de servidores, aplicações da Web, ferramentas de linha de comando e programas de automação de tarefas.
- [NPM](https://www.npmjs.com/): gerenciador de pacotes para Node.js.
- [Express](https://expressjs.com/pt-br/): framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móveis.
- [Nodemoon](https://nodemon.io/): um utilitário que monitora qualquer alteração no código fonte do projeto e reinicia automaticamente o servidor.
- [DotEnv](https://www.npmjs.com/package/dotenv): módulo que carrega variáveis de ambiente de um arquivo `.env` dentro de `process.env`, separando configurações do código fonte do projeto.
- [MongoDB](https://www.mongodb.com/pt-br): banco de dados NoSQL, multiplataforma, orientado a documentos.
- [Mongoose](https://mongoosejs.com/): ferramenta de modelagem para bancos de dados MongoDB utilizando Node.js.
- [MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/register): plataforma que permite a hospedagem e gerenciamento de bancos de dados MongoDB na nuvem.
- [Postman](https://www.postman.com/): ferramenta para desenvolvimento e teste de API's.
- Padrão REST: estilo arquitetural para a construção de sistemas distribuídos, especialmente para aplicações web
- [Visua Studio Code](https://code.visualstudio.com/): editor de código refinado e otimizado para criação de aplicações.

## ⚙️ Configurando o projeto

1. Clone o Projeto;
2. Instale as dependências através do comando `npm isntall`;
3. Inicie o servidor através do comando `npm run dev`.
4. Será iniciado um servidor local, que pode ser acessado no endereço [http://localhost:3000](http://localhost:3000);

## ➡️ Rotas

Até o presete momento, a API dispõe das seguintes rotas:

- GET `/livros`: listar todos os livros cadastrados.
- GET `/livros:id`: buscar um livro por ID.
- GET `/livros/busca?editora=x`: buscar um livro pelo nome da editora.
- POST `/livros`: cadastrar um livro.
- DELETE `/livros/:id`: excluir um livro.
- PUT `/livros/:id`: editar um livro.
- GET `/autores`: listar todos os autores cadastrados.
- GET `/autores:id`: buscar um autor por ID.
- POST `/autores`: cadastrar um autor.
- DELETE `/autores/:id`: excluir um autor.
- PUT `/autores/:id`: editar um autor.

## Principais Temas Abordados

- Criação de uma API do zero, seguindo o estilo arquitetural REST.
- Funcionamento das requisições HTTP.
- Utilização da ferramenta Express para criação de aplicações robustas e escaláveis.
- Bancos de dados MongoDB e biblioteca Mongoose, em conjunto com o Node.js.
- Tratamento de erros de forma centralizada e organlizada.
- Middlewares do Express.
- Validações através do Mongoose.
- Buscas e filtros com MongoDB.
- Implementar paginação de maneira centralizada.
