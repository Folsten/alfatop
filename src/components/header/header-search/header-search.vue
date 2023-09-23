<template>
  <div
    class="flex w-full max-w-[560px] ml-auto mr-auto border rounded-lg text-sm shadow-xs lg:max-w-sm md:max-w-xs sm:max-w-[200px]"
  >
    <div class="flex items-center p-3 pt-2 pb-2 w-full">
      <div class="flex items-center text-gray-500 font-medium text-sm whitespace-nowrap cursor-pointer">
        <div>Choose category</div>
        <IconArrowDown class="text-md ml-2" />
      </div>
      <hr class="h-full w-[1px] ml-2 mr-2 bg-gray-300">
      <IconLoop class="w-auto h-[28px] mr-2" />
      <input
        type="text"
        class="w-full relative items-center flex pr-1"
        placeholder="Search..."
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderSearchCategory from './header-search-category/header-search-category.vue';
import HeaderSearchBar from './header-search-bar/header-search-bar.vue';
// Icons
import IconLoop from '~/icons/icon-loop.vue';
import IconArrowDown from '@/components/icons/icon-arrow-down.vue';
</script>