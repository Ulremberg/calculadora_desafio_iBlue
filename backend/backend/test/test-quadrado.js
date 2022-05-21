var expect = require('chai').expect;
let chai=require('chai');
const app=require('../index.js');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('/GET quadrado', () => {
    it('ele deve fazer GET quadrado', (done) => {
        const visor=9;
        const precisao=9;
      chai.request(app)
          .get("/calculadora/quadrado/").query({precisao:precisao,visor:visor})
          .end((err, res) => {
            //console.log(res);            
             expect(res.text).to.equal('81');
            // console.log(err);
            done();
          });
    });

     it('ele deve fazer GET quadrado numero negativo', (done) => {
     const visor=-9;
      const precisao=9;
    chai.request(app)
    .get("/calculadora/quadrado/").query({precisao:precisao,visor:visor})
         
    .end((err, res) => {       
       //console.log(res);
     expect(res.text).to.equal('81');
        // console.log(err);
          done();
        });
 });
});