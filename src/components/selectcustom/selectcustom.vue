<template>
  <!-- <div
    class="relative flex items-center justify-between w-full mt-1 pl-3 pr-3 pt-2 pb-2 bg-gray-25 border border-gray-300 rounded-md cursor-pointer"
  >
    <span class="text-md font-medium text-gray-900">400 EUR</span>
    <IconArrowDown />
    <div class="flyWindow flex flex-col w-full top-12 left-0">
      <div class="text-sm font-medium text-gray-700 pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50">
        100 EUR
      </div>
      <div class="text-sm font-medium text-gray-700 pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50">
        200 EUR
      </div>
      <div class="text-sm font-medium text-gray-700 pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50">
        300 EUR
      </div>
      <div class="text-sm font-medium text-gray-700 pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50">
        400 EUR
      </div>
    </div>
  </div> -->

  <div
    @click="isOpen = !isOpen"
    class="relative flex items-center justify-between w-full mt-1 pl-3 pr-3 pt-2 pb-2 bg-gray-25 border border-gray-300 rounded-md cursor-pointer"
  >
    <span class="text-md font-medium text-gray-900">400 EUR</span>
    <IconArrowDown />
    <div
      v-if="isOpen"
      class="flyWindow flex flex-col w-full top-12 left-0"
    >
      <div class="flex items-center pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50">
        <img
          src="@/components/images/bitcoin-badge.png"
          class="w-4 h-4 mr-[6px]"
        >
        <div class="text-sm font-medium text-gray-700 mr-1">Bitcoin</div>
        <div class="text-sm font-medium text-gray-500 ">BTC</div>
      </div>
      <div class="flex items-center pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50">
        <img
          src="@/components/images/bitcoin-badge.png"
          class="w-4 h-4 mr-[6px]"
        >
        <div class="text-sm font-medium text-gray-700 mr-1">Bitcoin</div>
        <div class="text-sm font-medium text-gray-500 ">BTC</div>
      </div>
      <div class="text-sm font-medium text-gray-700 pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50">
        300 EUR
      </div>
      <div class="text-sm font-medium text-gray-700 pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50">
        400 EUR
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrowDown from '@/components/icons/icon-arrow-down.vue';
import { ref } from 'vue';

let isOpen = ref(false);
</script>