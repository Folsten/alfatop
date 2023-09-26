<template>
  <Header />
  <div class="container mt-4">
    <Crumbs />
    <Internalsearch class="hidden mt-6 md:flex" />
  </div>
  <div class="container flex mt-10 md:mt-6">
    <Sidebar />
    <Showcase />
  </div>
  <div class="container">
    <Mobilehowitwork class="mt-40 lg:mt-20" />
    <Newsletter class="mt-40 mb-40 lg:mt-20 lg:mb-20" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/header.vue';
import Crumbs from '@/components/crumbs/crumbs.vue';
import Sidebar from '@/components/sidebar/sidebar.vue';
import Showcase from '@/components/showcase/showcase.vue';
import Internalsearch from '@/components/internalsearch/internalsearch.vue';
import Mobilehowitwork from '@/components/mobilehowitwork/mobilehowitwork.vue';
import Newsletter from '@/components/newsletter/newsletter.vue';
import Footer from '@/components/footer/footer.vue';
</script>