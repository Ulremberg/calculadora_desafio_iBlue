exports.positNeg = (req, res, next) => {
  var visor = req.query.visor;
  if (/\d/.test(visor)) {
    if (/^-/.test(visor)) {
      visor = visor.substring(1);
      res.send(visor);
    } else if (/\d/.test(visor)) {
      visor = `-${visor}`;
      res.send(visor);
      res.end();
    }
  }
};
