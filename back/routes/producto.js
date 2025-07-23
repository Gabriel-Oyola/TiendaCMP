var express = require("express");
var ProductoControllers = require("../controllers/productoController");
var mongoose = require("mongoose");
var authenticate = require("../middlewares/authenticate");
var multipart = require("connect-multiparty");

var path = multipart({ uploadDir: "./uploads/productos" });
var path_ingreso = multipart({ uploadDir: "./uploads/facturas" });
var path_galeria = multipart({ uploadDir: "./uploads/galeria" });
var api = express.Router();

/////////////////////PRODUCTOS
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

//////////////////////////////////////////VARIEDADES

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

api.delete(
  "/eliminar_variedad_producto/:id",
  authenticate.decodeToken,
  ProductoControllers.eliminar_variedad_producto
);

api.get(
  "/listar_activos_productos_admin",
  authenticate.decodeToken,
  ProductoControllers.listar_producto_admin
);

/////////////////////////////INGRESO

api.post(
  "/registro_ingreso_admin",
  [authenticate.decodeToken, path_ingreso],
  ProductoControllers.registro_ingreso_admin
);

////////////////////////////

api.post(
  "/subir_imagen_producto",
  [authenticate.decodeToken, path_galeria],
  ProductoControllers.subir_imagen_producto
);

api.get(
  "/obtener_galeria_producto/:img",
  ProductoControllers.obtener_galeria_producto
);

api.get(
  "/obtener_galeria_producto_admin/:id",
  authenticate.decodeToken,
  ProductoControllers.obtener_galeria_producto_admin
);

api.delete("/eliminar_galeria_producto_admin/:id", authenticate.decodeToken, ProductoControllers.eliminar_galeria_producto_admin)



/////////////////////////////

api.post('/crear_categoria_admin', authenticate.decodeToken, ProductoControllers.crear_categoria_admin)

api.get('/listar_categorias_admin', authenticate.decodeToken, ProductoControllers.listar_categorias_admin)

api.post('/crear_subcategoria_admin', authenticate.decodeToken, ProductoControllers.crear_subcategoria_admin)

api.delete('/eliminar_subcategoria_admin/:id', authenticate.decodeToken, ProductoControllers.eliminar_subcategoria_admin) 





module.exports = api;