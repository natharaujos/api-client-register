const express = require("express");
const mongoose = require("mongoose");

const tarefas_controller = require("./tarefas-controller");

mongoose.connect(
  "mongodb+srv://usuariopadrao:4KH5pFdL9W7IPoW8@cluster0.ionhwbm.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.Promise = global.Promise;
try {
  let db = mongoose.connection;
  db.on("errr", console.error.bind(console, "erro de conexão com o banco"));
} catch (error) {
  console.log(error);
}

const router = express.Router();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Aplicação rodando!");
});

router.post('/tarefas', tarefas_controller.cadastrarTarefa);
router.get('/tarefas', tarefas_controller.listarTarefas);
router.get('/tarefas/:id', tarefas_controller.buscarTarefa);
router.delete('/tarefas/:id', tarefas_controller.removerTarefa);
router.put('/tarefas/:id', tarefas_controller.alterarTarefa);
app.use('/', router);

let porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log("servidor em execução na porta " + porta);
});