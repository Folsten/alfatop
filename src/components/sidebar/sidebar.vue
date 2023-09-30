<template>
  <div class="sidebar w-[290px] md:w-[250px] mr-5 sm:mr-5 md:hidden">
    <SidebarCategory />
    <SidebarCategory />
    <SidebarCategory />
    <SidebarCategory />
  </div>
</template>

<script setup lang="ts">
import SidebarCategory from './sidebar-category/sidebar-category.vue'
</script>
