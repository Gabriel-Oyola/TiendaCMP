var Cliente = require("../models/cliente");
var bcrypt = require('bcrypt-nodejs')
var cjwt = require('../helpers/cjwt')

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

const login_Cliente = async function (req, res) {
  var data = req.body;

  var clientes = await Cliente.find({ email: data.email });

  if (clientes.length >= 1) {
    if (clientes[0].estado) {
      bcrypt.compare(
        data.password,
        clientes[0].password,
        async function (err, check) {
          if (check) {
            res.status(200).send({
              token: cjwt.createToken(clientes[0]),
              cliente: clientes[0],
            });
          } else {
            res.status(200).send({
              data: undefined,
              message: "La contraseña es incorrecta",
            });
          }
        }
      );
    } else {
      res.status(200).send({
        data: undefined,
        message: "Su cuenta esta desactivada",
      });
    }
  } else {
    res.status(200).send({
      data: undefined,
      message: "No se encontro el correo electronico",
    });
  }
};

module.exports = {
  registro_cliente_ecommerce,
  login_Cliente, 
  
};
