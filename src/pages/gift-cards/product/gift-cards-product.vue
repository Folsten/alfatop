<template>
  <Header />
  <div class="container mt-4">
    <Crumbs />
    <GiftProduct class="mt-14" />
  </div>





  <!-- <Newsletter /> -->
  <!-- <Footer /> -->
</template>

<script setup lang="ts">
import Header from '@/components/header/header.vue';
import Footer from '@/components/footer/footer.vue';
import Crumbs from '@/components/crumbs/crumbs.vue';
import Newsletter from '@/components/newsletter/newsletter.vue';
import GiftProduct from '@/components/giftproduct/giftproduct.vue';
</script>