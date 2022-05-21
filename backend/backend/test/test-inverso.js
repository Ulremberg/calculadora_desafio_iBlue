var expect = require('chai').expect;
let chai=require('chai');
const app=require('../index.js');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('/GET inverso', () => {
    it('deve fazer o GET inverso', (done) => {
        const visor=5;
        const precisao=9;
      chai.request(app)
          .get("/calculadora/inverso/").query({precisao:precisao , visor:visor})      
          .end((err, res) => {                 
             expect(res.text).to.equal('0.2');      
            done();
          });
    });
  
  
  
    it('deve fazer o GET inverso', (done) => {
        const visor=9;
        const precisao=9;
      chai.request(app)
          .get("/calculadora/inverso/").query({precisao:precisao , visor:visor})      
          .end((err, res) => {                   
             expect(res.text).to.equal('0.111111111');      
            done();
          });
    });
  });
