import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue')
  },
  {
    path: '/agreement',
    name: 'Agreement',
    component: () => import(/* webpackChunkName: "about" */ '../views/Agreement.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
