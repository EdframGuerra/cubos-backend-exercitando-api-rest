// 1º PASSO - IMPORTAR A BIBLIOTECA EXPRES
const express = require('express');
const { senhaAcesso } = require('../intermediarios/intermediarios');

// 5º PASSO  - IMPORTAR OS CONTROLADORES:
const alunos = require('../controladores/alunos')

// 2º PASSO - CRIAR A CONSTANTE ROTAS PARA ESTANCIAR O EXPRESS 
const rotas = express.Router();

// 3º PASSO - USAR O MIDLEWARE (INTERMEDIARIOS) PARA FILTROS  E VALIDAÇÕES DE ROTA 
rotas.use(senhaAcesso);

// 3º PASSO - CRIAR A ROTA ////// 6º PASSO - colocar após a virgula o nome da função criada para rota
rotas.get('/alunos', alunos.listarAlunos);
rotas.get('/alunos/:id', alunos.filtrarAluno);
rotas.post('/alunos', alunos.cadastrarAluno);
rotas.delete('/alunos/:id', alunos.excluirAluno);



// 4º PASSO - EXPORTAR A ROTA 
module.exports = rotas;