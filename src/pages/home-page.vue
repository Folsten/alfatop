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
import Newsletter from '@/components/newsletter/newsletter.vue';
import Header from '@/components/header/header.vue';
import Welcome from '@/components/welcome/welcome.vue';
import Sidebar from '@/components/sidebar/sidebar.vue';
import Gallery from '@/components/gallery/gallery.vue';
import Footer from '@/components/footer/footer.vue';
</script>