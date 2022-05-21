const express = require('express');
const rotear = express.Router();
const controleIgual = require('../controles/calculadora/igual-controle');
const controleInverso = require('../controles/calculadora/inverso-controle');
const controleLimparEntrada= require('../controles/calculadora/limparEntrada-controle');
const controleLimparTudo = require('../controles/calculadora/limparTudo-controle');
const controlePorcentagem = require('../controles/calculadora/porcentagem-controle');
const controlePositNeg = require('../controles/calculadora/positNeg-controle');
const controleQuadrado = require('../controles/calculadora/quadrado-controle');
const controleRaizQuadrada = require('../controles/calculadora/raizQuadrada-controle');

rotear.get('/calculadora/quadrado/',controleQuadrado.quadrado);
rotear.get('/calculadora/raizQuadrada/',controleRaizQuadrada.raizQuadrada);
rotear.get('/calculadora/positNeg/',controlePositNeg.positNeg);
rotear.get('/calculadora/igual/',controleIgual.igual);
rotear.get('/calculadora/limparTudo/',controleLimparTudo.limparTudo);
rotear.get('/calculadora/limparEntrada/',controleLimparEntrada.limparEntrada); 
rotear.get('/calculadora/porcentagem/',controlePorcentagem.porcentagem);
rotear.get('/calculadora/inverso/',controleInverso.inverso);

module.exports=rotear;