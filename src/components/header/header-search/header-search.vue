<template>
  <div
    class="header-search flex w-full max-w-[560px] ml-auto mr-auto border border-gray-300 rounded-lg text-sm shadow-xs lg:max-w-sm md:hidden"
  >
    <div class="header-search__search relative flex items-center w-full z-10">
      <HeaderSearchCategory />
      <hr class="h-1/2 w-[1px] ml-2 mr-2 bg-gray-300" />
      <HeaderSearchBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderSearchCategory from './header-search-category/header-search-category.vue'
import HeaderSearchBar from './header-search-bar/header-search-bar.vue'
</script>
