<template>
  <div class="flex w-full min-w-[190px] flex-col mt-8">
    <div class="relative">
      <img src="../../../../assets/images/coca.jpg" class="rounded-md w-full object-cover h-48" />
      <div class="absolute w-full top-0 flex">
        <div class="w-full flex items-center pt-4 pl-4 pr-4">
          <div class="bg-blue-600 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md">
            New
          </div>
          <div
            class="bg-orange-400 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md ml-2"
          >
            Popular
          </div>
          <SvgIcon
            @click="favouriteAdded = true"
            v-if="!favouriteAdded"
            name="icon-favourite"
            class="w-5 h-5 ml-auto cursor-pointer text-warning-300 mb-1 select-none sm:hidden"
          />
          <SvgIcon
            @click="favouriteAdded = false"
            v-if="favouriteAdded"
            name="icon-favourite-filled"
            class="w-5 h-5 ml-auto cursor-pointer text-warning-300 mb-1 select-none sm:hidden"
          />
        </div>
      </div>
    </div>
    <div class="text-gray-500 text-xs mt-3">
      Gift Cards<span class="font-bold text-xs pl-1 pr-1">/</span>Travel and Transport
    </div>
    <div class="text-gray-900 text-dh6 font-semibold mt-2 md:text-mh6">
      PUBG Mobile UC International
    </div>
    <div class="text-gray-900 text-md font-semibold mt-2">5 EUR - 200 EUR</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let favouriteAdded = ref(false)
</script>