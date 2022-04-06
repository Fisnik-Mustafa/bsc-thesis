import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dezimalsystem_1 from  '../views/Dezimalsystem_1.vue'
import Dezimalsystem_2 from '../views/Dezimalsystem_2.vue'
import Dezimalsystem_3 from '../views/Dezimalsystem_3.vue'
import Romansystem_1 from '../views/Romansystem_1.vue'
import Romansystem_2 from '../views/Romansystem_2.vue'
import Romansystem_3 from '../views/Romansystem_3.vue'
import Binaersystem_1 from '../views/Binaersystem_1.vue'
import Binaersystem_2 from '../views/Binaersystem_2.vue'
import Binaersystem_3 from '../views/Binaersystem_3.vue'
import AboutView from '../views/AboutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dezimalsystem_1',
    name: 'Dezimalsystem_1',
    component: Dezimalsystem_1
  },
  {
    path: '/dezimalsystem_2',
    name: 'Dezimalsystem_2',
    component: Dezimalsystem_2
  },
  {
    path: '/dezimalsystem_3',
    name: 'Dezimalsystem_3',
    component: Dezimalsystem_3
  },
  {
    path: '/romansystem_1',
    name: 'Romansystem_1',
    component: Romansystem_1
  },
  {
    path: '/romansystem_2',
    name: 'Romansystem_2',
    component: Romansystem_2
  },
  {
    path: '/romansystem_3',
    name: 'Romansystem_3',
    component: Romansystem_3
  },
  {
    path: '/binaersystem_1',
    name: 'Binaersystem_1',
    component: Binaersystem_1
  },
  {
    path: '/binaersystem_2',
    name: 'Binaersystem_2',
    component: Binaersystem_2
  },
  {
    path: '/binaersystem_3',
    name: 'Binaersystem_3',
    component: Binaersystem_3
  },
  {
    path: '/aboutview',
    name: 'aboutview',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
