<template>
  <Header />
  <div class="container mt-4">
    <Crumbs />
    <Internalsearch class="mt-12 hidden sm:flex" />
    <div class="flex mt-36 lg:flex-col">
      <div class="flex flex-col w-1/3 mr-20 xl:mr-14 lg:mr-0 lg:hidden">
        <h3 class="text-gray-900 font-medium text-dh3 sm:text-mh3">FAQs</h3>
        <div class="mt-5 text-md text-gray-900">
          If you did not find the answer to your question, please contact our
          <router-link
            to="#"
            class="text-indigo-500"
          >Support team</router-link>.
        </div>
        <div class="flex flex-col mt-7">
          <div class="flex items-center">
            <IconPaper class="mr-4" />
            <div class="text-gray-900 font-medium text-lg">Gift cards</div>
          </div>
          <div class="flex items-center mt-4">
            <IconPaper class="mr-4" />
            <div class="text-gray-500 font-medium text-lg">Payments</div>
          </div>
          <div class="flex items-center mt-4">
            <IconPaper class="mr-4" />
            <div class="text-gray-500 font-medium text-lg">Account settings</div>
          </div>
          <div class="flex items-center mt-4">
            <IconPaper class="mr-4" />
            <div class="text-gray-500 font-medium text-lg">Support</div>
          </div>
          <div class="flex items-center mt-4">
            <IconPaper class="mr-4" />
            <div class="text-gray-500 font-medium text-lg">Features & Services</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <h3 class="text-gray-900 font-medium text-dh3 sm:text-mh3">Gift cards</h3>
        <div class="flex justify-between w-full pt-6 mt-6 items-center border-t border-gray-100 cursor-pointer">
          <h6 class="text-dh6 text-gray-900 font-medium sm:text-mh6">What types of digital gift cards are available on
            ALFAtop?</h6>
          <IconArrowRight />
        </div>
        <div class="flex justify-between w-full pt-6 mt-6 items-center border-t border-gray-100 cursor-pointer">
          <h6 class="text-dh6 text-gray-900 font-medium sm:text-mh6">How long does it take to receive my digital gift card
            after purchase?</h6>
          <IconArrowRight />
        </div>
        <div class="flex justify-between w-full pt-6 mt-6 items-center border-t border-gray-100 cursor-pointer">
          <h6 class="text-dh6 text-gray-900 font-medium sm:text-mh6">Can I purchase a gift card as a gift for someone
            else?</h6>
          <IconArrowRight />
        </div>
        <div class="flex justify-between w-full pt-6 mt-6 items-center border-t border-gray-100 cursor-pointer">
          <h6 class="text-dh6 text-gray-900 font-medium sm:text-mh6">Are there any purchase limits on the number of gift
            cards I can buy?</h6>
          <IconArrowRight />
        </div>
        <div class="flex justify-between w-full pt-6 mt-6 items-center border-t border-gray-100 cursor-pointer">
          <h6 class="text-dh6 text-gray-900 font-medium sm:text-mh6">Can I get a refund if I bought the wrong gift card?
          </h6>
          <IconArrowRight />
        </div>
        <div class="flex justify-between w-full pt-6 mt-6 items-center border-t border-gray-100 cursor-pointer">
          <h6 class="text-dh6 text-gray-900 font-medium sm:text-mh6">How do I view the list of supported countries for
            each gift card?</h6>
          <IconArrowRight />
        </div>
        <div class="flex justify-between w-full pt-6 mt-6 items-center border-t border-gray-100 cursor-pointer">
          <h6 class="text-dh6 text-gray-900 font-medium sm:text-mh6">Can I top-up a phone in another countries / roaming?
          </h6>
          <IconArrowRight />
        </div>
      </div>
    </div>
    <Newsletter class="mt-40 mb-40 lg:mt-30 lg:mb-30 md:mt-20 md:mb-20" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/header.vue';
import Crumbs from '@/components/crumbs/crumbs.vue';
import IconPaper from '@/components/icons/icon-paper.vue';
import IconArrowRight from '@/components/icons/icon-arrow-right.vue'
import Newsletter from '@/components/newsletter/newsletter.vue';
import Footer from '@/components/footer/footer.vue';
import Internalsearch from '@/components/internalsearch/internalsearch.vue';
</script>