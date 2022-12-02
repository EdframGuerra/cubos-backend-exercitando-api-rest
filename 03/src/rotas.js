// 1º PASSO - IMPORTAR A BIBLIOTECA EXPRESS:
const express = require('espress');


// 5º PASSO  - IMPORTAR OS CONTROLADORES:
const biblioteca = require('./controladores/biblioteca');

// 2º PASSO - CRIAR A CONSTANTE ROTAS PARA ESTANCIAR O EXPRESS:
const rotas = express.Router();

// 3º PASSO - USAR O MIDLEWARE (INTERMEDIARIOS) PARA FILTROS  E VALIDAÇÕES DE ROTA
rotas.use(rotas);

// 4º PASSO - CRIAR A ROTA ////// 6º PASSO - colocar após a virgula o nome da função criada para rota:
rotas.get('/livros', biblioteca.listarLivros); // listar livros;


// 5º PASSO - EXPORTAR A ROTA:
module.exports = rotas;