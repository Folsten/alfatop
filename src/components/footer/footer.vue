<template>
  <div class="container mt-40">
    <div class="flex">
      <div class="flex flex-col w-full">
        <h4 class="text-gray-900 text-3xl font-semibold">Subscribe to our newsletter</h4>
        <p class="text-gray-700 text-lg font-normal mt-1">Stay updated with our promotions and the latest news.</p>
      </div>
      <div class="flex flex-col w-full">
        <div class="flex">
          <input
            type="text"
            placeholder="Enter your email"
            class="rounded-lg border-2 p-3 w-full"
          >
          <button class="bg-orange-400 text-orange-25 rounded-md text-base w-[118px] ml-3">Subscribe</button>
        </div>
        <div class="mt-1">We care about your personal data, check our <router-link
            to="#"
            class="text-indigo-500"
          >Privacy policy</router-link>.</div>
      </div>
    </div>
  </div>
  <div class="container mt-40 flex">
    <div class="flex flex-col">
      <div class="text-gray-900">Services</div>
      <div class="flex mt-4">
        <router-link
          to=""
          class="text-indigo-500 text-sm mr-2"
        >Gift Cards</router-link>
        <router-link
          to=""
          class="text-indigo-500 text-sm mr-2"
        >Phone Refill</router-link>
        <router-link
          to=""
          class="text-indigo-500 text-sm mr-2"
        >Category</router-link>
        <router-link
          to=""
          class="text-indigo-500 text-sm mr-2"
        >Category</router-link>
      </div>
    </div>
    <div class="flex flex-col ml-10">
      <div class="text-gray-900">Services</div>
      <div class="flex mt-4">
        <router-link
          to=""
          class="text-indigo-500 text-sm mr-2"
        >Gift Cards</router-link>
        <router-link
          to=""
          class="text-indigo-500 text-sm mr-2"
        >Phone Refill</router-link>
        <router-link
          to=""
          class="text-indigo-500 text-sm mr-2"
        >Category</router-link>
        <router-link
          to=""
          class="text-indigo-500 text-sm mr-2"
        >Category</router-link>
      </div>
    </div>
    <div class="flex ml-auto">
      <IconTelegram class="mr-5" />
      <IconFacebook class="mr-5" />
      <IconInstagram class="mr-5" />
      <IconX class="mr-5" />
    </div>
  </div>
  <div class="container mt-10 mb-14">
    <div class="flex items-end">
      <IconLogoLight />
      <div class="text-gray-500 text-xs ml-6">© 2023 ALFAtop, All rights reserved.</div>
      <div class="ml-auto flex items-center">
        <div class="text-gray-500 text-xs mr-2">Leave a review</div>
        <IconTrustpilot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Icons
import IconFacebook from '~/icons/icon-facebook.vue';
import IconTelegram from '~/icons/icon-telegram.vue';
import IconInstagram from '~/icons/icon-instagram.vue';
import IconX from '~/icons/icon-x.vue';
import IconLogoLight from '~/icons/icon-logo-light.vue';
import IconTrustpilot from '~/icons/icon-trustpilot.vue';
</script>