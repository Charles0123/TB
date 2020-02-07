<template>
  <div id="app">
    <div class="row">
      <div class="col-lg-6">
        <Info></Info>
        <surgery></surgery>
        <br><br>
        <Views></Views>
      </div>
      <div class="col-lg-6">
        <div class="row">
          <CDEWS></CDEWS>
        </div>
        <div class="row">
          <Ga></Ga>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>


import CDEWS from "./CDEWS";
import Ga from "./Ga.vue";
import Info from "./Info.vue";
import Surgery from "./Surgery.vue";
import Views from "./Views";
export default {
  name: "waitpage",
  components: {
    CDEWS,
    Ga,
    Info,
    Surgery,
    Views
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
