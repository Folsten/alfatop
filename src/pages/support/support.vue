<template>
  <Header />
  <div class="support-page container mt-4">
    <Crumbs />
    <Newsletter class="mt-40 mb-40 lg:mt-20 lg:mb-20" />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '~/header/header.vue'
import Crumbs from '~/crumbs/crumbs.vue'
import Newsletter from '~/newsletter/newsletter.vue'
import Footer from '~/footer/footer.vue'
</script>
