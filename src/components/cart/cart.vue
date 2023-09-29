<template>
  <div class="cart flex w-full mt-10 lg:flex-col">
    <CartProducts/>
    <CartOrder/>
  </div>
</template>

<script setup lang="ts">
import CartProducts from "~/cart/cart-products/cart-products.vue";
import CartOrder from "~/cart/cart-order/cart-order.vue";
</script>