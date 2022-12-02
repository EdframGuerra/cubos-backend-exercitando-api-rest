// 1º PASSO - IMPORTAR BANCO DE DADOS 
let { livros } = require('../bancoDeDados/dados')

//2º PASSO  - CRIAR A FUNÇAO QUE SERÁ EXECULTADA NA ROTA E APÓS O PASSO 6, IMPLEMENTAR O CÓDIGO DE EXECUÇÃO em rotas
const listarLivros = (req, res) => {
    return res.status(200).json(livros);
};




// 3º PASSO - EXPORTAR A FUNÇÃO/CONTROLADOR
module.exports = {
    listarLivros
};