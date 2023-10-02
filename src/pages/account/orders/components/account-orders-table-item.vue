<template>
  <!-- XL+ VERSION -->
  <div class="flex w-full items-start h-[72px] border-b border-b-gray-100 pt-2.5 pb-2.5 xl:hidden">
    <div class="flex w-[20%] text-gray-900 text-md font-medium pr-4 pl-4">12345678910</div>
    <div class="flex w-[35%] items-center pr-4">
      <img src="../../../../assets/images/playstation.png" class="h-10 w-10 rounded-lg" />
      <div class="flex flex-col w-full justify-start ml-2">
        <div class="flex w-full">
          <div class="text-md font-medium text-gray-900">Amazon.es Spain</div>
          <div class="text-sm font-medium text-gray-400 ml-5">+3 more</div>
        </div>
        <div class="text-sm text-gray-500">20 EUR</div>
      </div>
    </div>
    <div class="flex w-[20%] flex-col text-center pr-4">
      <div class="text-gray-900 text-sm font-medium text-right">8.56411352 USDT</div>
      <div class="text-xs text-gray-500 font-medium text-right">8456.56 EUR</div>
    </div>
    <div class="flex w-[15%] ml-auto items-center">
      <SvgIcon name="icon-lightning-blue" class="w-4 h-4" />
      <div class="text-sm text-gray-900 font-medium pl-2">Paid</div>
    </div>
  </div>
  <!-- XL- VERSION -->
  <div class="hidden flex-col rounded-md border border-gray-100 pt-4 pb-4 pl-3 pr-5 xl:flex">
    <div class="flex border-b border-gray-100 pb-2">
      <div class="mr-1 text-gray-900 text-sm font-medium sm:text-xs">Order:</div>
      <router-link to="#" class="text-sm font-medium text-indigo-500 sm:text-xs">123456789109876543212345</router-link>
    </div>
    <div class="flex items-center border-b border-gray-100 mt-2 pb-2">
      <img src="@/assets/images/playstation.png" class="w-8 h-8 rounded-lg mr-2">
      <div class="text-gray-900 font-medium text-sm sm:text-xs">Amazon.es Spain</div>
      <div class="text-gray-400 font-medium text-sm ml-auto sm:text-xs">+3 more</div>
    </div>
    <div class="text-gray-900 font-medium text-sm mb-2 mt-2 sm:text-xs">
      8.56411352 USDT TRC-20
    </div>
    <div class="flex justify-between">
      <div class="text-sm text-gray-500 font-medium sm:text-xs">8456.56 EUR</div>
      <div class="flex items-center">
        <SvgIcon name="icon-lightning-yellow" class="w-4 h-4 sm:w-3 sm:h-3"/>
        <div class="ml-2 font-semibold text-gray-900 text-sm sm:text-xs sm:ml-1">NEW</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from "~/svg-icon/svg-icon.vue";
</script>
