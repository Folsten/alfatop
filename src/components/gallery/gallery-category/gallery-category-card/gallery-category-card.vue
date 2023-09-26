<template>
  <div
    class="flex w-full min-w-[190px] flex-col mt-8"
  >
    <div class="relative">
      <img
        src="../../../images/coca.jpg"
        class="rounded-md w-full object-cover max-h-[250px]"
      >
      <div class="absolute w-full top-0 flex">
        <div class="w-full flex pt-4 pl-4 pr-4">
          <div class="bg-blue-600 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md">New
          </div>
          <div
            class="bg-orange-400 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md ml-2"
          >Popular</div>
          <IconFavourite class="ml-auto cursor-pointer sm:hidden" />
        </div>
      </div>
    </div>
    <div class="text-gray-500 text-xs mt-3">Gift Cards<span class="font-bold text-xs pl-1 pr-1">/</span>Travel and
      Transport</div>
    <div class="text-gray-900 text-dh6 font-semibold mt-2 md:text-mh6">PUBG Mobile UC International</div>
    <div class="text-gray-900 text-md font-semibold mt-2">5 EUR - 200 EUR</div>
  </div>
</template>

<script setup lang="ts">
import IconFavourite from '~/icons/icon-favourite.vue';
</script>