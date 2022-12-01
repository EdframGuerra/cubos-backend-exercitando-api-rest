// 1º PASSO - IMPORTAR BANCO DE DADOS 
let convidados = require('../bancoDeDados/dados');
const bancoDeDados = require('../bancoDeDados/dados');

//2º PASSO  - CRIAR A FUNÇAO QUE SERÁ EXECULTADA NA ROTA E APÓS O PASSO 6, IMPLEMENTAR O CÓDIGO DE EXECUÇÃO em rotas

const listarConvidados = (req, res) => {
    const convidados = bancoDeDados.convidados;
    const { nome } = req.query;

    if (nome) {
        let resultado = convidados.includes(nome);

        if (!resultado) {
            return res.status(404).json({ "mensagem": "O convidado buscado não está presente na lista" });
        }

        return res.status(200).json({ "mensagem": "Convidado presente." });



    }
    return res.status(200).json(convidados);

}

const adicionarConvidado = (req, res) => {
    const convidados = bancoDeDados.convidados;
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ "mensagem": "Nome obrigatório" })
    }


    let resultado = convidados.includes(nome);

    if (!resultado) {
        convidados.push(nome);
        return res.status(404).json({ "mensagem": "Convidado adicionado." });
    }

    return res.status(200).json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });

}

const removerConvidado = (req, res) => {
    const { nome } = req.params;
    const convidadoEncontrado = convidados.findIndex((convidado) => {
        return convidado === nome;
    });


    if (convidadoEncontrado < 0) {
        return res.status(404).json({ mensagem: 'Conviado não encontrado.' })
    }
    convidados.splice(alunoEncontrado, 1);
    return res.status(200).json(convidados);
}




// 3º PASSO - EXPORTAR A FUNÇÃO/CONTROLADOR
module.exports = {
    listarConvidados,
    adicionarConvidado,
    removerConvidado
};


