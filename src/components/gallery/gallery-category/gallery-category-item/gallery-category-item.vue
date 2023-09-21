<template>
  <div class="flex flex-col w-[200px] mr-2 ml-2 mt-8">
    <div class="relative">
      <img
        src="./images/coca.jpg"
        class="rounded-md"
      >
      <div class="absolute w-full top-0 flex">
        <div class="w-full flex pt-4 pl-4 pr-4">
          <div class="bg-blue-600 text-gray-25 text-xs font-normal pt-1 pb-1 pl-3 pr-3 rounded-md">New</div>
          <div class="bg-orange-400 text-gray-25 text-xs font-normal pt-1 pb-1 pl-3 pr-3 rounded-md ml-2">Popular</div>
          <IconFavourite class="ml-auto" />
        </div>
      </div>
    </div>
    <div class="text-gray-500 text-xs mt-3">Gift Cards <span class="font-bold">/</span> Travel and Transport</div>
    <div class="text-gray-900 text-xl font-semibold mt-2">PUBG Mobile UC International</div>
    <div class="text-gray-900 text-lg font-semibold mt-2">5 EUR - 200 EUR</div>
  </div>
</template>

<script setup lang="ts">
  import IconFavourite from './icons/icon-favourite.vue';
</script>