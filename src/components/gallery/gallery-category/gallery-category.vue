<template>
  <div class="gallery-category mt-10 first:mt-0">
    <h4 class="text-gray-900 font-semibold text-dh4 md:text-mh4">
      Trending products in your country
    </h4>
    <p class="text-lg font-normal md:text-md">
      We provide fully transparent deals without any hidden charges
    </p>
    <div 
      class="cardsGridLayout overflow-x-auto sm:flex sm:flex-nowrap sm:pb-3"
      :style="{'grid-template-columns': gridCardWidthStyles}"
    >
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
      class="flex justify-center mt-8 rounded-lg border w-[105px] text-md pt-2 pb-2 text-gray-700 shadow-xs sm:mt-4 sm:ml-0 sm:w-full"
    >Browse All</router-link>
  </div>
</template>

<script setup lang="ts">
import GalleryCategoryCard from './gallery-category-card/gallery-category-card.vue';

const props = defineProps({
  cardWidth: {
    type: Number,
    default: 190
  }
})

let gridCardWidthStyles = `repeat(auto-fit, minmax(${props.cardWidth}px, 1fr))`
</script>