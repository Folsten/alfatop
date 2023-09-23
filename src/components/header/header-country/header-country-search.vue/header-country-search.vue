<template>
  <div class="relative w-full">
    <input
      type="text"
      class="w-full items-center flex pl-8 pr-1 border-2 pt-1 pb-1 rounded-lg text-sm"
      placeholder="Search..."
    >
    <IconLoop class="w-[16px] h-[16px] absolute top-[calc(50%-8px)] left-3" />
  </div>
</template>

<script setup lang="ts">
import IconLoop from '@/components/icons/icon-loop.vue';
</script>