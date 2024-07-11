<template>
  <div
    class="header-search-category-group flex items-center text-gray-500 font-medium pt-3 first:pt-0"
  >
    <div>Категория</div>
    <div
      class="header-search-category-group__counter rounded-[4px] flex items-center pl-[6px] pr-[6px] pt-[2px] pb-[2px] bg-gray-100 ml-[10px] font-semibold text-gray-700 text-xs"
    >
      0
    </div>
  </div>
  <HeaderSearchCategoryGrouItem />
  <HeaderSearchCategoryGrouItem />
  <HeaderSearchCategoryGrouItem />
</template>

<script setup lang="ts">
import HeaderSearchCategoryGrouItem from './header-search-category-group-item/header-search-category-group-item.vue'
</script>
