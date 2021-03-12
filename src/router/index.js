import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Introduce from '../views/Introduce.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/projects', name: 'Projects', component: Projects},
  {path: '/introduce', name: 'Introduce', component: Introduce},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
