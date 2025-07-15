var Producto = require('../models/Producto')

const obtener_nuevos_productos = async function (req,res) {

    var productos = await Producto.find().sort({createAT:-1}).limit(4);
    res.status(200).send(productos)
    
}

module.exports={
    obtener_nuevos_productos
}