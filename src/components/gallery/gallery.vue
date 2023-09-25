<template>
  <div class="w-full">
    <GalleryCategory :is-sidebar-there="true" />
    <GalleryCategory :is-sidebar-there="true" />
    <GalleryCategory :is-sidebar-there="true" />
  </div>
</template>

<script setup lang="ts">
import GalleryCategory from './gallery-category/gallery-category.vue';
</script>