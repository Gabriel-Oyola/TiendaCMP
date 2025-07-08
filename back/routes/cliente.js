var express = require("express");
var clienteControllers = require("../controllers/clienteControllers");
var mongoose = require("mongoose");

var api = express.Router();

api.post("/registro_cliente_ecommerce", clienteControllers.registro_cliente_ecommerce);

module.exports = api;
