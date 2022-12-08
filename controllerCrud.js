var Tarefas = require("./tarefa-model");

exports.listarTarefas = (req, res) => {
  Tarefas.find({}, function (err, tarefas) {
    if (err) {
      return res
        .status(500)
        .send("Erro no servidor, tente novamente mais tarde.");
    } else if (tarefas.length == 0) {
      return res.status(204).send("Nenhuma tarefa cadastrada.");
    } else {
      return res.json(tarefas);
    }
  });
};

exports.buscarTarefa = (req, res) => {
  Tarefas.findById(req.params.id, function (err, tarefa) {
    if (err) {
      res.status(400).send("Identificador não encontrado.");
    } else {
      return res.json(tarefa);
    }
  });
};

exports.cadastrarTarefa = (req, res) => {
  let tarefa = new Tarefas({
    descricao: req.body.descricao,
    prazo: req.body.prazo,
    completa: req.body.completa,
  });
  tarefa.save(function (err) {
    if (err) {
      res.status(400).send("Todos os dados devem ser passados.");
    } else {
      res.send("Tarefa cadastrada com sucesso!");
    }
  });
};

exports.removerTarefa = (req, res) => {
  Tarefas.findByIdAndRemove(req.params.id, function (err, tarefa) {
    if (err) {
      res.status(400).send("Identificador não encontrado.");
    } else {
      res.send("Tarefa removida com sucesso!");
    }
  });
};

exports.alterarTarefa = (req, res) => {
  let tarefa = new Tarefas({
    descricao: req.body.descricao,
    prazo: req.body.prazo,
    completa: req.body.completa,
  });
  Tarefas.findByIdAndUpdate(
    req.params.id,
    {
      descricao: tarefa.descricao,
      prazo: tarefa.prazo,
      completa: tarefa.completa,
    },
    function (err, docs) {
      if (err) {
        res.status(400).send("Identificador não encontrado.");
      } else {
        res.send("Tarefa atualizada com sucesso!");
      }
    }
  );
};