const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  id: { type: String, required: true },
  nome: { type: String, required: true },
  dataCadastro: { type: String, required: true },
  nickname: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
