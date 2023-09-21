<template>
  <div>
    <Header />
    <Welcome />
    <div class="container flex mt-20">
      <Sidebar />
      <Gallery />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/header/header.vue';
import Welcome from '../components/welcome/welcome.vue';
import Sidebar from '../components/sidebar/sidebar.vue';
import Gallery from '../components/gallery/gallery.vue';
import Footer from '../components/footer/footer.vue';
</script>