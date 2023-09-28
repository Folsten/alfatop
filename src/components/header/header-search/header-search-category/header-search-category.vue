<template>
  <div
    @click="isOpen = !isOpen"
    class="flex items-center text-gray-500 font-medium text-sm whitespace-nowrap cursor-pointer overflow-y pt-2 pb-2 pl-3"
  >
    <div>Choose category</div>
    <SvgIcon
      name="icon-arrow-down"
      class="w-4 h-4 text-md ml-2"
    />
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="flyWindow w-full left-0 top-12"
      >
        <div class="flex flex-col pl-3 pr-3 mb-4 mt-3 scrollCustom max-h-[360px]">
          <HeaderSearchCategoryGroup />
          <HeaderSearchCategoryGroup />
          <HeaderSearchCategoryGroup />
          <HeaderSearchCategoryGroup />
          <HeaderSearchCategoryGroup />
          <HeaderSearchCategoryGroup />
          <HeaderSearchCategoryGroup />
          <HeaderSearchCategoryGroup />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
// Components
import HeaderSearchCategoryGroup from './header-search-category-group/header-search-category-group.vue';
// Dependencies
import { ref } from 'vue';

const isOpen = ref(false);
</script>