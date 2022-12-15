var Task = require("./task-model");

exports.cadastrarTask = (req, res) => {
  let task = new Task({
    prazoLimite: req.body.prazoLimite,
    descricao: req.body.descricao,
    terminada: req.body.terminada,
  });
  task.save(function (err) {
    if (err) {
      res.status(400).send("Erro ao cadastrar tarefa: " + err);
    } else {
      res.send("Sucesso ao cadastrar tarefa!");
    }
  });
};

exports.listarTasks = (req, res) => {
  Task.find({}, function (err, tarefas) {
    if (err) return next(err);
    return res.json(tarefas);
  });
};

exports.buscarTask = (req, res) => {
  Task.findById(req.params.id, function (err, tarefa) {
    if (err) {
      res.status(400).send("Tarefa não encontrada!");
    } else {
      return res.json(tarefa);
    }
  });
};

exports.removerTask = (req, res) => {
  Task.findByIdAndRemove(req.params.id, function (err, tafefas) {
    if (err) {
      res.status(400).send(" não encontrado!");
    } else {
      res.send("Tarefa removido com sucesso!");
    }
  });
};

exports.alterarTask = (req, res) => {
  let tarefa = new Task({
    prazoLimite: req.body.prazoLimite,
    descricao: req.body.descricao,
    terminada: req.body.terminada,
  });
  Task.findByIdAndUpdate(
    req.params.id,
    {
      prazoLimite: tarefa.prazoLimite,
      descricao: tarefa.descricao,
      terminada: tarefa.terminada,
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
