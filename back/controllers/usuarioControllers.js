var Usuario = require("../models/usuario");
var bcrypt = require("bcrypt-nodejs");

const admin_registro_usuarios = async function (req, res) {
  let data = req.body;

  let usuarios = await Usuario.find({ email: data.email });

  if (usuarios.length >= 1) {
    res.status(200).send({
      data: undefined,
      message: "El correo electronico ya existe",
    });
  } else {
    bcrypt.hash("123456", null, null, async function (err, hash) {
      if (err) {
        res.status(200).send({
          data: undefined,
          message: "No se pudo encriptar la contraseña",
        });
      } else {
        data.password = hash;
        let usuario = await Usuario.create(data);
        res.status(200).send({ data: usuario });
      }
    });
  }
};

module.exports = {
  admin_registro_usuarios,
};
