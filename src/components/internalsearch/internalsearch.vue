<template>
  <div class="flex w-full items-center rounded-md border border-gray-300 bg-gray-25 shadow-xs pt-2 pb-2 pl-3 pr-3">
    <IconLoop class="" />
    <input
      type="text"
      placeholder="Search..."
      class="ml-2 text-sm font-medium"
    >
  </div>
</template>

<script setup lang="ts">
import IconLoop from '@/components/icons/icon-loop.vue'
</script>