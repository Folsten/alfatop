<template>
  <div
    @click="isRadioActive = !isRadioActive"
    :class="{'border-indigo-600': isRadioActive}"
    class="flex justify-center items-center w-4 h-4 rounded-full border border-gray-300"
  >
    <div v-if="isRadioActive" class="w-2 h-2 bg-indigo-600 rounded-full"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let isRadioActive = ref(false)
</script>