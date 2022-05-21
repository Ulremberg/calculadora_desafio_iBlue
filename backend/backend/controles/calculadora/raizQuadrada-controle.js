const { sqrt, format } = require("mathjs");

exports.raizQuadrada = (req, res, next) => {
  var visor = req.query.visor;
  var precisao = req.query.precisao;
  if (/\d/.test(visor) && !/^0$/.test(visor)) {
    visor = format(sqrt(visor), precisao);
    res.write(visor);
    res.end();
    return visor;
  }
};
