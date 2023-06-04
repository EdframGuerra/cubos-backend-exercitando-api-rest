const express = require('express');
const { senhaAcesso } = require('../intermediarios/intermediarios');

const alunos = require('../controladores/alunos')

const rotas = express.Router();

rotas.use(senhaAcesso);

rotas.get('/alunos', alunos.listarAlunos);
rotas.get('/alunos/:id', alunos.filtrarAluno);
rotas.post('/alunos', alunos.cadastrarAluno);
rotas.delete('/alunos/:id', alunos.excluirAluno);

module.exports = rotas;