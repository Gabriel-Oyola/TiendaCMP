var Carrito  = require('../models/carrito');
var Variedad  = require('../models/variedad');



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


module.exports={
    crear_producto_carrito, 
}