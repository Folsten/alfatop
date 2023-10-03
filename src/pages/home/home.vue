<template>
  <div>
    <Header />
    <Welcome />
    <div class="home-page container flex mt-20">
      <Sidebar />
      <Gallery />
    </div>
    <Newsletter class="container mt-40 mb-40 lg:mt-20 lg:mb-20" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Newsletter from '~/newsletter/newsletter.vue'
import Header from '~/header/header.vue'
import Welcome from '@/pages/home/components/home-welcome.vue'
import Sidebar from '~/sidebar/sidebar.vue'
import Gallery from '~/gallery/gallery.vue'
import Footer from '~/footer/footer.vue'
</script>
