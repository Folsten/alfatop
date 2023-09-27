import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import GiftCards from '../pages/gift-cards/gift-cards.vue'
import GiftCardsProduct from '../pages/gift-cards/gift-cards-product/gift-cards-product.vue'
import Mobile from '../pages/mobile/mobile.vue';
import MobileCategory from '../pages/mobile/mobile-category/mobile-category.vue';
import MobileProduct from '../pages/mobile/mobile-product/mobile-product.vue';
import Cart from '../pages/cart.vue';

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
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile
    },
    {
      path: '/mobile/category',
      name: 'mobile-category',
      component: MobileCategory
    },
    {
      path: '/mobile/product',
      name: 'mobile-product',
      component: MobileProduct
    },
    { 
      path: '/cart',
      name: 'cart',
      component: Cart
    },
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
