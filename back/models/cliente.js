var mongoose = require("mongoose");

var schema = mongoose.schema;

var ClienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: false },
  email: { type: String, required: true, uniqued: true },
  password: { type: String, required: true },
  estado: { type: Boolean, default: true, required: false },
  createAT: { type: Date, default: Date.now },

  pais: { type: String, required: false },
  genero: { type: String, required: false },
  recovery: { type: String, required: false },
});

module.exports = mongoose.model("Cliente", ClienteSchema);
