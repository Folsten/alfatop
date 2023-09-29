<template>
  <div class="sidebar-category flex flex-col first:pt-0 first:mt-0 mt-3">
    <div
        class="sidebar-category__container flex items-center justify-between text-gray-900 cursor-pointer pt-3 pb-3 pl-4 pr-4 hover:bg-indigo-50 rounded-md first:mt-2 transition-all"
    >
      <div class="sidebar-category__wrapper flex items-center">
        <SvgIcon name="icon-gift" class="sidebar-category__category-icon w-4 h-4 text-gray-900 mr-3"/>
        <span class="sidebar-category__category-name font-medium">Gift cards</span>
      </div>
      <SvgIcon name="icon-arrow-up" class="sidebar-category__arrow w-2 h-2 text-gray-900"/>
    </div>
    <SidebarCategoryItem/>
    <SidebarCategoryItem/>
    <SidebarCategoryItem/>
    <SidebarCategoryItem/>
    <SidebarCategoryItem/>
    <SidebarCategoryItem/>
  </div>
</template>

<script setup lang="ts">
import SidebarCategoryItem from './sidebar-category-item/sidebar-category-item.vue';
import SvgIcon from "~/svg-icon/svg-icon.vue";
</script>