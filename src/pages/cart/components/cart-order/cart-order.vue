<template>
  <div
    class="cart-order flex flex-col w-full border border-gray-100 rounded-md bg-gray-50 ml-5 lg:ml-0 lg:bg-white lg:border-0 lg:border-t"
  >
    <div class="cart-order__main-container p-6 flex-col sm:p-3 sm:pt-4 xs:p-1 xs:pt-4">
      <h6 class="cart-order__title text-gray-900 text-dh6 font-medium">Order summary</h6>
      <div class="cart-order__row flex justify-between items-baseline mt-4">
        <div class="cart-order__detail-container flex items-center mr-4">
          <SvgIcon name="icon-items-to-pay" class="cart-order__detail-icon mr-2 w-4 h-4" />
          <span class="cart-order__detail-text text-sm text-gray-900 font-medium"
            >Items to pay</span
          >
        </div>
        <div class="cart-order__sum-container flex flex-col">
          <span class="cart-order__sum-primary text-sm text-gray-900 font-medium">460.00 EUR</span>
          <span class="cart-order__sim-secondary text-sm text-gray-500 font-medium text-right"
            >-</span
          >
        </div>
      </div>
      <div class="cart-order__row flex justify-between items-baseline mt-3 sm:mt-1">
        <div class="cart-order__detail-container flex items-center mr-4">
          <SvgIcon name="icon-percentage" class="cart-order__detail-icon mr-2 w-4 h-4" />
          <span class="cart-order__detail-text text-sm text-gray-900 font-medium"
            >Processing fee</span
          >
        </div>
        <div class="cart-order__sum-container flex flex-col">
          <span class="cart-order__sum-primary text-sm text-gray-900 font-medium">460.00 EUR</span>
          <span class="cart-order__sum-secondary text-sm text-gray-500 font-medium text-right"
            >6.00 EUR</span
          >
        </div>
      </div>
      <hr class="mt-3 mb-3" />
      <div class="cart-order__bottom-wrapper flex flex-col">
        <div class="cart-order__bottom-container flex justify-between">
          <div class="cart-order__estimate flex items-center">
            <div class="cart-order__estimate-text mr-2 text-gray-900 text-md font-medium">
              Total estimate
            </div>
            <SvgIcon name="icon-attention" class="cart-order__estimate-icon w-4 h-4" />
          </div>
          <div
            class="cart__order-estimate-sum flex items-center text-dh5 font-semibold text-gray-900 sm:text-mh5 xs:text-md"
          >
            0.01622017 BTC
          </div>
        </div>
        <CartOrderForm />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CartOrderForm from '@/pages/cart/components/cart-order/cart-order-form/cart-order-form.vue'
</script>
