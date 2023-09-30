<template>
  <div class="faq-chapters flex flex-col w-1/3 mr-20 xl:mr-14 lg:mr-0 lg:hidden">
    <h3 class="faq-chapters__title text-gray-900 font-medium text-dh3 sm:text-mh3">FAQs</h3>
    <div class="faq-chapters__subtitle mt-5 text-md text-gray-900">
      If you did not find the answer to your question, please contact our
      <router-link to="#" class="text-indigo-500">Support team</router-link>.
    </div>
    <div class="faq-chapters__chapters-container flex flex-col mt-7">
      <FaqChaptersItem />
      <FaqChaptersItem />
      <FaqChaptersItem />
      <FaqChaptersItem />
      <FaqChaptersItem />
      <FaqChaptersItem />
    </div>
  </div>
</template>

<script setup lang="ts">
import FaqChaptersItem from '@/pages/faq/components/faq-chapters/faq-chapters-item/faq-chapters-item.vue'
</script>
