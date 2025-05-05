var mongoose = require("mongoose");
const usuario = require("./usuario");
const ingreso = require("./ingreso");
var schema = mongoose.schema;

var Ingreso_detalleSchema = new mongoose.Schema({
  cantidad: { type: Number, required: true },
  precio_unidad: { type: Number, required: true },
  ingreso: { type: Schema.objectId, ref: "ingreso", required: true },
  producto: { type: Schema.objectId, ref: "Producto", required: true },
  createAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ingreso_detalle", Ingreso_detalleSchema);
