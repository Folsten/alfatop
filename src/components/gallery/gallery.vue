<template>
  <div class="w-full">
    <GalleryCategory />
    <GalleryCategory />
    <GalleryCategory />
  </div>
</template>

<script setup lang="ts">
import GalleryCategory from './gallery-category/gallery-category.vue';
import { provide } from 'vue';

const props = defineProps({
  productcardEnvironment: String
})

provide('productcardEnvironment', props.productcardEnvironment)
</script>