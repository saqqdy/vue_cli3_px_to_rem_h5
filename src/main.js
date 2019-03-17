import Vue from "vue";
import Vuex from 'vuex'
import FastClick from 'fastclick'
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
FastClick.attach(document.body)

Vue.use(Vuex)
require('es6-promise').polyfill()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
