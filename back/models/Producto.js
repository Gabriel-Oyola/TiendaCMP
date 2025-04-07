var mongoose = require("mongoose");
const { type } = require("os");
var schema = mongoose.schema;

var productoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  slug: { type: String, required: true },
  categoria: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String, required: true },
  portada: { type: String, required: true },
  estado: { type: Boolean, required: true },
  descuento: { type: Boolean, required: true },
  updateAT: { type: Date, required: false },
  createAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Producto", productoSchema);
