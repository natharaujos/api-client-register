//https://trabalho-pratico-2.herokuapp.com/

const exp = require("constants");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
const user_controller = require("./user-controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://natharaujos:mongoloidedb@cluster0.s2ikgze.mongodb.net/?retryWrites=true&w=majority",
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

router.post("/cadastrar", user_controller.cadastrarUsuario);
router.get("/listar", user_controller.listarUsuarios);
router.get("/buscar/:id", user_controller.buscarUsuario);
router.delete("/removeUser/:id", user_controller.removerUsuario);
router.put("/alteraUser/:id", user_controller.alterarUsuario);
app.use("/", router);

let porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log("Serviço em execução 🚀 Porta: " + porta);
});
