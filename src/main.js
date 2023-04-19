import Vue from 'vue';
import App from './app.vue';
import router from './router';
import axios from 'axios';
import global_ from './config/global.js'

Vue.prototype.GLOBAL = global_;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');