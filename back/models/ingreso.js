var mongoose = require("mongoose");
const usuario = require("./usuario");
var schema = mongoose.schema;

var IngresoSchema = new mongoose.Schema({
  proveedor: { type: String, required: true },
  ncomprobante: { type: String, required: true },
  documento: { type: String, required: true },
  monto_total: { type: String, required: true },
  serie: { type: Number, required: true },
  monto_resultante: { type: String, required: true },
  usuario: { type: Schema.objectId, ref: "usuario", required: true },

  createAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ingreso", IngresoSchema);
