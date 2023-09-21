<template>
  <div class="relative w-full max-w-[560px] ml-auto mr-auto lg:max-w-sm md:max-w-xs sm:max-w-[200px]">
    <input
      type="text"
      class="w-full items-center flex pt-2 pb-2 pl-8 pr-1 border-2 rounded-lg text-sm"
      placeholder="Search..."
    >
    <IconLoop class="w-[16px] h-[16px] absolute top-[calc(50%-8px)] left-3" />
  </div>
</template>

<script setup lang="ts">
  import IconLoop from './icons/icon-loop.vue';
</script>