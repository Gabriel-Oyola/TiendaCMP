var express = require("express");
var mongoose = require("mongoose");
var port = process.env.port || 6006;
var bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyparser.json({ limit: "50mb", extended: true }));

var clienteRouter = require("./routes/cliente");
var usuarioRouter = require("./routes/usuario");

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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.use("/api", clienteRouter);
app.use("/api", usuarioRouter);

ConexionBD();
module.exports = app;
