import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Noticias from '@/pages/Noticias.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: Noticias
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
