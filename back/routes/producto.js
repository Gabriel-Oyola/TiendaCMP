var express = require("express");
var ProductoControllers = require("../controllers/productoController");
var mongoose = require("mongoose");
var authenticate = require("../middlewares/authenticate");
var multipart = require("connect-multiparty");

var path = multipart({ uploadDir: "./uploads/productos" });
var api = express.Router();

api.post(
  "/registro_producto_admin",
  [authenticate.decodeToken, path],
  ProductoControllers.registro_producto_admin
);

api.get(
  "/listar_productos_admin/:filtro?",
  authenticate.decodeToken,
  ProductoControllers.listar_producto_admin
);

api.get(
  "/obtener_portada_producto/:img",
  ProductoControllers.obtener_portada_producto
);

api.get(
  "/obtener_producto_admin/:id",
  authenticate.decodeToken,
  ProductoControllers.obtener_producto_admin
);

api.put(
  "/actualizar_producto_admin/:id",
  [authenticate.decodeToken, path],
  ProductoControllers.actualizar_producto_admin
);

//////////////////////////////////////////

api.post(
  "/registro_variedad_producto",
  authenticate.decodeToken,
  ProductoControllers.registro_variedad_producto
);

api.get(
  "/obtener_variedad_producto/:id",
  authenticate.decodeToken,
  ProductoControllers.obtener_variedad_producto
);
module.exports = api;
