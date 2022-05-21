var expect = require('chai').expect;
let chai=require('chai');
const app=require('../index.js');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('/GET positNeg', () => {
    it('ele deve fazer GET inverso sinal', (done) => {
        const visor=9;
      chai.request(app)
          .get("/calculadora/positNeg/").query({visor:visor})
          .end((err, res) => {                         
           // console.log(res.text);
             expect(res.text).to.equal('-9');         
            //console.log(err);
                         done();
          });
    });

    it('ele deve fazer GET inverso sinal', (done) => {
      const visor=-9;
    chai.request(app)
        .get("/calculadora/positNeg/").query({visor:visor})
        .end((err, res) => {                         
         // console.log(res.text);
           expect(res.text).to.equal('9');         
          //console.log(err);
                       done();
        });
  });
});