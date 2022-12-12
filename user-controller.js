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
  Usuarios.find({}, function (err, usuarios) {
    if (err) {
      return res.status(500).send("Erro ao listar Usuarios!");
    } else if (usuarios.length == 0) {
      return res.status(204).send("Nenhuma tarefa cadastrada.");
    } else {
      return res.json(usuarios);
    }
  });
};

exports.buscarUsuario = (req, res) => {
  Usuarios.findById(req.params.id, function (err, usuario) {
    if (err) {
      res.status(400).send("Usuario não encontrado!");
    } else {
      return res.json(usuario);
    }
  });
};

exports.removerUsuario = (req, res) => {
  Usuarios.findByIdAndRemove(req.params.id, function (err, usuarios) {
    if (err) {
      res.status(400).send(" não encontrado!");
    } else {
      res.send("Usuario removido com sucesso!");
    }
  });
};

exports.alterarUsuario = (req, res) => {
  let usuario = new Usuarios({
    id: req.body.id,
    nome: req.body.nome,
    dataCadastro: req.body.dataCadastro,
    nickname: req.body.nickname,
  });
  Usuarios.findByIdAndUpdate(
    req.params.id,
    {
      nome: usuario.nome,
      dataCadastro: usuario.dataCadastro,
      nickname: usuario.nickname,
    },
    function (err) {
      if (err) {
        res.status(400).send("Tarefa não encontrada.");
      } else {
        res.send("Tarefa atualizada com sucesso!");
      }
    }
  );
};
