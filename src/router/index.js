import { createRouter, createWebHistory } from 'vue-router'
import ShortenPageView from '../views/ShortenPageView.vue'
import QrCodePageView from '../views/QrCodePageView.vue'

const routes = [
  {
    path: '/',
    name: 'shorten',
    component: ShortenPageView
  },


  {
    path: '/qrcode',
    name: 'qrcode',
    component: QrCodePageView 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
