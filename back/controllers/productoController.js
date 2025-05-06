var Producto = require("../models/Producto");
var Variedad = require("../models/variedad");
var Ingreso = require("../models/ingreso");
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
          var img_path = req.files.portada.path;
          console.log(img_path);
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
                descripcion: data.descripcion,
                estado: data.estado,
                str_variedad: data.str_variedad,
                descuento: data.descuento,
                poratada: data.portada,
              }
            );
            res.status(200).send({ data: producto });
          } catch (error) {
            res.status(200).send({
              data: undefined,
              message: "No se pudo guardar el producto",
            });
          }
          console.log(data);
        } else {
          data.slug = slugify(data.titulo);

          try {
            let producto = await Producto.findByIdAndUpdate(
              { _id: id },
              {
                titulo: data.titulo,
                categoria: data.categoria,
                descripcion: data.descripcion,
                estado: data.estado,
                str_variedad: data.str_variedad,
                descuento: data.descuento,
              }
            );
            res.status(200).send({ data: producto });
          } catch (error) {
            res.status(200).send({
              data: undefined,
              message: "No se pudo guardar el producto",
            });
          }
          console.log(data);
        }
      } else {
        res.status(200).send({
          data: undefined,
          message: "El producto ya existe",
        });
      }
    } else {
      if (req.files) {
        var img_path = req.files.portada.path;
        console.log(img_path);
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
              descripcion: data.descripcion,
              estado: data.estado,
              str_variedad: data.str_variedad,
              descuento: data.descuento,
              poratada: data.portada,
            }
          );
          res.status(200).send({ data: producto });
        } catch (error) {
          res.status(200).send({
            data: undefined,
            message: "No se pudo guardar el producto",
          });
        }
        console.log(data);
      } else {
        data.slug = slugify(data.titulo);

        try {
          let producto = await Producto.findByIdAndUpdate(
            { _id: id },
            {
              titulo: data.titulo,
              categoria: data.categoria,
              descripcion: data.descripcion,
              estado: data.estado,
              str_variedad: data.str_variedad,
              descuento: data.descuento,
            }
          );
          res.status(200).send({ data: producto });
        } catch (error) {
          res.status(200).send({
            data: undefined,
            message: "No se pudo guardar el producto",
          });
        }
        console.log(data);
      }
    }
  } else {
    res.status(500).send({
      data: undefined,
      message: "ErrorToken",
    });
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

        let variedad = await Variedad.findById({ _id: item.variedad });

        await Variedad.findByIdAndUpdate(
          { _id: item.variedad },
          { stock: variedad.stock + item.cantidad }
        );

        let producto = await Producto.findById({ _id: item.producto });

        await Producto.findByIdAndUpdate(
          { _id: item.producto },
          { stock: producto.stock + item.producto }
        );
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
};
