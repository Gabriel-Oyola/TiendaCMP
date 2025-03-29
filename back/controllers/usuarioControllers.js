var Usuario = require("../models/usuario");
var bcrypt = require("bcrypt-nodejs");
var jwt = require("../helpers/jwt");

const admin_registro_usuarios = async function (req, res) {
  if (req.user) {
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
  } else {
    res.status(200).send({
      data: undefined,
      message: "ErrorToken",
    });
  }
};

const login_usuario = async function (req, res) {
  var data = req.body;

  var usuarios = await Usuario.find({ email: data.email });

  if (usuarios.length >= 1) {
    if (usuarios[0].estado) {
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

const listar_usuarios_admin = async function (req, res) {
  if (req.user) {
    let filtro = req.params["filtro"];
    let usuarios = await Usuario.find({
      $or: [
        { nombre: new RegExp(filtro, "i") },
        { apellido: new RegExp(filtro, "i") },
        { email: new RegExp(filtro, "i") },
      ],
    });
    res.status(200).send(usuarios);
  } else {
    res.status(500).send({
      data: undefined,
      message: "No se encontraron usuarios",
    });
  }
};

const obtener_usuario_id = async (req, res) => {
  if (req.user) {
    let id = req.params["id"];
    try {
      let usuario = await Usuario.findById({ _id: id });

      res.status(200).send(usuario);
    } catch (error) {
      res.status(200).send(undefined);
    }
  } else {
    res.status(500).send({
      data: undefined,
      message: "No se encontraron usuarios",
    });
  }
};

const actualizar_usuario_id = async (req, res) => {
  if (req.user) {
    let id = req.params["id"];
    let data = req.body;

    let usuario = await Usuario.findByIdAndUpdate(
      { _id: id },
      {
        nombre: data.nombre,
        apellido: data.apellido,
        rol: data.rol,
        email: data.email,
      }
    );

    res.status(200).send(usuario);
  } else {
    res.status(500).send({
      data: undefined,
      message: "No se encontraron usuarios",
    });
  }
};

const cambiar_estado_usuario_id = async (req, res) => {
  if (req.user) {
    let id = req.params["id"];
    let data = req.body;
    let nuevo_estado = false;

    if (data.estado) {
      nuevo_estado = false;
    } else {
      nuevo_estado = true;
    }

    let usuario = await Usuario.findByIdAndUpdate(
      { _id: id },
      {
        estado: nuevo_estado,
      }
    );

    res.status(200).send(usuario);
  } else {
    res.status(500).send({
      data: undefined,
      message: "No fue posible modificar el estado",
    });
  }
};
module.exports = {
  admin_registro_usuarios,
  login_usuario,
  listar_usuarios_admin,
  obtener_usuario_id,
  actualizar_usuario_id,
  cambiar_estado_usuario_id,
};
