<template>
  <div
    class="flex items-center ml-2 cursor-pointer relative"
    @click="toggleFlyWindow(true)"
  >
    <IconCyprus class="h-[20px] w-[20px] mr-2" />
    <div class="text-gray-500 text-sm font-medium">
      Cyprus
    </div>
    <div class="ml-1">
      <IconArrowDown />
    </div>
    <div
      v-if="isOpen"
      class="cursor-default"
    >
      <div class="fly-window w-[280px] top-8 left-0">
        <div class="mt-3 mb-4 ml-3 mr-3">
          <div class="flex justify-start">
            <IconCyprus class="h-[20px] w-[20px]" />
            <div class="flex flex-col pl-2 items-start">
              <span class="text-gray-900 text-sm font-medium">International</span>
              <span class="text-gray-500 text-xs font-normal">Browse products available globally</span>
            </div>
          </div>
          <hr class="mt-2 mb-2">
          <div class="flex flex-col">
            <div class="relative w-full">
              <input
                type="text"
                class="w-full items-center flex pl-8 pr-1 border-2 pt-1 pb-1 rounded-lg text-sm"
                placeholder="Search..."
              >
              <IconLoop class="w-[16px] h-[16px] absolute top-[calc(50%-8px)] left-3" />
            </div>
            <div class="relative flex flex-col max-h-28 mt-3 scroll-custom">
              <div class="flex mt-0 items-center">
                <IconCyprus class="mr-2 w-[20px] h-[20px]" />
                <span class="text-gray-900 text-sm">Afganistan</span>
              </div>
              <div class="flex mt-3 items-center">
                <IconCyprus class="mr-2 w-[20px] h-[20px]" />
                <span class="text-gray-900 text-sm">Afganistan</span>
              </div>
              <div class="flex mt-3 items-center">
                <IconCyprus class="mr-2 w-[20px] h-[20px]" />
                <span class="text-gray-900 text-sm">Afganistan</span>
              </div>
              <div class="flex mt-3 items-center">
                <IconCyprus class="mr-2 w-[20px] h-[20px]" />
                <span class="text-gray-900 text-sm">Afganistan</span>
              </div>
              <div class="flex mt-3 items-center">
                <IconCyprus class="mr-2 w-[20px] h-[20px]" />
                <span class="text-gray-900 text-sm">Afganistan</span>
              </div>
              <div class="flex mt-3 items-center">
                <IconCyprus class="mr-2 w-[20px] h-[20px]" />
                <span class="text-gray-900 text-sm">Afganistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// Icons
import IconCyprus from './icons/icon-cyprus.vue'
import IconArrowDown from '../../icons/icon-arrow-down.vue';
import IconLoop from '~/icons/icon-loop.vue';

const isOpen = ref(false);

function toggleFlyWindow(arg) {
  isOpen.value = arg
}

</script>