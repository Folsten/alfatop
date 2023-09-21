<template>
  <div class="container mt-40 lg:mt-30">
    <div class="flex lg:flex-wrap">
      <div class="flex flex-col w-full">
        <h4 class="text-gray-900 text-3xl font-semibold lg:text-center">Subscribe to our newsletter</h4>
        <p class="text-gray-700 text-lg font-normal mt-1 lg:text-center lg:mb-3">Stay updated with our promotions and the
          latest news.</p>
      </div>
      <div class="flex flex-col w-full lg:items-center">
        <div class="flex w-full lg:justify-center lg:flex-wrap">
          <input
            type="text"
            placeholder="Enter your email"
            class="rounded-lg border-2 p-3 w-full lg:w-2/3 h-12"
          >
          <button
            class="bg-orange-400 text-orange-25 rounded-md text-base w-[118px] ml-3 lg:w-2/3 lg:h-12 lg:mt-2 lg:ml-0"
          >Subscribe</button>
        </div>
        <div class="mt-1 lg:mt-5 lg:text-center">We care about your personal data, check our <router-link
            to="#"
            class="text-indigo-500"
          >Privacy policy</router-link>.</div>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="container mt-40 flex lg:mt-30 lg:flex-col">
      <div class="flex flex-col">
        <div class="text-gray-900">Services</div>
        <FooterMenu />
      </div>
      <div class="flex flex-col ml-20 md:ml-10 lg:ml-0 lg:mt-10">
        <div class="text-gray-900">Company</div>
        <FooterMenu />
      </div>
      <div class="flex ml-auto lg:ml-0 lg:mt-6">
        <router-link to="#">
          <IconTelegram class="mr-5" />
        </router-link>
        <router-link to="#">
          <IconFacebook class="mr-5" />
        </router-link>
        <router-link to="#">
          <IconInstagram class="mr-5" />
        </router-link>
        <router-link to="#">
          <IconX class="mr-5" />
        </router-link>
      </div>
    </div>
    <div class="container mt-10 mb-14 lg:mb-10">
      <div class="flex items-end lg:items-start lg:flex-col">
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
// Icons
import IconFacebook from '~/icons/icon-facebook.vue';
import IconTelegram from '~/icons/icon-telegram.vue';
import IconInstagram from '~/icons/icon-instagram.vue';
import IconX from '~/icons/icon-x.vue';
import IconLogoLight from '~/icons/icon-logo-light.vue';
import IconTrustpilot from '~/icons/icon-trustpilot.vue';
</script>