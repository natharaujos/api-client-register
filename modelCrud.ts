
const mongo = require("mongo");
const Schema = mongo.Schema;

const cliente: DadosCliente = new Schema({
  documento: { type: String, required: true },
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
});

module.exports = mongo.model("Cadastro de Clientes", cliente);