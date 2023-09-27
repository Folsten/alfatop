<template>
  <Header />
  <div class="container mt-4">
    <Crumbs />
    <Internalsearch class="hidden mt-10 mb-10 md:flex" />
    <Cart />
    <GalleryCategory class="mt-36 lg:mt-16 md:mt-8" />
    <NewsletterVue class="mt-40 mb-40 sm:mt-20 sm:mb-20" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/header.vue';
import Crumbs from '@/components/crumbs/crumbs.vue';
import Cart from '@/components/cart/cart.vue';
import Internalsearch from '@/components/internalsearch/internalsearch.vue';
import GalleryCategory from '@/components/gallery/gallery-category/gallery-category.vue';
import NewsletterVue from '@/components/newsletter/newsletter.vue';
import Footer from '@/components/footer/footer.vue';
</script>