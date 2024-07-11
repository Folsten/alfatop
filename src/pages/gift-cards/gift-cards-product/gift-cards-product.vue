<template>
  <Header />
  <div class="container mt-4">
    <Crumbs />
    <GiftProduct class="mt-14" />
    <GalleryCategory сlass="mt-16" :card-width="250" />
    <GiftHowItWork class="mt-28" />
    <Newsletter class="mt-40 mb-40 sm:mt-20 sm:mb-20" />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
import Crumbs from '@/components/crumbs/crumbs.vue'
import Newsletter from '@/components/newsletter/newsletter.vue'
import GiftProduct from '@/pages/gift-cards/components/gift-product/gift-product.vue'
import GalleryCategory from '@/components/gallery/gallery-category/gallery-category.vue'
import GiftHowItWork from '@/pages/gift-cards/components/gift-how-it-work/gift-how-it-work.vue'
</script>
