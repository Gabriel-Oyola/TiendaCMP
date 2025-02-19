var jwt = require("jwt-simple");
var moment = require("moment");
var secret = "LlaveAcceso1";
let cambio = "0";

exports.decodeToken = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: "NoHeadersError" });
  }

  var token = req.headers.authorization;
  var segment = token.split(".");

  if (segment.length != 3) {
    return res.status(403).send({ message: "InvalidToken" });
  } else {
    try {
      var payload = jwt.decode(token, secret);
      console.log(payload);
    } catch (err) {
      return res.status(403).send({ message: "ErrorToken" });
    }
  }

  req.user = payload;
  next();
};

//Aqui se realizaran las authenticaciones de token que nos permite registrar usuarios
