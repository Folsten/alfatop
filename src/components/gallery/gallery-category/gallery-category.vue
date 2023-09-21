<template>
  <div class="mt-10 first:mt-0">
    <h4 class="text-gray-900 font-semibold text-3xl">
      Trending products in your country
    </h4>
    <p class="text-lg font-normal">
      We provide fully transparent deals without any hidden charges
    </p>
    <div class="flex flex-wrap mt-5">
      <GalleryCategoryItem />
      <GalleryCategoryItem />
      <GalleryCategoryItem />
      <GalleryCategoryItem />
      <GalleryCategoryItem />
      <GalleryCategoryItem />
      <GalleryCategoryItem />
      <GalleryCategoryItem />
    </div>
    <router-link to="#" class="flex justify-center mt-6 rounded-lg border w-[105px] text-base pt-2 pb-2 text-gray-700 ml-2">Browse All</router-link>
  </div>
</template>

<script setup lang="ts">
import GalleryCategoryItem from './gallery-category-item/gallery-category-item.vue'
</script>