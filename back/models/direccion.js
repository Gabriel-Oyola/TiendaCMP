var mongoose = require("mongoose");

var schema = mongoose.Schema;

var DireccionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  documento: { type: String, required: true },
  celular: { type: String, required: true },
  pais: { type: String, required: true },
  ciudad: { type: String, required: true },
  cp: { type: String, required: true },
  direccion: { type: String, required: true },
  cliente: { type: schema.ObjectId, ref: "cliente", required: true },
  createAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("direccion", DireccionSchema);
