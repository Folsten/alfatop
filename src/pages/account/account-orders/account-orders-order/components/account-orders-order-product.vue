<template>
  <!-- LG+ -->
  <div class="account-orders-order-product flex w-full items-center mt-8 lg:hidden">
    <img class="w-10 h-10 rounded-md mr-4" src="@/assets/images/playstation.png" />
    <div class="flex flex-col mr-4">
      <div class="text-sm leading-5 text-gray-900 font-medium">Amazon.es Spain</div>
      <div class="text-sm leading-5 font-medium text-gray-700">20 EUR</div>
    </div>
    <div class="text-gray-900 font-medium ml-auto mr-auto">1</div>
    <div class="flex items-center ml-auto mr-auto">
      <VueCustomTooltip label="Tooltip text will be there">
        <SvgIcon name="icon-lightning-green" class="w-4 h-4" />
      </VueCustomTooltip>
      <div class="text-sm font-semibold text-gray-900 ml-2">Completed</div>
    </div>
    <button class="btn btn-neutral h-[42px] pl-3 pr-3 pt-1.5 pb-1.5">
      <SvgIcon name="icon-favourite-filled" class="w-4 h-4 mr-2" />
      <span class="flex text-sm">Add to favourites</span>
    </button>
  </div>

  <!-- LG- -->
  <div class="hidden flex-col w-full lg:flex">
    <div class="flex mt-8">
      <img class="w-10 h-10 rounded-md mr-4" src="@/assets/images/playstation.png" />
      <div class="flex flex-col mr-4">
        <div class="text-sm leading-5 text-gray-900 font-medium">Amazon.es Spain</div>
        <div class="text-sm leading-5 font-medium text-gray-700">20 EUR</div>
      </div>
      <div class="ml-auto text-gray-500 text-sm font-medium">1</div>
    </div>
    <div class="flex justify-between mt-6">
      <div class="flex items-center">
        <VueCustomTooltip position="is-right" label="Tooltip text will be there">
          <SvgIcon name="icon-lightning-green" class="w-4 h-4" />
        </VueCustomTooltip>
        <div class="text-sm font-semibold text-gray-900 ml-2">Completed</div>
      </div>
      <div class="flex items-center">
        <SvgIcon name="icon-favourite-filled" class="w-4 h-4 mr-2" />
        <div class="flex text-sm text-gray-700 font-medium">Add to favourites</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { VueCustomTooltip } from '@adamdehaven/vue-custom-tooltip'
</script>
