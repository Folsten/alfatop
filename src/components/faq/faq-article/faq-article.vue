<template>
  <div class="flex flex-col w-full">
    <div class="relative flex items-center">
      <SvgIcon name="icon-paperclip" class="min-w-[20px] min-h-[20px] w-5 h-5 text-indigo-500 translate-y-[7px] mr-2"/>
      <h6 class="text-dh6 text-gray-900 font-medium sm:text-mh6">What types of digital gift cards are available on
        ALFAtop?</h6>
    </div>
    <div class="flex-col w-full pl-[29px] mt-5 xs:pl-0">
      <p class="text-sm text-gray-500">Last updated on April 26, 2022</p>
      <p class="text-md text-gray-900 mt-5">ALFAtop offers a wide range of digital gift cards from popular brands such as
        Amazon, Netflix, Spotify, iTunes, Google Play, Steam, and more. You can browse the full list of available gift
        cards on our website <router-link to="#" class="text-indigo-500">here</router-link>.</p>
      <div class="flex justify-between mt-5">
        <button class="btn btn-neutral pl-4 pr-4 pt-2.5 pb-2.5">Previous article</button>
        <button class="btn btn-neutral pl-4 pr-4 pt-2.5 pb-2.5">Next article</button>
      </div>
      <router-link to="#" class="flex text-indigo-500 text-sm mt-5">Back to article list</router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import SelectCustom from "~/select-custom/select-custom.vue";
</script>