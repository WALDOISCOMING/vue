import MainPage from '@/pages/MainPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ProfilePage from '@/pages/ProFilePage.vue'

import VueRouter from 'vue-router';


const routes = [
  { path: "/home", component: MainPage ,name: "home", },
  { path: "/login", component: LoginPage ,name: "login", },
  { path: "/profile", component: ProfilePage ,name: "profile", },
  { path: "/", component: MainPage ,name: "home", }
];

const router = new VueRouter({
  routes
});

export default router;
