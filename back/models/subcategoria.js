var mongoose = require("mongoose");

var schema = mongoose.Schema;

var SubcategoriaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  categoria: { type: schema.ObjectId, ref: "categoria", required: true },
  createAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("subcategoria", SubcategoriaSchema);
