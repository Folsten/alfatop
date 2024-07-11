<template>
  <div class="sidebar w-[320px] md:w-[250px] mr-10 sm:mr-5 md:hidden">
    <SidebarCategory />
    <SidebarCategory />
    <SidebarCategory />
    <SidebarCategory />
  </div>
</template>

<script setup lang="ts">
import SidebarCategory from './sidebar-category/sidebar-category.vue'
</script>
