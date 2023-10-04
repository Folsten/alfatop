<template>
  <div class="flex flex-col items-center mt-14">
    <SvgIcon name="icon-zipper-alarm-clock" class="w-8 h-8 text-indigo-500" />
    <h6 class="text-gray-900 font-medium text-dh6 mt-4">Expired invoice paid!</h6>
    <div class="flex text-gray-500 text-xs mt-2">Please, contact merchant for further instructions.</div>
    <router-link to="#" class="text-indigo-500 mt-14 self-start text-sm">Show invoice details</router-link>
    <button class="btn btn-indigo w-full mt-6 h-[48px]">Contact merchant</button>
  </div>
</template>
<script setup lang="ts">
</script>