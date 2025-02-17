var express = require("express");
var mongoose = require("mongoose");
var port = process.env.port || 6006;

var app = express();

var clienteRouter = require("./routes/cliente");

app.listen(port, function () {
  console.log("escuchando el puerto + " + port);
});

async function ConexionBD() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/tienda");
    console.log("Conexión exitosa a la base de datos.");
  } catch (err) {
    console.error("Error al conectar a la base de datos: ", err);
  }
}

app.use("/api", clienteRouter);

ConexionBD();
module.exports = app;
