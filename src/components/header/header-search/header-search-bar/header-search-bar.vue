<template>
  <div class="flex items-center pr-3 pt-2 pb-2 w-full">
    <IconLoop class="w-auto h-[20px] mr-2" />
    <input
      type="text"
      class="w-full relative items-center flex pr-1"
      placeholder="Search..."
    >
  </div>
</template>

<script setup lang="ts">
  import IconLoop from '~/icons/icon-loop.vue';
</script>