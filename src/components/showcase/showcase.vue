<template>
  <div class="flex flex-col w-full">
    <div 
      class="cardsGridLayout sm:pb-3"
    >
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
      <ShowcaseCard />
    </div>
    <div class="flex justify-between w-full mt-12">
      <div class="text-sm font-medium text-gray-700 pl-3 flex items-center sm:hidden">Showing 20 out of 80</div>
      <div
        class="flex items-center justify-center rounded-md border border-gray-300 bg-gray-25 shadow-xs p-3 sm:w-full cursor-pointer"
      >
        <IconLoader1 class="mr-2 sm:hidden" />
        <span class="font-medium text-md text-gray-700">Load more</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconLoader1 from '../icons/icon-loader-1.vue';
import ShowcaseCard from './showcase-card/showcase-card.vue';
</script>