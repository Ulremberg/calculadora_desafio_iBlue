const { evaluate, format } = require("mathjs");

exports.porcentagem = (req, res, next) => {
  visor = req.query.visor;
  precisao = req.query.precisao;
  if (/\d/.test(visor) && !/^0$/.test(visor)) {
    
    visor = format(evaluate(visor / 100), precisao);
    res.send(visor);
  }
};
