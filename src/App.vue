<template>
  <div id="app">
    <h1>Cervezas para codificar relax</h1>
    <filters />
    <beer-list />
  </div>
</template>

<script>
import BeerList from "./components/BeerList.vue";
import Filters from "./components/Filters.vue"

export default {
  name: "app",

  //componentes 
  components: {
    BeerList,
    Filters
  },
  beforeMount() {
    //disparamos el evento getBeers para la carga inicial de cervezas
    this.$store.dispatch("getBeers", null);

  },
};
</script>

<style>
body {

  background-color: #cecece;
}

h1 {
  font-weight: bold;
  font-size: 32px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
