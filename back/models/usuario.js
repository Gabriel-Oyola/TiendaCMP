var mongoose = require("mongoose");
var schema = mongoose.schema;

var UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, uniqued: true },
  password: { type: String, required: true },
  rol: { type: String, required: true },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
