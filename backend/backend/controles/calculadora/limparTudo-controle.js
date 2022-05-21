exports.limparTudo = (req, res, next) => {
  visor = req.query.visor;
  entradaSaida = req.query.entradaSaida;
  visor = '0';
  entradaSaida = '';
  res.send({
    visor: visor,
    entradaSaida: entradaSaida,
  });
  res.end();
};
