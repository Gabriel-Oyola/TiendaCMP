var express = require("express");
var customerControllers = require("../controllers/customerController");
var mongoose = require("mongoose");
var cauthenticate = require('../middlewares/cauthenticate')

var api = express.Router();

api.post('/crear_producto_carrito',cauthenticate.decodeToken, customerControllers.crear_producto_carrito)
module.exports = api;
