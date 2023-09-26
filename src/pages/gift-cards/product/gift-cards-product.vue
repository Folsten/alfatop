<template>
  <Header />
  <div class="container mt-4">
    <Crumbs />
    <GiftProduct class="mt-14" />
    <GalleryCategory сlass="mt-16" :card-width="250" />
    <Howitwork class="mt-28 sm:hidden" />
    <Newsletter class="mt-40 mb-40 sm:mt-20 sm:mb-20" />
  </div>
  <Footer />





  <!-- <Newsletter /> -->
  <!-- <Footer /> -->
</template>

<script setup lang="ts">
import Header from '@/components/header/header.vue';
import Footer from '@/components/footer/footer.vue';
import Crumbs from '@/components/crumbs/crumbs.vue';
import Newsletter from '@/components/newsletter/newsletter.vue';
import GiftProduct from '@/components/giftproduct/giftproduct.vue';
import GalleryCategory from '@/components/gallery/gallery-category/gallery-category.vue';
import Howitwork from '@/components/howitwork/howitwork.vue';
</script>