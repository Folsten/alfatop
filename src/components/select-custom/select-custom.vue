<template>
  <!-- <div
    class="relative flex items-center justify-between w-full mt-1 pl-3 pr-3 pt-2 pb-2 bg-gray-25 border border-gray-300 rounded-md cursor-pointer"
  >
    <span class="text-md font-medium text-gray-900">400 EUR</span>
    <IconArrowDown />
    <div class="fly-window flex flex-col w-full top-12 left-0">
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
    @click="isOpen = true"
    v-click-outside="outsideClickHandler"
    class="select-custom relative flex items-center justify-between w-full mt-1 pl-3 pr-3 pt-2 pb-2 bg-gray-25 border border-gray-300 rounded-md cursor-pointer"
  >
    <span class="select-custom__selected-text text-md font-medium text-gray-900">400 EUR</span>
    <SvgIcon name="icon-arrow-down" :class="{'rotate-180': isOpen}" class="select-custom__selected-icon transition-all w-4 h-4" />
    <Transition name="fade-010">
    <div
      v-if="isOpen"
      class="select-custom__fly-window fly-window flex flex-col w-full top-12 left-0"
    >
      <div
        class="select-custom__row flex items-center pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50"
      >
        <img
          src="@/assets/images/bitcoin-badge.png"
          class="select-custom__row-icon w-4 h-4 mr-[6px]"
          alt="bitcoin"
        />
        <div class="select-custom__row-text text-sm font-medium text-gray-700 mr-1">Bitcoin</div>
        <div class="select-custom__row-abbr text-sm font-medium text-gray-500">BTC</div>
      </div>
      <div
        class="select-custom__row flex items-center pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50"
      >
        <img
          src="@/assets/images/bitcoin-badge.png"
          class="select-custom__row-icon w-4 h-4 mr-[6px]"
          alt="bitcoin"
        />
        <div class="select-custom__row-text text-sm font-medium text-gray-700 mr-1">Bitcoin</div>
        <div class="select-custom__row-abbr text-sm font-medium text-gray-500">BTC</div>
      </div>
      <div
        class="select-custom__row text-sm font-medium text-gray-700 pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50"
      >
        300 EUR
      </div>
      <div
        class="select-custom__row text-sm font-medium text-gray-700 pl-4 pr-4 pt-2 pb-2 transition-all cursor-pointer hover:bg-indigo-50"
      >
        400 EUR
      </div>
    </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let isOpen = ref(false)

function outsideClickHandler() {isOpen.value = false}
</script>
