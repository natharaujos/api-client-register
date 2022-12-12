//https://trabalho-pratico-2.herokuapp.com/

const exp = require("constants");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
const tarefa_controller = require("./tarefas-controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://usuariopadrao:qeZbLs9A5k4cQEEM@cluster0.idtey0n.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.Promise = global.Promise;
try {
  let mongodb = mongoose.connection;
  mongodb.on(
    "errr",
    console.error.bind(console, "Erro ao conectar com o MongoDB")
  );
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("Serviço em Execução! 🚀");
});

router.post("/cadastrar", tarefa_controller.cadastrarTarefa);
router.get("/listar", tarefa_controller.listarTarefas);
router.get("/buscar/:id", tarefa_controller.buscarTarefa);
router.delete("/removeTarefa/:id", tarefa_controller.removerTarefa);
router.put("/alteraTarefa/:id", tarefa_controller.alterarTarefa);
app.use("/", router);

let porta = process.env.PORT || 5555;

app.listen(porta, () => {
  console.log("Serviço em execução 🚀 Porta: " + porta);
});
