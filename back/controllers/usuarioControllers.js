var Usuario = require("../models/usuario");
var bcrypt = require("bcrypt-nodejs");
var jwt = require("../helpers/jwt");

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

const login_usuario = async function (req, res) {
  var data = req.body;

  var usuarios = await Usuario.find({ email: data.email });

  if (usuarios.length >= 1) {
    bcrypt.compare(
      data.password,
      usuarios[0].password,
      async function (err, check) {
        if (check) {
          res.status(200).send({
            token: jwt.createToken(usuarios[0]),
            usuario: usuarios[0],
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
      message: "No se encontro el correo electronico",
    });
  }
};

module.exports = {
  admin_registro_usuarios,
  login_usuario,
};
