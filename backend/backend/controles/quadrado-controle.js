const { square, format } = require("mathjs");

exports.quadrado = (req, res, next) => {
  var visor = req.query.visor;
  var precisao = req.query.precisao;
  if (/\d/.test(visor) && !/^0$/.test(visor)) {
    var output = format(square(visor), precisao);
  }
  res.send(output);
};
