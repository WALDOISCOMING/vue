import MainPage from '@/pages/MainPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ProfilePage from '@/pages/ProFilePage.vue'

import VueRouter from 'vue-router';


const routes = [
  { path: "/home", component: MainPage ,name: "home", },
  { path: "/login", component: LoginPage ,name: "login", },
  {
    path: '/profile',
    component: ProfilePage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next();
      } else {
        next('/login');
      }
    },
  },
  { path: "/", component: MainPage ,name: "home", }
];

const router = new VueRouter({
  routes
});

export default router;
