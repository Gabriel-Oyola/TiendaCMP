var Producto = require("../models/Producto");
var Galeria = require("../models/galeria");
var Variedad = require("../models/variedad");
var Ingreso = require("../models/ingreso");
var Categoria = require("../models/categoria");
var Subcategoria = require("../models/subcategoria");
var Ingreso_detalle = require("../models/ingreso_detalle");
var slugify = require("slugify");
var fs = require("fs");
var path = require("path");

const registro_producto_admin = async function (req, res) {
  if (req.user) {
    let data = req.body;
    let productos = await Producto.find({ titulo: data.titulo });
    console.log(productos.length);
    if (productos.length >= 1) {
      res.status(200).send({
        data: undefined,
        message: "El producto ya existe",
      });
    } else {
      var img_path = req.files.portada.path;
      console.log(img_path);
      var str_img = img_path.split("\\");
      var str_portada = str_img[2];

      ///

      data.portada = str_portada;
      data.slug = slugify(data.titulo);

      try {
        let producto = await Producto.create(data);
        res.status(200).send({ data: producto });
      } catch (error) {
        res.status(200).send({
          data: undefined,
          message: "No se pudo guardar el producto",
        });
        console.log(error);
      }
      console.log(data);
    }
  } else {
    res.status(500).send({
      data: undefined,
      message: "ErrorToken",
    });
  }
};

const listar_producto_admin = async function (req, res) {
  if (req.user) {
    let filtro = req.params["filtro"];
    let productos = await Producto.find({
      $or: [
        { titulo: new RegExp(filtro, "i") },
        { categoria: new RegExp(filtro, "i") },
      ],
    }).sort({ createAT: -1 });
    res.status(200).send(productos);
  } else {
    res.status(500).send({
      data: undefined,
      message: "No se encontraron usuarios",
    });
  }
};

const obtener_portada_producto = async function (req, res) {
  let img = req.params["img"];
  fs.stat("./uploads/productos/" + img, async function (err) {
    if (err) {
      let path_img = "./uploads/default.jpg";
      res.status(200).sendFile(path.resolve(path_img));
    } else {
      let path_img = "./uploads/productos/" + img;
      res.status(200).sendFile(path.resolve(path_img));
    }
  });
};

