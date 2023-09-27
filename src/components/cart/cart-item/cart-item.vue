<template>
  <div class="flex items-center justify-between w-full mt-4 first:mt-0 sm:mt-8">
    <div class="flex">
      <img
        src="@/components/images/f226fe62521ea77679ce2f1dcc1d3698.png"
        class="w-12 h-12 rounded-md overflow-hidden mr-2 sm:w-[88px] sm:h-[88px] sm:mr-4"
        alt="product-image"
      >
      <div class="flex flex-col">
        <span class="text-md font-medium text-gray-900 xs:text-sm">Big Kahuna Burger Ltd.</span>
        <span class="text-sm font- font-medium text-gray-700">210 EUR</span>
        <div class="hidden items-center sm:flex h-full">
          <div class="flex rounded-md border border-gray-300 bg-gray-25 w-24 sm:h-8 sm:self-end">
            <div class="flex w-full justify-between items-center pl-3 pr-3 pt-2 pb-2">
              <IconRemoveUnit class="cursor-pointer" />
              <span class="pl-2 pr-2 text-gray-900 font-medium text-sm">1</span>
              <IconAddUnit class="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center sm:hidden">
      <div class="flex rounded-md border border-gray-300 bg-gray-25 mr-6 w-24">
        <div class="flex w-full justify-between items-center pl-3 pr-3 pt-2 pb-2">
          <IconRemoveUnit class="cursor-pointer" />
          <span class="pl-2 pr-2 text-gray-900 font-medium text-sm">1</span>
          <IconAddUnit class="cursor-pointer" />
        </div>
      </div>
      <IconRecycle class="cursor-pointer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconRemoveUnit from '@/components/icons/icon-remove-unit.vue';
import IconAddUnit from '@/components/icons/icon-add-unit.vue';
import IconRecycle from '@/components/icons/icon-recycle.vue';
</script>