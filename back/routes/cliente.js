var express = require("express");
var clienteControllers = require("../controllers/clienteControllers");
var mongoose = require("mongoose");

var api = express.Router();

api.post("/registro_cliente_ecommerce", clienteControllers.registro_cliente_ecommerce);
api.post("/login_Cliente", clienteControllers.login_Cliente);



module.exports = api;
