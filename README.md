# Desafio Calculadora Web

O projeto é uma calculadora destinada à uma escola que usará com educandos do Ensino Fundamental I e II. O seu uso pode ser realizado em navegadores desktop e em dispositivos móveis como laptop, tablet e smartphone (tamanho da janela de visualização mínima: 360 x 740)

Projeto desenvolvido durante o **Programa de Estágio da [IBlue Consulting](https://www.iblueconsulting.com.br/)**.

## Tecnologias utilizadas:

- NodeJs
- ExpressJs
- VueJs 
- MathJs
- Axios 
- CORS
- Mocha
- Chai
- body-parser
  

## Regras de negócio:
- A calculadora aceitará apenas valores [0-9] e realizará cálculos básicos como de soma, subtração, multiplicação e divisão;
- A calculadora fará também cálculos de porcentagem, raiz quadrada, quadrado e inverso. Assim como terá a opção de usar sinal negativo e separador decimal;
- Para cálculos como divisão por 0, campos vazios e raiz de número negativo, por exemplo, retornará undefined na tela;  
- Cálculos de inverso, quadrado, raiz quadrada e porcentagem não são salvos no visor, então é preciso usar a tecla AC para que não ocorra undefined na próxima operação;
- Os demais cálculos a entrada não salva o resultado, então é preciso usar a tecla C, antes de entrar com a próxima operação, para que não tenha retorno inesperado.  
- A calculadora trabalha com precisão de até 9 dígitos. Acima de 9 dígitos ocorre arredondamento do valor;

## Uso
Deve-se iniciar o servidor no backend para só então iniciar o serviço no front. Iniciar em terminais diferentes.
### Backend
- ```npm i```
- ```npm start```
#### Teste
- ```npm test```
### Frontend
- ```npm i```
- ```npm run serve```



## Portas 
- 3000 --> Node
- 8080 --> Vue