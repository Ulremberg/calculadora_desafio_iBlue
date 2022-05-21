exports.limparEntrada = (req, res, next) => {
    
    visor = req.query.visor;
    visor = '0';
    res.send(visor);
    res.end;
  };