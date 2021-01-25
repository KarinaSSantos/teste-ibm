import Vue from 'vue'
// import CarbonComponentsVue from "@carbon/vue";
import Router from './router.js'
import App from './App.vue'

// Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
