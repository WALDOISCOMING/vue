import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import LoginPage from './pages/LoginPage.vue'

import VueRouter from 'vue-router';

// 1. Define route components.

// 2. Define some routes
const routes = [
  { path: "/home", component: HelloWorld ,name: "home", },
  { path: "/login", component: LoginPage ,name: "login", },
  { path: "/", component: HelloWorld ,name: "home", }
];

Vue.config.productionTip = false
Vue.use(VueRouter);

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
});

/*const app = */
new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
