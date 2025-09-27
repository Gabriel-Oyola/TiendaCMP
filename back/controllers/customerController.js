const carrito = require('../models/carrito');
var Carrito  = require('../models/carrito');
var Variedad  = require('../models/variedad');
var Direccion  = require('../models/direccion');



const crear_producto_carrito = async function(req, res){
    if(req.user){
        let data = req.body;
        var variedad = await Variedad.findById({_id: data.variedad}).populate('producto')
        if(data.cantidad <= variedad.stock){
            if(variedad.producto.precio >= 1){
                let carrito = await Carrito.create(data);
                  res.status(200).send({data})
            }
            else{
                 res.status(200).send({data:undefined, message: 'Producto fuera de precio'})
            }
        }else{
             res.status(200).send({data:undefined, message: 'Se supero la cantidad del stock '})
        }
    }else{
        res.status(500).send({data:undefined, message: 'errorToken'})
    }
}

const obtener_carrito_cliente = async function(req, res){
    if(req.user){
       let carrito = await Carrito.find({ cliente: req.user.sub}).populate('producto').populate('variedad').sort({createAt: -1}).limit(5);

           let carrito_general = await Carrito.find({ cliente: req.user.sub}).populate('producto').populate('variedad').sort({createAt: -1});
        res.status(200).send({carrito, carrito_general})
    }else{
        res.status(500).send({data:undefined, message: 'errorToken'})
    }
}

const eliminar_producto_carrito = async function(req, res){
    if(req.user){
        let id = req.params['id'];
        let reg = await Carrito.findByIdAndDelete({_id: id})
        res.status(200).send(reg)
    }else{
        res.status(500).send({data:undefined, message: 'errorToken'})
    }
}

const crear_direccion = async function(req, res){
    if(req.user){
        let data = req.body;
        data.cliente = req.user.sub;  
        let direccion = await Direccion.create(data)
        res.status(200).send(direccion)
    }else{
        res.status(500).send({data:undefined, message: 'errorToken'})
    }
}

module.exports={
    crear_producto_carrito, 
    obtener_carrito_cliente,
    eliminar_producto_carrito,
    crear_direccion
    
}