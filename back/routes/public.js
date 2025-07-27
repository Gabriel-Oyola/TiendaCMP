var express = require("express");
var publicControllers = require("../controllers/publicControllers");
var mongoose = require("mongoose");

var api = express.Router();

api.get("/obtener_nuevos_productos", publicControllers.obtener_nuevos_productos );
;


api.get("/obtener_productos_recomendados", publicControllers.obtener_productos_recomendados );
;


api.get("/obtener_productos_shop", publicControllers.obtener_productos_shop );

api.get('/listar_categorias_public', publicControllers.listar_categorias_public)



module.exports = api;
