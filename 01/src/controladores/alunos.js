let { alunos, identificadorAula } = require('../BancoDeDados/dados');
const bancoDeDados = require('../BancoDeDados/dados');

const listarAlunos = (req, res) => {
    const alunos = bancoDeDados.alunos
    return res.status(200).json(alunos);
}

const filtrarAluno = (req, res) => {
    const { id } = req.params;
    const alunoEncontrado = bancoDeDados.alunos.find((aluno) => {
        return aluno.id === Number(id);
    });


    if (!alunoEncontrado) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado.' });
    }
    return res.status(200).json(alunoEncontrado);
}

const cadastrarAluno = (req, res) => {

    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome || !nome.trim()) {
        return res.status(400).json({ mensagem: 'O nome é obrigatorio.' });
    }
    if (!sobrenome || !sobrenome.trim()) {
        return res.status(400).json({ mensagem: 'O sobrenome é obrigatorio.' });
    }
    if (!idade || idade < 18) {
        return res.status(400).json({ mensagem: 'A idade é obrigatório' });
    }
    if (!curso || !curso.trim()) {
        return res.status(400).json({ mensagem: 'O curso é obrigatório' });
    }

    const aluno = {
        id: identificadorAula++,
        nome,
        sobrenome,
        curso,
        idade
    }
    bancoDeDados.alunos.push(aluno)

    return res.status(201).json(bancoDeDados.alunos);
}

const excluirAluno = (req, res) => {
    const { id } = req.params;
    const alunoEncontrado = bancoDeDados.alunos.findIndex((aluno) => {
        return aluno.id === Number(id);
    });


    if (alunoEncontrado < 0) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado.' })
    }
    bancoDeDados.alunos.splice(alunoEncontrado, 1);
    return res.status(200).json(bancoDeDados.alunos);
}

module.exports = {
    listarAlunos,
    filtrarAluno,
    cadastrarAluno,
    excluirAluno
}
