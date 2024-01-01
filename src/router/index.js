import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ],
  scrollBehavior(to, from, savedPostion) {
    return {
      top: 0
    }
    
  }
})

export default router
