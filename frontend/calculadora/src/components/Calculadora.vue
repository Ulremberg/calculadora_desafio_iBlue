<script>
import axios from "axios";


//const precisao = 9;

export default {
  
  name: "Calculadora",

  data() {
    return {
      visor: "0",
      entradaSaida: "",
    };
  },

  methods: {
    numero(num) {      
      if (this.visor === '0') {
        this.visor = num;      
      } else if (/=/.test(this.entradaSaida)) {
        this.entradaSaida = '';
        this.visor = num;
        document.getElementById('entradaSaida').innerText = this.entradaSaida;      
      } else if (/\d/.test(this.visor)) {
        this.visor += num;      
      } else if (/\+|-|\*|\//.test(this.visor)) {
        this.entradaSaida += ` ${this.visor} `;
        document.getElementById('entradaSaida').innerText = this.entradaSaida;
        this.visor = num;
      }

      document.getElementById('visor').innerText = this.visor;
    },
      
    operador(op) {      
      if (/=/.test(this.entradaSaida)) {
        this.entradaSaida = this.visor;
        this.entradaSaida = op;
        document.getElementById('entradaSaida').innerText = this.entradaSaida;
        document.getElementById('visor').innerText = op;
      
      } else if (/\d/.test(this.visor)) {
        this.entradaSaida += this.visor;
        document.getElementById('entradaSaida').innerText = this.entradaSaida;
        this.visor = op;
        document.getElementById('visor').innerText = this.visor;
      
      } else if (op === '-' && this.visor.length < 2) {
        this.visor += op;
        document.getElementById('visor').innerText = this.visor;
      
      } else if (this.visor.length === 2) {
        this.visor = op;
        document.getElementById('visor').innerText = this.visor;
      
      } else {
        this.visor = op;
        document.getElementById('visor').innerText = this.visor;
      }
    },      

    decimal() {
       if (/\d/.test(this.visor)) {
        
        if (/^0$/.test(this.visor)) {
          this.visor = '0.';
          document.getElementById('visor').innerText = this.visor;
       
        } else if (/\d/.test(this.visor) && !/\./.test(this.visor)) {
          this.visor += '.';
          document.getElementById('entradaSaida').innerText = this.entradaSaida;
          document.getElementById('visor').innerText = this.visor;
        }
      } else if (/(\+|-|\*|\/)/.test(this.visor)) {       
        this.entradaSaida += ` ${this.visor}`;
        document.getElementById('entradaSaida').innerText = this.entradaSaida;
        this.visor = '0.';
        document.getElementById('visor').innerText = this.visor;
      }
    },
      
    positNeg() {
      axios
        .get(`http://localhost:8080/calculadora/positNeg/?visor=${this.visor}`)
        .then((response) => {
          this.visor = response.data;          
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
      

    inverso() {
      axios
        .get(`http://localhost:8080/calculadora/inverso/?visor=${this.visor}&precisao=9`)
        .then((response) => {
          this.visor = response.data;
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
      

    quadrado() {
      axios
        .get(`http://localhost:8080/calculadora/quadrado/?visor=${this.visor}&precisao=9`)
        .then((response) => {
          this.visor = response.data;
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
      

    raizQuadrada() {
      axios
        .get(`http://localhost:8080/calculadora/raizQuadrada/?visor=${this.visor}&precisao=9`)
        .then((response) => {
          this.visor = response.data;
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
      
    porcentagem() {
      axios
        .get(`http://localhost:8080/calculadora/porcentagem/?visor=${this.visor}&precisao=9`)
        .then((response) => {
          this.visor = response.data;
        })
        .catch((err) => {
          console.log("error", err);
        });
      
    },
    igual() {
       if (this.entradaSaida.includes("+")) {
        this.entradaSaida = `${this.entradaSaida}%2B`;
      }
      axios
        .get(
          `http://localhost:8080/calculadora/igual/?visor=${this.visor}&precisao=9&entradaSaida=${this.entradaSaida}`
        )
        .then((response) => {
          this.visor = response.data.visor;
          this.entradaSaida = response.data.entradaSaida;
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
      

    limparVisor() {
      axios
        .get(`http://localhost:8080/calculadora/limparTudo/?visor=${this.visor}&entradaSaida=${this.entradaSaida}`)
        .then((response) => {
          this.visor = response.data.visor;
          this.entradaSaida = response.data.entradaSaida;
        })
        .catch((err) => {
          console.log("error", err);
        });
    },

    limparEntrada() {
       axios
        .get(`http://localhost:8080/calculadora/limparEntrada/?visor=${this.visor}`)
        .then((response) => {
          this.visor = response.data.visor;
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
    
  },
 
};
</script>

<template>
  <div id="calculadora">
    <div class="calc-corpo">
      <div class="lcd-container">
        
        <div id="entradaSaida">{{ entradaSaida }}</div>

        
        <div id="visor">{{ visor || "0" }}</div>
        
       
      </div>

      <div class="button-container">
        
        <button
          id="inverso"
          @click="inverso()"
          class="inverso naonumeros"
          type="button"
          aria-label="Calcula inverso"
          title="inverso"
        >
          1 &#47; x
        </button>
        <button
          id="quadrado"
          @click="quadrado()"
          class="quadrado naonumeros"
          type="button"
          aria-label="quadrado do numero"
          title="Quadrado numero"
        >
          x<span style="font-size: 0.8rem; vertical-align: super">2</span>
        </button>
        <button
          id="raizQdrada"
          @click="raizQuadrada()"
          class="raizQuadrada naonumeros"
          type="button"
          aria-label="Calcula raiz quadrada"
          title="Raiz quadrada"
        >
          &#8730;x
        </button>
        <button
          id="posNeg"
          @click="positNeg()"
          class="naonumeros"
          title="Posiitvo-Negativo"
          type="button"
        >
          + &#47; -
        </button>

        <button
          id="porcentagem"
          @click="porcentagem()"
          class="porcentagem naonumeros"
          type="button"
          aria-label="Porcentagem"
          title="Porcentagem"
        >
          %
        </button>

        <button
          id="limpar-visor"
          @click="limparVisor()"
          class="limparvisor naonumeros"
          type="button"
          aria-label="Limpa todo visor para 0"
          title="Limpa todo visor"
        >
          AC
        </button>
        <button
          id="limpar-entrada"
          @click="limparEntrada()"
          class="clear naonumeros"
          type="button"
          aria-label="Limpa entrada numero"
          title="Limpa entrada numeros"
        >
          C
        </button>
        <button
          id="divide"
          @click="operador('/')"
          class="operador naonumeros"
          type="button"
          aria-label="divide"
        >
          &#247;
        </button>

        <button
          id="sete"
          @click="numero('7')"
          class="numeros"
          type="button"
          aria-label="7"
        >
          7
        </button>
        <button
          id="oito"
          @click="numero('8')"
          class="numeros"
          type="button"
          aria-label="8"
        >
          8
        </button>
        <button
          id="nove"
          @click="numero('9')"
          class="numeros"
          type="button"
          aria-label="9"
        >
          9
        </button>
        <button
          id="multiplicacao"
          @click="operador('*')"
          class="operador naonumeros"
          type="button"
          aria-label="multiplicacao"
        >
          x
        </button>

        <button
          id="quatro"
          @click="numero('4')"
          class="numeros"
          type="button"
          aria-label="4"
        >
          4
        </button>
        <button
          id="cinco"
          @click="numero('5')"
          class="numeros"
          type="button"
          aria-label="5"
        >
          5
        </button>
        <button
          id="seis"
          @click="numero('6')"
          class="numeros"
          type="button"
          aria-label="6"
        >
          6
        </button>
        <button
          id="subtracao"
          @click="operador('-')"
          class="operador naonumeros"
          type="button"
          aria-label="subtracao"
        >
          -
        </button>

        <button
          id="um"
          @click="numero('1')"
          class="numeros"
          type="button"
          aria-label="1"
        >
          1
        </button>
        <button
          id="dois"
          @click="numero('2')"
          class="numeros"
          type="button"
          aria-label="2"
        >
          2
        </button>
        <button
          id="tres"
          @click="numero('3')"
          class="numeros"
          type="button"
          aria-label="3"
        >
          3
        </button>
        <button
          id="soma"
          @click="operador('+')"
          class="operador naonumeros"
          type="button"
          aria-label="soma"
        >
          +
        </button>

        <button
          id="zero"
          @click="numero('0')"
          class="numeros"
          type="button"
          aria-label="0"
        >
          0
        </button>
        <button
          id="decimal"
          @click="decimal()"
          class="decimal naonumeros"
          type="button"
          aria-label="decimal"
        >
          .
        </button>
        <button
          id="igual"
          @click="igual()"
          class="igual duplo naonumeros"
          type="button"
          aria-label="igual"
        >
          =
        </button>
      </div>
      
    </div>
    
  </div>
</template>

<style lang="scss">
$lcd-numero: #f1edee;
$calc-corpo-background: rgb(21, 0, 92);
$calc-corpo-border: rgb(142, 216, 248);
$lcd-background: rgb(66, 65, 65);
$lcd-boder: #ebecf0;
$button-container-background: rgb(21, 0, 92);
$button-font-color: #f5efef;
$button-font-color-active: #fff;
$button-numeros: #1613f1;
$button-naonumeros: rgb(182, 30, 36);


#calculadora {
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 50%;
  }
}

.calc-corpo {
  background-color: $calc-corpo-background;
  border: 10px solid $calc-corpo-border;
  border-radius: 4px;
  margin: auto;
  padding-bottom: 1rem;
  padding-top: 1.5rem;
  width: 21rem;
}

.lcd-container {
  background-color: $lcd-background;
  border: 4px solid $lcd-boder;
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  margin: 0 auto 1rem auto;
  padding-right: 2rem;
  text-align: right;
  width: 18rem;
}

#visor {
  color: $lcd-numero;
  font-size: 2rem;
  height: 3rem;
  overflow: auto;
  text-shadow: 1px 1px 2px $lcd-numero, -1px -1px 2px $lcd-numero;
}

#entradaSaida {
  color: $lcd-numero;
  font-size: 1.2rem;
  height: 3rem;
  overflow: auto;
  text-shadow: 1px 0 1px $lcd-numero, -1px 0 1px $lcd-numero;
}

.button-container {
  background-color: $button-container-background;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 0.5rem 1rem 0.5rem;
  width: 19rem;
}

button {
  border: none;
  border-radius: 5px;
  color: $button-font-color;
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  height: 4rem;
  margin: 2px;
  width: 4rem;

  &:active {
    color: $button-font-color-active;
  }
}

.duplo {
  width: calc(8rem + 9px);
}

.numeros {
  background-color: $button-numeros;
}

.naonumeros {
  background-color: $button-naonumeros;
}
</style>
