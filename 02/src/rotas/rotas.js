// 1º PASSO - IMPORTAR A BIBLIOTECA EXPRESS:
const express = require('express');

// 5º PASSO  - IMPORTAR OS CONTROLADORES:
const convidados = require('../controladores/convidados');

// 2º PASSO - CRIAR A CONSTANTE ROTAS PARA ESTANCIAR O EXPRESS:
const rotas = express.Router();

// 3º PASSO - USAR O MIDLEWARE (INTERMEDIARIOS) PARA FILTROS  E VALIDAÇÕES DE ROTA 


// 4º PASSO - CRIAR A ROTA ////// 6º PASSO - colocar após a virgula o nome da função criada para rota:
rotas.get('/convidados', convidados.listarConvidados);//listar convidados/verificar nome na lista
rotas.post('/convidados', convidados.adicionarConvidado); //adicionar um nome na lista de convidados;
rotas.delete('/convidados/:nome', convidados.removerConvidado);//excluir um convidado da lista

// 4º PASSO - EXPORTAR A ROTA:
module.exports = rotas;
