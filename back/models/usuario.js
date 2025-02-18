var mongoose = require("mongoose");
const { type } = require("os");
var schema = mongoose.schema;

var UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, uniqued: true },
  password: { type: String, required: true },
  rol: { type: String, required: true },
  estado: { type: Boolean, default: true, required: true },
  createAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
