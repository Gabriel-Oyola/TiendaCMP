var express = require("express");
var usuarioControllers = require("../controllers/usuarioControllers");
var mongoose = require("mongoose");
var authenticate = require("../middlewares/authenticate");

var api = express.Router();

api.post(
  "/admin_registro_usuarios",
  authenticate.decodeToken,
  usuarioControllers.admin_registro_usuarios
);
api.post("/login_usuario", usuarioControllers.login_usuario);

api.get(
  "/listar_usuarios_admin/:filtro?",
  authenticate.decodeToken,
  usuarioControllers.listar_usuarios_admin
);

api.get(
  "/obtener_usuario_id/:id",
  authenticate.decodeToken,
  usuarioControllers.obtener_usuario_id
);

api.put(
  "/actualizar_usuario_id/:id",
  authenticate.decodeToken,
  usuarioControllers.actualizar_usuario_id
);

api.put(
  "/cambiar_estado/:id",
  authenticate.decodeToken,
  usuarioControllers.cambiar_estado_usuario_id
);

module.exports = api;
