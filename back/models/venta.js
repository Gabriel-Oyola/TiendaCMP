var mongoose = require("mongoose");

var schema = mongoose.Schema;

var VentaSchema = new mongoose.Schema({
  total: { type: String, required: true },
  envio: { type: Number, required: true },
  estado: { type: String, required: true },
  year: { type: Number, required: true },
  moth: { type: Number, required: true },
  day: { type: Number, required: true },
  serie: { type: Number, required: true },
  transaccion: { type: string, required: true },
  cliente: { type: schema.ObjectId, ref: "cliente", required: true },
   direccion: { type: schema.ObjectId, ref: "direccion", required: true },
  createAT: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model("venta", VentaSchema);
