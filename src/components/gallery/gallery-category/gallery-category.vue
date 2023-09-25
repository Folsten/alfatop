<template>
  <div class="mt-10 first:mt-0">
    <h4 class="text-gray-900 font-semibold text-dh4 ml-2 md:text-mh4">
      Trending products in your country
    </h4>
    <p class="text-lg font-normal ml-2 md:text-md">
      We provide fully transparent deals without any hidden charges
    </p>
    <div class="flex flex-wrap overflow-x-auto w-full sm:flex-nowrap sm:pb-3">
      <GalleryCategoryCard />
      <GalleryCategoryCard />
      <GalleryCategoryCard />
      <GalleryCategoryCard />
      <GalleryCategoryCard />
      <GalleryCategoryCard />
      <GalleryCategoryCard />
      <GalleryCategoryCard />
    </div>
    <router-link
      to="#"
      class="flex justify-center mt-8 rounded-lg border w-[105px] text-md pt-2 pb-2 text-gray-700 ml-2 shadow-xs sm:mt-4 sm:ml-0 sm:w-full"
    >Browse All</router-link>
  </div>
</template>

<script setup lang="ts">
import GalleryCategoryCard from './gallery-category-card/gallery-category-card.vue';
</script>