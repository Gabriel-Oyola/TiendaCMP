var express = require("express");
var clienteControllers = require("../controllers/clienteControllers");
var mongoose = require("mongoose");

var api = express.Router();

api.get("/testing", clienteControllers.testing);

module.exports = api;
