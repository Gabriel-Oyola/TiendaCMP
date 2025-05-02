var mongoose = require("mongoose");

var schema = mongoose.Schema;

var VariedadSchema = new mongoose.Schema({
  proveedor: { type: String, required: true },
  variedad: { type: String, required: true },
  sku: { type: String, required: true },
  producto: { type: schema.ObjectId, ref: "Producto", required: true },
  createAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("variedad", VariedadSchema);
