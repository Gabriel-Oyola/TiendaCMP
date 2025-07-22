var mongoose = require("mongoose");
const { truncate } = require("node:fs");

var schema = mongoose.Schema;

var CategoriaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  slug: { type: String, required: true },
  estado: { type: Boolean, default:true, required: true },
  createAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model("categoria", CategoriaSchema);
