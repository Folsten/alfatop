<template>
  <Header />
  <div class="faq-page container mt-4">
    <Crumbs />
    <SearchInternal class="mt-12 hidden sm:flex" />
    <div class="faq-page__wrapper-main flex mt-36 lg:flex-col">
      <FaqChapters />
      <FaqArticles />
    </div>
    <Newsletter class="mt-40 mb-40 lg:mt-30 lg:mb-30 md:mt-20 md:mb-20" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/header.vue'
import Crumbs from '@/components/crumbs/crumbs.vue'
import Newsletter from '@/components/newsletter/newsletter.vue'
import Footer from '@/components/footer/footer.vue'
import SearchInternal from '@/components/search-internal/search-internal.vue'
import FaqChapters from '@/pages/faq/components/faq-chapters/faq-chapters.vue'
import FaqArticles from '@/pages/faq/components/faq-articles/faq-articles.vue'
</script>
