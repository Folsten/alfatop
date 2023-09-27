import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import GiftCards from '../pages/gift-cards/gift-cards.vue'
import GiftCardsProduct from '../pages/gift-cards/gift-cards-product/gift-cards-product.vue'
import Mobile from '../pages/mobile/mobile.vue';
import MobileCategory from '../pages/mobile/mobile-category/mobile-category.vue';
import MobileProduct from '../pages/mobile/mobile-product/mobile-product.vue';
import Cart from '../pages/cart.vue';
import Support from '../pages/support.vue';
import Faq from '../pages/faq/faq.vue';
import FaqArticle from '../pages/faq/faq-article/faq-article.vue';
// Error pages
import Error403 from '../pages/error/403.vue';
import Error404 from '../pages/error/404.vue';
import Error500 from '../pages/error/500.vue';
import Error503 from '../pages/error/503.vue';
import ErrorComingsoon from '../pages/error/coming-soon.vue';

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
    {
      path: '/support',
      name: 'support',
      component: Support
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/faq/article',
      name: 'faq-article',
      component: FaqArticle
    },

    // Error pages
    
    {
      path: '/error/403',
      name: 'error-403',
      component: Error403
    },
    {
      path: '/error/404',
      name: 'error-404',
      component: Error404
    },
    {
      path: '/error/500',
      name: 'error-500',
      component: Error500
    },
    {
      path: '/error/503',
      name: 'error-503',
      component: Error503
    },
    {
      path: '/error/coming-soon',
      name: 'error-coming-soon',
      component: ErrorComingsoon
    }
  ]
})

export default router
