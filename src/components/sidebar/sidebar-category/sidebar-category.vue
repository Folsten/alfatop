<template>
  <div class="flex items-center justify-between text-gray-900 cursor-pointer mt-8 first:mt-0">
    <div class="flex items-center">
      <img
        src="./icons/icon-1.svg"
        class="mr-3"
      >
      <span>Gift cards</span>
    </div>
    <IconArrowUp />
  </div>
  <SidebarCategoryItem />
  <SidebarCategoryItem />
  <SidebarCategoryItem />
  <SidebarCategoryItem />
  <SidebarCategoryItem />
  <SidebarCategoryItem />
</template>

<script setup lang="ts">
import IconArrowUp from '@/components/icons/icon-arrow-up.vue';
import SidebarCategoryItem from './sidebar-category-item/sidebar-category-item.vue';
</script>