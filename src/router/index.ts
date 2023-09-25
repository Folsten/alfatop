import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import GiftCards from '../pages/gift-cards/gift-cards.vue'
import GiftCardsProduct from '../pages/gift-cards/product/gift-cards-product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gift-cards',
      name: 'gift-cards',
      component: GiftCards
    },
    {
      path: '/gift-cards/product',
      name: 'gift-cards-card',
      component: GiftCardsProduct
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   route level code-splitting
    //   this generates a separate chunk (About.[hash].js) for this route
    //   which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