const obtener_producto_admin = async (req, res) => {
  if (req.user) {
    let id = req.params["id"];
    try {
      let producto = await Producto.findById({ _id: id });

      res.status(200).send(producto);
    } catch (error) {
      res.status(200).send(undefined);
    }
  } else {
    res.status(500).send({
      data: undefined,
      message: "No se pudo encontrar el producto",
    });
  }
};
const actualizar_producto_admin = async function (req, res) {
  if (req.user) {
    let data = req.body;
    let id = req.params["id"];

    let productos = await Producto.find({ titulo: data.titulo });
    console.log(productos.length);

    if (productos.length >= 1) {
      if (productos[0]._id == id) {
        if (req.files) {
          //REGISTRO PRODUCTO
          var img_path = req.files.portada.path;
          var str_img = img_path.split("\\");
          var str_portada = str_img[2];

          ///

          data.portada = str_portada;
          data.slug = slugify(data.titulo);

          try {
            let producto = await Producto.findByIdAndUpdate(
              { _id: id },
              {
                titulo: data.titulo,
                categoria: data.categoria,
                subcategoria: data.subcategoria,
                extracto: data.extracto,
                estado: data.estado,
                str_variedad: data.str_variedad,
                descuento: data.descuento,
                portada: data.portada,
                descripcion: data.descripcion,
              }
            );
            res.status(200).send({ data: producto });
          } catch (error) {
            res.status(200).send({
              data: undefined,
              message: "No se pudo crear el producto.",
            });
          }
        } else {
          data.slug = slugify(data.titulo);

          try {
            let producto = await Producto.findByIdAndUpdate(
              { _id: id },
              {
                titulo: data.titulo,
                categoria: data.categoria,
                subcategoria: data.subcategoria,
                extracto: data.extracto,
                estado: data.estado,
                str_variedad: data.str_variedad,
                descuento: data.descuento,
                descripcion: data.descripcion,
              }
            );
            res.status(200).send({ data: producto });
          } catch (error) {
            res.status(200).send({
              data: undefined,
              message: "No se pudo crear el producto.",
            });
          }
        }
      } else {
        res.status(200).send({
          data: undefined,
          message: "El titulo de producto ya existe.",
        });
      }
    } else {
      if (req.files) {
        //REGISTRO PRODUCTO
        var img_path = req.files.portada.path;
        var str_img = img_path.split("\\");
        var str_portada = str_img[2];

        ///

        data.portada = str_portada;
        data.slug = slugify(data.titulo);

        try {
          let producto = await Producto.findByIdAndUpdate(
            { _id: id },
            {
              titulo: data.titulo,
              categoria: data.categoria,
              subcategoria: data.subcategoria,
              extracto: data.extracto,
              estado: data.estado,
              str_variedad: data.str_variedad,
              descuento: data.descuento,
              portada: data.portada,
              descripcion: data.descripcion,
            }
          );
          res.status(200).send({ data: producto });
        } catch (error) {
          res.status(200).send({
            data: undefined,
            message: "No se pudo crear el producto.",
          });
        }
      } else {
        data.slug = slugify(data.titulo);

        try {
          let producto = await Producto.findByIdAndUpdate(
            { _id: id },
            {
              titulo: data.titulo,
              categoria: data.categoria,
              subcategoria: data.subcategoria,
              extracto: data.extracto,
              estado: data.estado,
              str_variedad: data.str_variedad,
              descuento: data.descuento,
              descripcion: data.descripcion,
            }
          );
          res.status(200).send({ data: producto });
        } catch (error) {
          res.status(200).send({
            data: undefined,
            message: "No se pudo crear el producto.",
          });
        }
      }
    }
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

const registro_variedad_producto = async function (req, res) {
  if (req.user) {
    let data = req.body;
    let variedad = await Variedad.create(data);
    res.status(200).send({ data: variedad });
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

const obtener_variedad_producto = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];
    let variedades = await Variedad.find({ producto: id }).sort({ stock: -1 });

    res.status(200).send(variedades);
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

const eliminar_variedad_producto = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];

    let reg = await Variedad.findById({ _id: id });

    if (reg.stock == 0) {
      let variedad = await Variedad.findByIdAndDelete({ _id: id });
      res.status(200).send(variedad);
    } else {
      res
        .status(200)
        .send({ data: undefined, message: "No se puede eliminar la variedad" });
    }
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

const listar_activos_productos_admin = async function (req, res) {
  if (req.user) {
    let productos = await Producto.find({ estado: true }).sort({
      createAT: -1,
    });
    res.status(200).send(productos);
  } else {
    res.status(500).send({
      data: undefined,
      message: "No se encontraron usuarios",
    });
  }
};

const registro_ingreso_admin = async function (req, res) {
  if (req.user) {
    let data = req.body; //Ingreso
    try {
      let reg_ingresos = await Ingreso.find().sort({ createAt: -1 });

      if (reg_ingresos.length == 0) {
        data.serie = 1;
      } else {
        data.serie = reg_ingresos[0].serie + 1;
      }

      let detalles = JSON.parse(data.detalles); //detalles de ingreso

      var img_path = req.files.documento.path;
      console.log(img_path);
      var str_img = img_path.split("\\");
      var str_documento = str_img[2];

      data.documento = str_documento;
      data.usuario = req.user.sub;
      let ingreso = await Ingreso.create(data);

      for (var item of detalles) {
        item.ingreso = ingreso._id;
        await Ingreso_detalle.create(item);

        //ACTUALIZAR CANTIDADES
        let variedad = await Variedad.findById({ _id: item.variedad });
        await Variedad.findByIdAndUpdate(
          { _id: item.variedad },
          {
            stock: parseInt(variedad.stock) + parseInt(item.cantidad),
          }
        );

        let producto = await Producto.findById({ _id: item.producto });
        await Producto.findByIdAndUpdate(
          { _id: item.producto },
          {
            stock: parseInt(producto.stock) + parseInt(item.cantidad),
          }
        );

        //MARGEN DE GANANCIA
        if (producto.stock >= 1) {
          //

          let subtotal_residual = producto.precio * producto.stock;
          let ganancia = Math.ceil((item.precio_unidad * data.ganancia) / 100);
          let subtotal_ingreso =
            (parseFloat(item.precio_unidad) + parseFloat(ganancia)) *
            item.cantidad;

          let cantidades = parseInt(producto.stock) + parseInt(item.cantidad);
          let subtotales =
            parseFloat(subtotal_residual) + parseFloat(subtotal_ingreso);

          console.log(subtotales + " " + cantidades);

          let precio_equilibrio = Math.ceil(subtotales / cantidades);

          await Producto.findByIdAndUpdate(
            { _id: item.producto },
            {
              precio: precio_equilibrio,
            }
          );
        } else {
          let ganancia = Math.ceil((item.precio_unidad * data.ganancia) / 100);
          await Producto.findByIdAndUpdate(
            { _id: item.producto },
            {
              precio: parseFloat(item.precio_unidad) + parseFloat(ganancia),
            }
          );
        }
      }

      res.status(200).send(ingreso);
    } catch (error) {
      res.status(500).send({
        data: undefined,
        message: "No se pudo registrar el ingreso",
      });
    }
  }
};

const subir_imagen_producto = async function (req, res) {
  if (req.user) {
    let data = req.body;

    var img_path = req.files.imagen.path;
    console.log(img_path);
    var str_img = img_path.split("\\");
    var str_imagen = str_img[2];

    ///

    data.imagen = str_imagen;

    try {
      let imagen = await Galeria.create(data);
      res.status(200).send({ imagen });
    } catch (error) {
      res.status(200).send({
        data: undefined,
        message: "No se pudo guardar el producto",
      });
      console.log(error);
    }
    console.log(data);
  } else {
    res.status(500).send({
      data: undefined,
      message: "ErrorToken",
    });
  }
};

const obtener_galeria_producto = async function (req, res) {
  let img = req.params["img"];
  fs.stat("./uploads/galeria/" + img, async function (err) {
    if (err) {
      let path_img = "./uploads/default.jpg";
      res.status(200).sendFile(path.resolve(path_img));
    } else {
      let path_img = "./uploads/galeria/" + img;
      res.status(200).sendFile(path.resolve(path_img));
    }
  });
};

const obtener_galeria_producto_admin = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];

    let galeria = await Galeria.find({ producto: id });
    res.status(200).send(galeria);
  } else {
    res.status(500).send({
      data: undefined,
      message: "ErrorToken",
    });
  }
};

