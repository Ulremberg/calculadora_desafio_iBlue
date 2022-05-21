<script>
import Calculadora from "./components/Calculadora.vue";

export default {
  name: "App",
  components: {
    Calculadora,
  },
};
</script>

<template>
  <h1 class="titulo">Vera Cruz Calculadora</h1>

  <div class="flex-wrapper">
    <Calculadora />
  </div>
  <!-- flex-wrapper -->
</template>

<style lang="scss">
$mobile-responsive: 600px;

// color vars
$body-background-color: #1c96e7;

* {
  box-sizing: border-box;

  &::before {
    box-sizing: border-box;
  }

  &::after {
    box-sizing: border-box;
  }
}

html {
  font-size: 17px;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: $mobile-responsive) {
    font-size: 18px;
  }
}

body {
  background-color: $body-background-color;
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.titulo {
  color: rgb(21, 0, 92);
  font-weight: lighter;
  text-align: center;
}

.flex-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;

  @media only screen and (min-width: $mobile-responsive) {
    flex-wrap: none;
  }
}
</style>
