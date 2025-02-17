var mongoose = require("mongoose");
var schema = mongoose.schema;

var UsuarioSchema = schema({
  nombre: { type: string, required: true },
  apellido: { type: string, required: true },
  email: { type: string, required: true, uniqued: true },
  password: { type: string, required: true },
  rol: { type: string, required: true },
});

module.exports = mongoose.model("usuario", UsuarioSchema);
