<template>
  <div class="flex flex-col items-center mt-14">
    <SvgIcon name="icon-zipper-alarm-clock" class="w-8 h-8 text-indigo-500" />
    <h6 class="text-gray-900 font-medium text-dh6 mt-4">Sorry, this invoice has expired!</h6>
    <router-link to="#" class="text-indigo-500 mt-14 self-start text-sm">Show invoice details</router-link>
    <button class="btn btn-indigo w-full mt-5 h-[48px]">Try again</button>
  </div>
</template>
<script setup lang="ts"></script>