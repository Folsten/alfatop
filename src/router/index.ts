import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../pages/home/home.vue'
import GiftCards from '../pages/gift-cards/gift-cards.vue'
import GiftCardsProduct from '../pages/gift-cards/gift-cards-product/gift-cards-product.vue'
import Mobile from '../pages/mobile/mobile.vue'
import MobileCategory from '../pages/mobile/mobile-category/mobile-category.vue'
import MobileProduct from '../pages/mobile/mobile-product/mobile-product.vue'
import Cart from '../pages/cart/cart.vue'
import Support from '../pages/support/support.vue'
import Faq from '../pages/faq/faq.vue'
import FaqArticle from '../pages/faq/faq-article/faq-article.vue'
import Register from '../pages/register/register.vue'
import LogIn from '../pages/log-in/log-in.vue'
import AccountOrders from '@/pages/account/account-orders/account-orders.vue'
import AccountOrdersOrder from '@/pages/account/account-orders/account-orders-order/account-orders-order.vue'
import ProjectRouting from "@/pages/_project-routing/project-routing.vue";
// Error pages
import Error403 from '../pages/error/403.vue'
import Error404 from '../pages/error/404.vue'
import Error500 from '../pages/error/500.vue'
import Error503 from '../pages/error/503.vue'
import ErrorComingSoon from '../pages/error/coming-soon.vue'
import AccountFavourites from '@/pages/account/account-favourites/account-favourites.vue'
import AccountReferral from "@/pages/account/account-referral/account-referral.vue";
import CartCheckout from "@/pages/cart/cart-checkout/cart-checkout.vue";
import CartCheckoutInvoice from "@/pages/cart/cart-checkout/cart-checkout-invoice/cart-checkout-invoice.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'project-routing',
      component: ProjectRouting
    },
    {
      path: '/home',
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
      name: 'faq-articles',
      component: FaqArticle
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: LogIn
    },
    {
      path: '/account/orders',
      name: 'account-orders',
      component: AccountOrders
    },
    {
      path: '/account/orders/order',
      name: 'accounts-orders-order',
      component: AccountOrdersOrder
    },
    {
      path: '/account/favourites',
      name: 'account-favourites',
      component: AccountFavourites
    },
    {
      path: '/account/referral',
      name: 'account-referral',
      component: AccountReferral
    },
    {
      path: '/cart/checkout',
      name: 'cart-checkout',
      component: CartCheckout
    },
    {
      path: '/cart/checkout/invoice',
      name: 'cart-checkout-invoice',
      component: CartCheckoutInvoice
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
      component: ErrorComingSoon
    },
  ]
})

export default router
