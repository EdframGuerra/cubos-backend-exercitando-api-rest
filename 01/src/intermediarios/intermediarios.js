const senhaAcesso = (req, res, next) => {
    const { senha } = req.query;
    if (!senha) {
        return res.status(401).json({
            mensagem: 'Senha não informada, acesso negado'
        })
    }
    if (senha !== "cubos123") {
        return res.status(403).json({ mensagem: 'Senha incorreta, acesso negado' });// verificar codigo correto
    }
    next();
}

module.exports = { senhaAcesso };