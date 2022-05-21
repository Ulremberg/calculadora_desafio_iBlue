var expect = require('chai').expect;
let chai=require('chai');
const app=require('../index.js');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('/GET raiz quadrada', () => {
    it('ele deve fazer GET raiz quadrada', (done) => {
        const visor=9;
        const precisao=9;
      chai.request(app)
          .get("/calculadora/raizQuadrada/").query({precisao:precisao,visor:visor})
          .end((err, res) => {
            //console.log(res);            
             expect(res.text).to.equal('3');
            // console.log(err);
            done();
          });
    });

     it('ele deve fazer GET raiz quadrada', (done) => {
     const visor=25;
      const precisao=9;
    chai.request(app)
    .get("/calculadora/raizQuadrada/").query({precisao:precisao,visor:visor})
         
    .end((err, res) => {       
       //console.log(res);
     expect(res.text).to.equal('5');
        // console.log(err);
          done();
        });
 });
});