const eliminar_galeria_producto_admin = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];

    try {
      let reg = await Galeria.findById({ _id: id });
      let path_img = "./uploads/galeria/" + reg.imagen;
      fs.unlinkSync(path_img);
      let galeria = await Galeria.findByIdAndDelete({ _id: id });
      res.status(200).send(galeria);
    } catch (error) {
      res.status(200).send({
        data: undefined,
        message: "No se pudo eliminar la imagen",
      });
    }
  } else {
    res.status(500).send({
      data: undefined,
      message: "ErrorToken",
    });
  }
};

const crear_categoria_admin = async function (req, res) {
  if (req.user) {
    let data = req.body;
    try {
      var reg = await Categoria.find({ titulo: data.titulo });
      if (reg.length == 0) {
        data.slug = slugify(data.titulo).toLowerCase();
        var categorias = await Categoria.create(data);
        res.status(200).send(categorias);
      } else {
        res.status(200).send({
          data: undefined,
          message: "La categoria ya existe",
        });
      }
    } catch (error) {
        res.status(200).send({
        data: undefined,
        message: "Ocurrio un error durante el proceso",
      });
    }
  } else {
    res.status(500).send({
      data: undefined,
      message: "ErrorToken",
    });
  }
};

const listar_categorias_admin = async function (req, res) {
  if (req.user) {
    var regs = await Categoria.find().sort({ titulo: 1 });
    var categorias = [];

    for (var item of regs) {
      var subcategorias = await Subcategoria.find({ categoria: item._id });
      var productos = await Producto.find({ categoria: item.titulo });

      categorias.push({
        categoria: item,
        subcategorias,
        nproductos: productos.length,
      });
    }

    res.status(200).send(categorias);
  } else {
    res.status(500).send({
      data: undefined,
      message: "ErrorToken",
    });
  }
};

const crear_subcategoria_admin = async function (req, res) {
  if (req.user) {
    let data = req.body;

    try {
      var reg = await Subcategoria.find({ titulo: data.titulo, _id: data._id });

      if (reg.length == 0) {
        var subcategorias = await Subcategoria.create(data);
        res.status(200).send(subcategorias);
      } else {
        res.status(200).send({
          data: undefined,
          message: "La subcategoria ya existe",
        });
      }
    } catch (error) {
      res.status(200).send({
        data: undefined,
        message: "Ocurrio un error durante el proceso",
      });
    }
  } else {
    res.status(500).send({
      data: undefined,
      message: "ErrorToken",
    });
  }
};

const eliminar_subcategoria_admin = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];
    var reg = await Subcategoria.findByIdAndDelete({ _id: id });

    res.status(200).send(reg);
  } else {
    res.status(500).send({
      data: undefined,
      message: "ErrorToken",
    });
  }
};

const cambiar_estado_categoria_id = async (req, res) => {
  if (req.user) {
    let id = req.params["id"];
    let data = req.body;
    let nuevo_estado = false;

    if (data.estado) {
      nuevo_estado = false;
    } else {
      nuevo_estado = true;
    }

    let categoria = await Categoria.findByIdAndUpdate(
      { _id: id },
      {
        estado: nuevo_estado,
      }
    );

    res.status(200).send(categoria);
  } else {
    res.status(500).send({
      data: undefined,
      message: "No fue posible modificar el estado",
    });
  }
};

module.exports = {
  registro_producto_admin,
  listar_producto_admin,
  obtener_portada_producto,
  obtener_producto_admin,
  actualizar_producto_admin,
  registro_variedad_producto,
  obtener_variedad_producto,
  eliminar_variedad_producto,
  listar_activos_productos_admin,
  registro_ingreso_admin,
  subir_imagen_producto,
  obtener_galeria_producto,
  obtener_galeria_producto_admin,
  eliminar_galeria_producto_admin,
  crear_categoria_admin,
  listar_categorias_admin,
  crear_subcategoria_admin,
  eliminar_subcategoria_admin,
  cambiar_estado_categoria_id
};
