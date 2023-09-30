<template>
  <Header />
  <div class="mobile-category-page__container1 container mt-4">
    <Crumbs />
    <InternalSearch class="hidden mt-6 md:flex" />
  </div>
  <div class="mobile-category-page__container2 container flex mt-10 md:mt-6">
    <Sidebar />
    <Showcase />
  </div>
  <div class="mobile-category-page__container3 container">
    <MobileHowItWork class="mt-40 lg:mt-20" />
    <Newsletter class="mt-40 mb-40 lg:mt-20 lg:mb-20" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/header.vue'
import Crumbs from '@/components/crumbs/crumbs.vue'
import Sidebar from '@/components/sidebar/sidebar.vue'
import Showcase from '@/components/showcase/showcase.vue'
import InternalSearch from '@/components/search-internal/search-internal.vue'
import MobileHowItWork from '../components/mobile-how-it-work/mobile-how-it-work.vue'
import Newsletter from '@/components/newsletter/newsletter.vue'
import Footer from '@/components/footer/footer.vue'
</script>
