<template>
  <Header />
  <div class="container flex flex-col mt-4">
    <Crumbs />
    <div class="flex w-full justify-center mt-14">
      <div class="flex flex-col w-full max-w-[580px] border border-gray-100 rounded-lg p-6">
        <div class="flex items-center justify-between w-full">
          <div class="text-dh6 font-medium text-gray-900 sm:text-mh6">Pay with BTC</div>
          <div class="flex">
            <SvgIcon name="icon-qr-code" class="w-6 h-6 mr-4 cursor-pointer" />
            <SvgIcon
              @click="isPopupVisible = true"
              name="icon-refresh"
              class="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
        <div class="hidden relative w-full justify-center items-center mt-8 sm:flex">
          <SvgIcon name="icon-btc" class="absolute w-10 h-10 z-0" />
          <div
            class="flex justify-center items-center w-[250px] bg-gray-25 rounded-md border border-gray-100"
          >
            <img src="./images/qr-code.png" alt="qr-code" />
          </div>
        </div>
        <div class="flex flex-col w-full mt-8">
          <div class="flex flex-col w-full">
            <div class="text-gray-900 text-sm mb-1">Send this exact amount of:</div>
            <div class="flex w-full">
              <div
                class="flex items-center input-text w-full mr-4 h-[42px] text-md font-medium text-gray-900 sm:bg-gray-100 sm:border-none"
              >
                0.01 BTC
              </div>
              <div
                class="flex items-center rounded-md pt-3 pb-3 pl-4 pr-4 bg-indigo-500 cursor-pointer"
              >
                <SvgIcon name="icon-copy-2" class="w-4 h-4 text-gray-25" />
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full mt-4">
            <div class="text-gray-900 text-sm mb-1">Send this exact amount of:</div>
            <div class="flex w-full">
              <div
                class="input-text w-full mr-4 h-[42px] text-md font-medium text-gray-900 overflow-hidden text-ellipsis inline-block mt-auto mb-auto leading-[21px] sm:bg-gray-100 sm:border-none"
              >
                bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
              </div>
              <div
                class="flex items-center rounded-md pt-3 pb-3 pl-4 pr-4 bg-indigo-500 cursor-pointer"
              >
                <SvgIcon name="icon-copy-2" class="w-4 h-4 text-gray-25" />
              </div>
            </div>
          </div>
          <div class="flex justify-around w-full p-10 bg-gray-100 rounded-md mt-8 lg:pl-4 lg:pr-4">
            <div class="flex">
              <div class="text-md text-gray-900 font-semibold mr-4">Paid:</div>
              <div class="text-md text-success-500 font-semibold">0.005 BTC</div>
            </div>
            <div class="flex">
              <div class="text-md text-gray-900 font-semibold mr-4">Due:</div>
              <div class="text-md text-indigo-500 font-semibold">0.005 BTC</div>
            </div>
          </div>
          <div class="flex w-full flex-col mt-8">
            <div class="flex mb-2">
              <div class="mr-4">Time left to proceed:</div>
              <div class="text-sm font-medium text-error-400">12:23</div>
            </div>
            <div class="relative flex w-full bg-gray-100 rounded-md h-2">
              <div class="absolute w-2/3 bg-indigo-500 h-2 left-0 top-0 rounded-md"></div>
            </div>
          </div>
          <router-link to="#" class="mt-8 text-sm text-indigo-500">
            Show invoice details
          </router-link>
          <button class="btn btn-success mt-8 h-[48px] font-semibold text-md text-success-25">
            Make payment
          </button>
        </div>
      </div>
    </div>
    <Newsletter class="mt-40 mb-40 lg:mt-20 lg:mb-20" />
    <Footer />
  </div>
  <div
    v-if="isPopupVisible"
    class="fixed left-0 top-0 w-full h-screen flex items-center justify-center z-10"
  >
    <div
      class="w-full h-[90vh] ml-4 mr-4 max-h-[500px] max-w-[382px] flex flex-col justify-center rounded-xl overflow-hidden shadow-xl"
    >
      <div
        class="min-h-[200px] h-[40%] p-4 relative w-full flex flex-col justify-center items-center bg-error-400"
      >
        <SvgIcon
          @click="isPopupVisible = false"
          name="icon-cross"
          class="cursor-pointer absolute right-4 top-4 w-6 h-6"
        />
        <div class="text-dh5 font-medium text-white text-center">Time left to proceed:</div>
        <div class="text-[52px] text-white font-semibold sm:text-[44px]">04:59</div>
      </div>
      <div class="h-[60%] bg-gray-25 p-6 flex flex-col items-center w-full">
        <div class="flex justify-center text-center text-gray-900 text-[24px] font-medium xs:text-[20px]">This invoice will expire soon!</div>
        <div class="flex justify-center text-gray-500 text-md text-center pt-4 mb-2">
          If you don't finalize your payment within 15 minutes, your order will be cancelled. Feel
          free to retry later.
        </div>
        <button class="btn btn-neutral w-full mt-auto text-blue-gray-700">I understand</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from '~/header/header.vue'
import Crumbs from '~/crumbs/crumbs.vue'
import Newsletter from '~/newsletter/newsletter.vue'
import Footer from '~/footer/footer.vue'
import { ref } from 'vue'

let isPopupVisible = ref(false)
</script>