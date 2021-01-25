
<template>
  <div id="app">
    <img alt="Kitty logo" src="./assets/img/kitty.png" />
   

    <!-- <router-link to="/login">Go to Login Teste</router-link> -->
    <router-view></router-view>
  </div>
</template>



<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import { CvButton } from "@carbon/vue";
// import TutorialHeader from "./components/TutorialHeader";

export default {
  name: "App",
  components: {
    // HelloWorld
  },
};
</script>

<style lang="scss">
// @import "./assets/styles/carbon";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
