const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
  prazoLimite: { type: Date, required: true },
  descricao: { type: String, required: true },
  terminada: { type: Boolean, required: true },
});

module.exports = mongoose.model("Task", TaskSchema);
