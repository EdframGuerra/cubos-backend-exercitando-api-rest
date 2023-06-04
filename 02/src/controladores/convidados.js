let { convidados } = require('../bancoDeDados/dados');

const listarConvidados = (req, res) => {
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
        return nome === convidado;
    });

    if (convidadoEncontrado < 0) {
        return res.status(404).json({ mensagem: 'Convidado não encontrado.' })
    }
    convidados.splice(convidadoEncontrado, 1);
    return res.status(204).json(convidados);
}

module.exports = {
    listarConvidados,
    adicionarConvidado,
    removerConvidado
};