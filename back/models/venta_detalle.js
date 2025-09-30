var mongoose = require("mongoose");

var schema = mongoose.Schema;

var Venta_detalleSchema = new mongoose.Schema({
  proveedor: { type: String, required: true },
   year: { type: Number, required: true },
  moth: { type: Number, required: true },
  day: { type: Number, required: true },
  subtotal: { type: Number, required: true },
  precio_unidad: { type: Number, required: true },
  venta: { type: schema.ObjectId, ref: "venta", required: true },
  cliente: { type: schema.ObjectId, ref: "cliente", required: true },
  variedad: { type: schema.ObjectId, ref: "variedad", required: true },
  producto: { type: schema.ObjectId, ref: "Producto", required: true },
  createAT: { type: Date, default: Date.now },
  cantidad: { type: Number, required: true },
});

module.exports = mongoose.model("venta_Detalle", Venta_detalleSchema);
