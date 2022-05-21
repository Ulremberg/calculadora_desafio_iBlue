var expect = require('chai').expect;
let chai=require('chai');
const app=require('../index.js');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('/GET porcentagem', () => {
    it('deve fazer o GET porcentagem numero negativo', (done) => {
        const visor=-9;
        const precisao=9;
      chai.request(app)
          .get("/calculadora/porcentagem/").query({precisao:precisao , visor:visor})      
          .end((err, res) => {                 
             expect(res.text).to.equal('-0.09');      
            done();
          });
    });
  
  
  
    it('deve fazer o GET porcentagem', (done) => {
        const visor=9;
        const precisao=9;
      chai.request(app)
          .get("/calculadora/porcentagem/").query({precisao:precisao , visor:visor})      
          .end((err, res) => {                   
             expect(res.text).to.equal('0.09');      
            done();
          });
    });
});