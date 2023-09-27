<template>
  <Header />
  <div class="container mt-4">
    <Crumbs />
    <Newsletter class="mt-40 mb-40 lg:mt-20 lg:mb-20" />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/header/header.vue';
import Crumbs from '@/components/crumbs/crumbs.vue';
import Newsletter from '@/components/newsletter/newsletter.vue';
import Footer from '@/components/footer/footer.vue';
</script>