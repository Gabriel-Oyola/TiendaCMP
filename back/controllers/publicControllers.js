var Producto = require("../models/Producto");
var Categoria = require("../models/categoria");
var Subcategoria = require("../models/subcategoria");
var Variedad = require("../models/variedad");
var Galeria = require("../models/galeria");

const obtener_nuevos_productos = async function (req, res) {
  var productos = await Producto.find({ estado: true })
    .sort({ createAT: -1 })
    .limit(4);
  res.status(200).send(productos);
};

const obtener_productos_recomendados = async function (req, res) {
  var productos = await Producto.find({ estado: true }).limit(4);
  res.status(200).send(productos);
};

const obtener_productos_shop = async function (req, res) {
  var data_productos = [];
  var productos = await Producto.find({ estado: true }).sort({ createAT: -1 });
  

  for (var item of productos) {
    var variedades = await Variedad.find({ producto: item._id });
    data_productos.push({
      titulo: item.titulo,
      slug: item.slug,
      categoria: item.categoria,
      subcategoria: item.subcategoria,
      precio: item.precio,
      descripcion: item.descripcion,
      portada: item.portada,
      stock: item.stock,
      str_variedad: item.str_variedad,
      estado: item.estado,
      descuento: item.descuento,
      createAT: item.createAT,
      variedades,
    });

    item.subcategorias=[];
  }

  res.status(200).send(data_productos);
};

const listar_categorias_public = async function (req, res) {
  var regs = await Categoria.find({ estado: true }).sort({ titulo: 1 });
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
};


const obtener_producto_slug = async function (req, res) {
     try {
        const slug = req.params['slug'];

        // Buscar el producto por slug
        const producto = await Producto.findOne({ slug: slug });

        // Validar si se encontró el producto
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Buscar variedades y galería solo si hay producto
        const variedades = await Variedad.find({ producto: producto._id });
        const galeria = await Galeria.find({ producto: producto._id });

        // Enviar respuesta
        return res.status(200).json({ producto, variedades, galeria });

    } catch (error) {
        console.error('Error al obtener producto por slug:', error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

const obtener_producto_categoria = async function (req, res) {
    var categoria = req.params['categoria'];
    var productos = await Producto.find({categoria: categoria}).limit(6); 
   

    res.status(200).send({productos})
};


module.exports = {
  obtener_nuevos_productos,
  obtener_productos_recomendados,
  obtener_productos_shop,
  listar_categorias_public,
  obtener_producto_slug,
  obtener_producto_categoria
};
