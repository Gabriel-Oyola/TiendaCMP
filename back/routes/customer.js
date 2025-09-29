var express = require("express");
var customerControllers = require("../controllers/customerController");
var mongoose = require("mongoose");
var cauthenticate = require('../middlewares/cauthenticate')

var api = express.Router();

api.post('/crear_producto_carrito',cauthenticate.decodeToken, customerControllers.crear_producto_carrito)


api.get('/obtener_carrito_cliente', cauthenticate.decodeToken, customerControllers.obtener_carrito_cliente)

api.delete('/eliminar_producto_carrito/:id', cauthenticate.decodeToken, customerControllers.eliminar_producto_carrito)

api.post('/crear_direccion',cauthenticate.decodeToken, customerControllers.crear_direccion);

api.get('/obtener_direccion',cauthenticate.decodeToken, customerControllers.obtener_direccion)
module.exports = api;

api.delete('/eliminar_direccion/:id', cauthenticate.decodeToken, customerControllers.eliminar_direccion)