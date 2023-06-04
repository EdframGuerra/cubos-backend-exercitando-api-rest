// 1º PASSO - IMPORTAR A BIBLIOTECA EXPRESS:
const express = require('express');


// 5º PASSO  - IMPORTAR OS CONTROLADORES:
const biblioteca = require('../controladores/biblioteca');

// 2º PASSO - CRIAR A CONSTANTE ROTAS PARA ESTANCIAR O EXPRESS:
const rotas = express.Router();

// 3º PASSO - USAR O MIDLEWARE (INTERMEDIARIOS) PARA FILTROS  E VALIDAÇÕES DE ROTA


// 4º PASSO - CRIAR A ROTA ////// 6º PASSO - colocar após a virgula o nome da função criada para rota:
rotas.get('/livros', biblioteca.listarLivros); // listar livros;
rotas.get('/livros/:id', biblioteca.listarUmLivro);// listar um livro especifico;
rotas.post('/livros', biblioteca.cadastrarLivro) // cadastrar um livro na coleção;
rotas.put('/livros/:id', biblioteca.atualizarListalivros);//substituir livro

// 5º PASSO - EXPORTAR A ROTA:
module.exports = rotas;