var express = require("express");
var publicControllers = require("../controllers/publicControllers");
var mongoose = require("mongoose");

var api = express.Router();

api.get("/obtener_nuevos_productos", publicControllers.obtener_nuevos_productos );
;



module.exports = api;
