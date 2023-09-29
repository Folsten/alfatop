<template>
  <Header/>
  <div class="faq-article-page container mt-4">
    <Crumbs/>
    <SelectCustom class="mt-10 hidden sm:flex"/>
    <div class="flex mt-32 lg:flex-col sm:mt-10">
      <FaqChapters/>
      <FaqArticle/>
    </div>
    <Newsletter class="mt-40 mb-40 lg:mt-30 lg:mb-30 md:mt-20 md:mb-20"/>
    <Footer/>
  </div>

</template>

<script setup lang="ts">

import Header from "~/header/header.vue";
import Crumbs from "~/crumbs/crumbs.vue";
import SearchInternal from "~/search-internal/search-internal.vue";
import FaqChapters from "~/faq/faq-chapters/faq-chapters.vue";
import Footer from "~/footer/footer.vue";
import Newsletter from "~/newsletter/newsletter.vue";
import FaqArticle from "~/faq/faq-article/faq-article.vue";
import SelectCustom from "~/select-custom/select-custom.vue";
</script>