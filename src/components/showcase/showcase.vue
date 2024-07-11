<template>
  <div class="showcase flex flex-col w-full">
    <div class="showcase__cards-container cards-grid-layout sm:pb-3">
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
    <div class="showcase__bottom-container flex justify-between w-full mt-12">
      <div
        class="showcase__bottom-show-counter text-sm font-medium text-gray-700 pl-3 flex items-center sm:hidden"
      >
        Showing 20 out of 80
      </div>
      <button class="showcase__bottom-btn btn btn-neutral p-3 sm:w-full">
        <SvgIcon
          name="icon-loader-1"
          class="showcase__bottom-btn-loader-icon w-4 h-4 mr-2 sm:hidden text-gray-700"
        />
        <span class="showcase__bottom-btn-text font-medium text-md text-gray-700">Load more</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShowcaseCard from './showcase-card/showcase-card.vue'
</script>
