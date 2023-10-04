<template>
  <div class="flex flex-col items-center mt-14 mb-14">
    <SvgIcon name="icon-loader-1" class="w-8 h-8 text-indigo-500" />
    <h6 class="text-gray-900 font-medium text-dh6 mt-4">Your payment is confirming</h6>
    <div class="flex text-gray-500 text-xs mt-2">Please wait for required number of confirmations</div>
    <div class="text-gray-900 text-sm font-semibold mt-3">
      Confirmation received: 2 <span class="text-gray-300 text-sm font-semibold">of 3</span>
    </div>
    <div class="flex flex-col mt-4">
      <router-link to="#" class="text-indigo-500 text-xs">&ltTransaction hash> </router-link>
      <router-link to="#" class="text-indigo-500 text-xs mt-2">&ltTransaction hash></router-link>
    </div>
  </div>
  <router-link to="#" class="text-indigo-500 text-sm">Show invoice detailts</router-link>
</template>

<script setup lang="ts"></script>