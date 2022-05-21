const { inv, format } = require("mathjs");

exports.inverso = (req, res, next) => {
  visor = req.query.visor;
  precisao = req.query.precisao;
  if (/\d/.test(visor) && !/^0$/.test(visor)) {
    visor = format(inv(visor), precisao);
    res.send(visor);
  }
};
