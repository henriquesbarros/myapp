const usuariosController = {
    index: (req, res) => {
        return res.send("Estou exibindo essa mensagem através do controller!")
    }
}

module.exports = usuariosController;