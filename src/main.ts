import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, Router } from "vue-router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Home from "./pages/Home.vue";
import Menu from "./pages/Menu.vue";
import NotFound from "./pages/NotFound.vue";


const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: "/", component: Home },
      { path: "/menu", component: Menu},
      { path: "/:pathMatch(.*)*", component: NotFound},
    ],
    scrollBehavior(to) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        }
      }
      return { top: 0 }
    },
});


createApp(App).use(router).mount('#app')
