var User = require("./user-model");

exports.cadastrarUsuario = (req, res) => {
  let user = new User({
    id: req.body.id,
    nome: req.body.nome,
    dataCadastro: req.body.dataCadastro,
    nickname: req.body.nickname,
  });
  user.save(function (err) {
    if (err) {
      res.status(400).send("Erro ao cadastrar Usuario: " + err);
    } else {
      res.send("Sucesso ao cadastrar usuario!");
    }
  });
};

exports.listarUsuarios = (req, res) => {
  User.find({}, function (err, usuarios) {
    if (err) return next(err)
    return res.json(usuarios);
  });
};

exports.buscarUsuario = (req, res) => {
  User.findById(req.params.id, function (err, usuario) {
    if (err) {
      res.status(400).send("Usuario não encontrado!");
    } else {
      return res.json(usuario);
    }
  });
};

exports.removerUsuario = (req, res) => {
  User.findByIdAndRemove(req.params.id, function (err, usuarios) {
    if (err) {
      res.status(400).send(" não encontrado!");
    } else {
      res.send("Usuario removido com sucesso!");
    }
  });
};
