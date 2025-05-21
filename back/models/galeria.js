var mongoose = require("mongoose");

var schema = mongoose.Schema;

var GaleriaSchema = new mongoose.Schema({
  imagen: { type: String, required: true },
  producto: { type: schema.ObjectId, ref: "Producto", required: true },
  createAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("galeria", GaleriaSchema);
