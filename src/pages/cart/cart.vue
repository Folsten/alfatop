<template>
  <Header />
  <div class="cart-page container mt-4">
    <Crumbs />
    <SearchInternal class="hidden mt-10 mb-10 md:flex" />
    <div class="cart flex w-full mt-10 lg:flex-col">
      <CartProducts />
      <CartOrder />
    </div>
    <GalleryCategory class="mt-36 lg:mt-16 md:mt-8" />
    <Newsletter class="mt-40 mb-40 sm:mt-20 sm:mb-20" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/header/header.vue'
import Crumbs from '~/crumbs/crumbs.vue'
import SearchInternal from '~/search-internal/search-internal.vue'
import GalleryCategory from '~/gallery/gallery-category/gallery-category.vue'
import Newsletter from '~/newsletter/newsletter.vue'
import Footer from '~/footer/footer.vue'
import CartOrder from '@/pages/cart/components/cart-order/cart-order.vue'
import CartProducts from '@/pages/cart/components/cart-products/cart-products.vue'
</script>
