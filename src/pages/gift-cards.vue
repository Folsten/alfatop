<template>
  <div>
    <Header />
    <div class="container flex flex-col mt-4">
      <Crumbs />
      <Internalsearch class="hidden mt-6 md:flex" />
      <div class="flex">
        <Sidebar class="mt-6" />
        <Showcase />
      </div>
      <Newsletter class="mt-40 mb-40 lg:mt-20 lg:mb-20" />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/header.vue';
import Footer from '@/components/footer/footer.vue';
import Crumbs from '@/components/crumbs/crumbs.vue';
import Sidebar from '@/components/sidebar/sidebar.vue';
import Showcase from '@/components/showcase/showcase.vue';
import Newsletter from '@/components/newsletter/newsletter.vue';
import Internalsearch from '@/components/internalsearch/internalsearch.vue';
</script>