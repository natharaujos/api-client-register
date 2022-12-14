//https://trabalho-pratico-2.herokuapp.com/

const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const app = express();
dotenv.config();
mongoose.set('strictQuery', false);
const router = express.Router();
const user_controller = require("./user-controller");

mongoose.connect(
  "mongodb://natharaujos:mongoloidedb@ac-ndxkrwk-shard-00-00.s2ikgze.mongodb.net:27017,ac-ndxkrwk-shard-00-01.s2ikgze.mongodb.net:27017,ac-ndxkrwk-shard-00-02.s2ikgze.mongodb.net:27017/?ssl=true&replicaSet=atlas-wetth8-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

router.post("/cadastrar", user_controller.cadastrarUsuario);
router.get("/listar", user_controller.listarUsuarios);
router.get("/buscar/:id", user_controller.buscarUsuario);
router.delete("/removeUser/:id", user_controller.removerUsuario);
app.use("/", router);

let porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log("Serviço em execução 🚀 Porta: " + porta);
});
