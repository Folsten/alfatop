<template>
  <router-link
    @click="isMarked = !isMarked"
    to="#"
    class="header-menu-item text-gray-700 font-medium hover:bg-indigo-50 p-3 pl-4 pr-4 transition-all rounded-md md:rounded-none md:pb-2 md:border-b-2 md:hover:bg-white"
    :class="[isMarked ? 'border-b-indigo-500' : '']"
    >Trending</router-link
  >
</template>

<script setup lang="ts">
import { ref } from 'vue'

let isMarked = ref(false)
</script>
