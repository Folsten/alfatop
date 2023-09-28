<template>
  <div class="flex flex-col mb-16">
    <div class="container flex lg:flex-col">
      <div class="flex flex-col lg:items-center sm:items-start">
        <FooterMenu />
      </div>
      <div class="flex flex-col ml-20 lg:ml-0 lg:mt-10 lg:items-center sm:items-start">
        <FooterMenu />
      </div>
      <div class="flex ml-auto lg:ml-0 lg:mt-6 items-baseline lg:justify-center sm:justify-start">
        <router-link to="#" class="ml-4 mr-4 sm:ml-0">
          <SvgIcon name="icon-telegram" class="w-6 h-6" />
        </router-link>
        <router-link to="#" class="ml-4 mr-4">
          <SvgIcon name="icon-facebook" class="w-6 h-6" />
        </router-link>
        <router-link to="#" class="ml-4 mr-4">
          <SvgIcon name="icon-instagram" class="w-6 h-6" />
        </router-link>
        <router-link to="#" class="ml-4 mr-4">
          <SvgIcon name="icon-x" class="w-6 h-6" />
        </router-link>
      </div>
    </div>
    <div class="container mt-10">
      <div class="flex items-end lg:items-center sm:items-start lg:flex-col">
        <SvgIcon name="icon-logo-light" class="w-20 h-6" />
        <div class="text-gray-500 text-xs ml-6 lg:ml-0 lg:mt-5">© 2023 ALFAtop, All rights reserved.</div>
        <div class="ml-auto flex items-center lg:ml-0 lg:mt-10">
          <div class="text-gray-500 text-xs mr-2">Leave a review</div>
          <SvgIcon name="icon-trustpilot" class="w-24 h-6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FooterMenu from './footer-menu/footer-menu.vue';
</script>