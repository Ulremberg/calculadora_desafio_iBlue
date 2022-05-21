var expect = require('chai').expect;
let chai=require('chai');
const app=require('../index.js');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);



describe('/GET igual', () => {
    it('deve fazer GET igual', (done) => {
        const visor=3;
        const precisao=9;
        const entradaSaida='2+5*';
      chai.request(app)
          .get("/calculadora/igual/").query({entradaSaida:entradaSaida , precisao:precisao,visor:visor})
            
          .end((err, res) => {              
             expect(res.body.visor).to.equal('17');
             expect(res.body.entradaSaida).to.equal('2+5*3 = 17');             
            done();
          });
    });
});