<template>
  <div class="flex items-center justify-center ml-2">
    <!-- <div class="flex items-center justify-center w-28 text-gray-700 h-10 rounded-lg text-sm border-2 cursor-pointer">
      <div class="mr-3">Log in</div>
      <IconLogin />
    </div> -->
    <div class="flex items-center text-sm justify-center text-gray-700 cursor-pointer">
      <IconMyAccount class="mr-2"/>
      <span>My account</span>
      <IconArrowDown class="ml-2"/>
    </div>
  </div>
</template>

<script setup lang="ts">
//Icons
import IconArrowDown from '~/icons/icon-arrow-down.vue';
import IconLogin from './icons/IconLogin.vue';
import IconMyAccount from '~/icons/icon-my-account.vue';
</script>