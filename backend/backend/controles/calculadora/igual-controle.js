const { evaluate,format } = require("mathjs");

exports.igual = (req, res, next) => {
    entradaSaida = req.query.entradaSaida;
    visor = req.query.visor;
    precisao = req.query.precisao;
    if (/\d/.test(visor)) {
      
      entradaSaida += visor;
      
      const resposta = format(evaluate(entradaSaida), precisao);
      entradaSaida += ` = ${resposta}`;
      visor = resposta;
      res.send({ 'visor': visor, 'entradaSaida': entradaSaida });
      res.end();
    }
  }