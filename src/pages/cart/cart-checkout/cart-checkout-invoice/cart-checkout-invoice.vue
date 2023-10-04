<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div
      class="container max-w-[700px] flex flex-col pl-8 pr-8 pt-6 pb-6 bg-gray-25 border border-gray-100 rounded-md"
    >
      <div class="flex justify-between w-full">
        <div class="text-gray-900 text-dh6 font-medium" @click="i++">Invoice status (КЛИК ДЛЯ СЛЕД.)</div>
        <SvgIcon name="icon-refresh" class="w-6 h-6" />
      </div>
      <component :is="allStatusComponents[i]"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartCheckoutInvoiceStatusConfirming from '@/pages/cart/cart-checkout/cart-checkout-invoice/components/cart-checkout-invoice-status-confirming.vue'
import CartCheckoutInvoiceStatusError from '@/pages/cart/cart-checkout/cart-checkout-invoice/components/cart-checkout-invoice-status-error.vue'
import CartCheckoutInvoiceStatusExpired from '@/pages/cart/cart-checkout/cart-checkout-invoice/components/cart-checkout-invoice-status-expired.vue'
import CartCheckoutInvoiceStatusExpiredPaid from '@/pages/cart/cart-checkout/cart-checkout-invoice/components/cart-checkout-invoice-status-expired-paid.vue'
import CartCheckoutInvoiceStatusRefunded from '@/pages/cart/cart-checkout/cart-checkout-invoice/components/cart-checkout-invoice-status-refunded.vue'
import CartCheckoutInvoiceStatusSuccess from '@/pages/cart/cart-checkout/cart-checkout-invoice/components/cart-checkout-invoice-status-success.vue'
import { ref } from 'vue'

let i = ref(0)

let allStatusComponents =
[
  CartCheckoutInvoiceStatusConfirming,
  CartCheckoutInvoiceStatusError,
  CartCheckoutInvoiceStatusExpired,
  CartCheckoutInvoiceStatusExpiredPaid,
  CartCheckoutInvoiceStatusRefunded,
  CartCheckoutInvoiceStatusSuccess,
]
</script>