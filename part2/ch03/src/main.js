import Vue from 'vue'
import App from '../src/App.vue'
import router from './routes'

import VueRouter from 'vue-router';

// 1. Define route components.

// 2. Define some routes

Vue.config.productionTip = false
Vue.use(VueRouter);

// 3. Create the router instance and pass the `routes` option

/*const app = */
new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
