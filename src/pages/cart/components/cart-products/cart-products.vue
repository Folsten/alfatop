<template>
  <div
    class="cart-products flex flex-col self-baseline w-full border border-gray-100 rounded-md bg-gray-25 mr-5 lg:mr-0 lg:bg-white lg:border-0"
  >
    <div class="cart-products-container p-6 sm:p-3 sm:pb-4 xs:p-1 xs:pb-4">
      <CartProductsItem />
      <CartProductsItem />
      <CartProductsItem />
      <CartProductsItem />
      <CartProductsItem />
    </div>
  </div>
</template>
<script setup lang="ts">
import CartProductsItem from '@/pages/cart/components/cart-products/cart-products-item/cart-products-item.vue'
</script>
