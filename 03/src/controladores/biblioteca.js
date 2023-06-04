let { livros, idLivro } = require('../bancoDeDados/dados');

const listarLivros = (req, res) => {
    return res.status(200).json(livros);
};

const listarUmLivro = (req, res) => {
    const { id } = req.params;
    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id);
    })

    if (!livroEncontrado) {
        return res.status(200).json({ "mensagem": "Não existe livro para o ID informado" });
    }
    
    if (Number.isNaN(id)) {
        return res.status(200).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." });
    }
    return res.status(200).json(livroEncontrado);
}

const cadastrarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    const livro = {
        id: idLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }
    livros.push(livro)
    return res.status(203).json(livro);
}

const atualizarListalivros = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id);
    })

    if (!livroEncontrado) {
        return res.status(200).json({ "mensagem": "Não existe livro a ser substituído para o ID informado." });
    }

    livroEncontrado.titulo = titulo;
    livroEncontrado.autor = autor;
    livroEncontrado.ano = ano;
    livroEncontrado.numPaginas = numPaginas;

    return res.status(200).json({ "mensagem": "Livro substituído." })
}

module.exports = {
    listarLivros,
    listarUmLivro,
    cadastrarLivro,
    atualizarListalivros
};