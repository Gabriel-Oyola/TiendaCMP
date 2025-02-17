var express = require("express");
var usuarioControllers = require("../controllers/usuarioControllers");
var mongoose = require("mongoose");

var api = express.Router();

api.post(
  "/admin_registro_usuarios",
  usuarioControllers.admin_registro_usuarios
);

module.exports = api;
