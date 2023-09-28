<template>
  <div
    class="flex items-center ml-2 cursor-pointer relative z-20"
    @click="isOpen = !isOpen"
  >
    <SvgIcon name="icon-cyprus" class="w-5 h-5 mr-2 text-gray-300" />
    <div class="text-gray-500 text-sm font-medium">
      Cyprus
    </div>
    <div class="ml-1">
      <SvgIcon name="icon-arrow-down" class="w-5 h-5 text-gray-300" />
    </div>
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="cursor-default"
      >
        <div class="flyWindow w-[280px] top-8 left-0">
          <div class="mt-3 mb-4 ml-3 mr-3">
            <div class="flex justify-start">
              <SvgIcon name="icon-cyprus" class="w-5 h-5 text-gray-300" />
              <div class="flex flex-col pl-2 items-start">
                <span class="text-gray-900 text-sm font-medium">International</span>
                <span class="text-gray-500 text-xs font-normal">Browse products available globally</span>
              </div>
            </div>
            <hr class="mt-2 mb-2">
            <div class="flex flex-col">
              <HeaderCountrySearch />
              <div class="relative flex flex-col max-h-28 mt-4 scrollCustom">
                <HeaderCountryItem />
                <HeaderCountryItem />
                <HeaderCountryItem />
                <HeaderCountryItem />
                <HeaderCountryItem />
                <HeaderCountryItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderCountrySearch from './header-country-search.vue/header-country-search.vue';
import HeaderCountryItem from './header-country-item.vue/header-country-item.vue';

const isOpen = ref(false);

</script>