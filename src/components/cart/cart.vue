<template>
  <div class="flex w-full mt-10 lg:flex-col">
    <div
      class="flex flex-col self-baseline w-full border border-gray-100 rounded-md bg-gray-25 mr-5 lg:mr-0 lg:bg-white lg:border-0"
    >
      <div class="p-6 sm:p-3 sm:pb-4 xs:p-1 xs:pb-4">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
    <div
      class="flex flex-col w-full border border-gray-100 rounded-md bg-gray-50 ml-5 lg:ml-0 lg:bg-white lg:border-0 lg:border-t"
    >
      <div class="p-6 flex-col sm:p-3 sm:pt-4 xs:p-1 xs:pt-4">
        <h6 class="text-gray-900 text-dh6 font-medium">Order summary</h6>
        <div class="flex justify-between items-baseline mt-4">
          <div class="flex items-center mr-4">
            <IconItemsToPay class="mr-2" />
            <span class="text-sm text-gray-900 font-medium">Items to pay</span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm text-gray-900 font-medium">460.00 EUR</span>
            <span class="text-sm text-gray-500 font-medium text-right">-</span>
          </div>
        </div>
        <div class="flex justify-between items-baseline mt-3 sm:mt-1">
          <div class="flex items-center mr-4">
            <IconPercentage class="mr-2" />
            <span class="text-sm text-gray-900 font-medium">Items to pay</span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm text-gray-900 font-medium">460.00 EUR</span>
            <span class="text-sm text-gray-500 font-medium text-right">6.00 EUR</span>
          </div>
        </div>
        <hr class="mt-2 mb-2">
        <div class="flex flex-col">
          <div class="flex justify-between">
            <div class="flex items-center">
              <div class="mr-2 text-gray-900 text-md font-medium">Total estimate</div>
              <IconAttention />
            </div>
            <div class="flex items-center text-dh5 font-semibold text-gray-900 sm:text-mh5 xs:text-md ">
              0.01622017 BTC
            </div>
          </div>
          <div class="flex flex-col mt-10 lg:border lg:rounded-lg lg:bg-gray-50 lg:p-6 xs:p-4">
            <div class="text-dh6 text-gray-900 font-medium sm:text-mh6">Contact information</div>
            <div class="flex">
              <div class="text-gray-500 text-sm">Already have an account?</div>
              <router-link
                to="#"
                class="pl-1 text-indigo-500 text-sm"
              >Log in</router-link>
            </div>
            <div class="mt-4 text-gray-700 text-sm placeholder:font-medium">Enter email address for order status updates
            </div>
            <input
              type="text"
              class="mt-1 border border-gray-300 bg-gray-25 shadow-xs rounded-md h-[42px] pt-[10px] pb-[10px] pl-3 pr-3"
              placeholder="example@mail.com"
            >
            <div class="flex mt-6">
              <input
                type="checkbox"
                class="mr-2"
              >
              <p class="text-sm text-gray-700 font-medium">I agree to subscribe to the newsletter</p>
            </div>
            <div class="flex mt-2">
              <input
                type="checkbox"
                class="mr-2"
              >
              <p class="text-sm text-gray-700 font-medium">
                I accept
                <router-link
                  to="#"
                  class="text-indigo-500"
                >Terms of Use</router-link>
                and
                <router-link
                  to="#"
                  class="text-indigo-500"
                >Privacy Policy</router-link>
              </p>
            </div>
            <div class="flex justify-between mt-8 sm:flex-col">
              <button
                class="flex items-center justify-center rounded-md border border-gray-300 shadow-xs pl-5 pr-5 pt-2 pb-2 text-gray-700 font-medium text-md h-10"
              >Continue shopping</button>
              <button
                class="flex items-center justify-center rounded-md border border-gray-300 shadow-xs pl-5 pr-5 pt-2 pb-2 text-success-25 bg-success-500 font-medium text-md h-10 sm:mt-4"
              >Proceed to payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartItem from './cart-item/cart-item.vue';
// Icons
import IconItemsToPay from '@/components/icons/icon-items-to-pay.vue';
import IconPercentage from '@/components/icons/icon-percentage.vue';
import IconAttention from '@/components/icons/icon-attention.vue';
</script>