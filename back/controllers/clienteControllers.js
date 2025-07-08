var Cliente = require("../models/cliente");
var bcrypt = require('bcrypt-nodejs')

const registro_cliente_ecommerce = async function (req, res) {
    let data = req.body;
    let reg = await Cliente.find({email: data.email})

    console

    if(reg.length >= 1){ 
       res.status(200).send({message: 'el correo electronico ya existe'})
    }else {
      bcrypt.hash(data.password, null, null, async function(err, hash){
          if(err){
               res.status(200).send({message: 'Surgio un error durante la encriptacion'})
          }else {
            data.password = hash;
            let cliente = await Cliente.create(data)
             res.status(200).send(cliente)
          }
      })

      
    }
};

module.exports = {
  registro_cliente_ecommerce,
};
