import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Booking from '../views/Booking.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:true
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    props:true
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking,
    props:true
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


