<template>
  <button
    @click="isCheckboxActive = !isCheckboxActive"
    :class="{'bg-indigo-600': isCheckboxActive}"
    class="flex justify-center items-center w-4 h-4 border bg-white rounded-[2px] border-gray-300 cursor-pointer"
  >
    <SvgIcon name="icon-checkbox-mark" class="text-white w-4 h-4"/>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let isCheckboxActive = ref(false)
</script>