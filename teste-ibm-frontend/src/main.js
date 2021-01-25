import Vue from 'vue'

import Router from './router.js'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')

import CarbonComponentsVue from '@carbon/vue/src/index';
Vue.use(CarbonComponentsVue);