const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TarefasSchema = new Schema({
  //identificador: { type: String, required: true },
  descricao: { type: String, required: true },
  prazo: { type: Date, required: true },
  completa: { type: Boolean, required: true },
});

module.exports = mongoose.model("Tarefas", TarefasSchema);
