<template>
  <div class="container mt-20 lg:justify-center lg:flex lg:w-3/4">
  </div>
  <div class="flex flex-col">
    <div class="container flex lg:flex-col">
      <div class="flex flex-col lg:items-center sm:items-start">
        <FooterMenu />
      </div>
      <div class="flex flex-col ml-20 lg:ml-0 lg:mt-10 lg:items-center sm:items-start">
        <FooterMenu />
      </div>
      <div class="flex ml-auto lg:ml-0 lg:mt-6 lg:justify-center sm:justify-start">
        <router-link to="#">
          <IconTelegram class="mr-4 ml-4 sm:ml-0" />
        </router-link>
        <router-link to="#">
          <IconFacebook class="mr-4 ml-4" />
        </router-link>
        <router-link to="#">
          <IconInstagram class="mr-4 ml-4" />
        </router-link>
        <router-link to="#">
          <IconX class="mr-4 ml-4" />
        </router-link>
      </div>
    </div>
    <div class="container mt-10 mb-14 lg:mb-10">
      <div class="flex items-end lg:items-center sm:items-start lg:flex-col">
        <IconLogoLight />
        <div class="text-gray-500 text-xs ml-6 lg:ml-0 lg:mt-5">© 2023 ALFAtop, All rights reserved.</div>
        <div class="ml-auto flex items-center lg:ml-0 lg:mt-10">
          <div class="text-gray-500 text-xs mr-2">Leave a review</div>
          <IconTrustpilot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import FooterMenu from './footer-menu/footer-menu.vue';
// import Newsletter from '~/newsletter/newsletter.vue';
// Icons
import IconFacebook from '~/icons/icon-facebook.vue';
import IconTelegram from '~/icons/icon-telegram.vue';
import IconInstagram from '~/icons/icon-instagram.vue';
import IconX from '~/icons/icon-x.vue';
import IconLogoLight from '~/icons/icon-logo-light.vue';
import IconTrustpilot from '~/icons/icon-trustpilot.vue';
</script>