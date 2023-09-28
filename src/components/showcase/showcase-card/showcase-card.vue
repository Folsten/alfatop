<template>
  <div class="flex flex-col mt-8 w-full xs:flex-row">
    <div class="relative">
      <img
        src="../../images/playstation.png"
        class="rounded-md w-full object-cover h-48"
      >
      <div class="absolute w-full top-0 flex xs:hidden">
        <div class="w-full flex pt-4 pl-4 pr-4 sm:pt-2 sm:pl-2 sm:pr-2">
          <div class="bg-blue-600 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md sm:pl-2 sm:pr-2">New
          </div>
          <div
            class="bg-orange-400 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md ml-2 sm:pl-1 sm:pr-1 sm:pb-1 sm:pt-1"
          >Popular</div>
          <IconFavourite class="ml-auto cursor-pointer sm:hidden" />
          <SvgIcon
            name="icon-favourite"
            class="w-4 h-4 ml-auto cursor-pointer sm:hidden"
          />
        </div>
      </div>
    </div>
    <div class="flex-col xs:ml-3">
      <div class="flex">
        <div
          class="bg-blue-600 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md hidden sm:pl-2 sm:pr-2 xs:flex"
        >New
        </div>
        <div
          class="bg-orange-400 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md ml-2 hidden sm:pl-1 sm:pr-1 sm:pb-1 sm:pt-1 xs:flex"
        >Popular</div>
      </div>
      <div class="text-gray-500 text-xs mt-3 xs:hidden">Gift Cards<span class="font-bold text-xs pl-1 pr-1">/</span>Travel
        and
        Transport</div>
      <div class="text-gray-900 text-dh6 font-semibold mt-2 md:text-mh6 xs:text-md">PUBG Mobile UC International</div>
      <div class="text-gray-900 text-md font-semibold mt-2">5 EUR - 200 EUR</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>