<template>
  <div class="flex flex-col first:pt-0 first:mt-0 mt-3">
    <div
      class="flex items-center justify-between text-gray-900 cursor-pointer pt-3 pb-3 pl-4 pr-4 hover:bg-indigo-50 rounded-md first:mt-2 transition-all"
    >
      <div class="flex items-center">
        <img
          src="./icons/icon-1.svg"
          class="mr-3"
        >
        <span class="font-medium">Gift cards</span>
      </div>
      <SvgIcon name="icon-arrow-up" class="w-2 h-2 text-gray-900" />
    </div>
    <SidebarCategoryItem />
    <SidebarCategoryItem />
    <SidebarCategoryItem />
    <SidebarCategoryItem />
    <SidebarCategoryItem />
    <SidebarCategoryItem />
  </div>
</template>

<script setup lang="ts">
import SidebarCategoryItem from './sidebar-category-item/sidebar-category-item.vue';
</script>