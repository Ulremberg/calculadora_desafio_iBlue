const express = require('express');
const rotear = express.Router();
const controleIgual = require('../controles/igual-controle');
const controleInverso = require('../controles/inverso-controle');
const controleLimparEntrada= require('../controles/limparEntrada-controle');
const controleLimparTudo = require('../controles/limparTudo-controle');
const controlePorcentagem = require('../controles/porcentagem-controle');
const controlePositNeg = require('../controles/positNeg-controle');
const controleQuadrado = require('../controles/quadrado-controle');
const controleRaizQuadrada = require('../controles/raizQuadrada-controle');

rotear.get('/calculadora/quadrado/',controleQuadrado.quadrado);
rotear.get('/calculadora/raizQuadrada/',controleRaizQuadrada.raizQuadrada);
rotear.get('/calculadora/positNeg/',controlePositNeg.positNeg);
rotear.get('/calculadora/igual/',controleIgual.igual);
rotear.get('/calculadora/limparTudo/',controleLimparTudo.limparTudo);
rotear.get('/calculadora/limparEntrada/',controleLimparEntrada.limparEntrada); 
rotear.get('/calculadora/porcentagem/',controlePorcentagem.porcentagem);
rotear.get('/calculadora/inverso/',controleInverso.inverso);

module.exports=rotear;