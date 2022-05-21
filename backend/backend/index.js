const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rotas = require("./rotas/calculadora-rotas.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(rotas);
var cors = require("cors");
app.use(cors());

var server = app.listen(3000, (err) => {
  console.log("servidor ativo");
  console.log(err);
});
module.exports = server;
