<template>
  <footer class="footer flex flex-col mb-16">
    <div
      :class="{ 'ml-0 mr-0 pl-0 pr-0 max-w-[100%] w-full xl:flex-col': isUltraResponsive }"
      class="footer__top-container container flex lg:flex-col"
    >
      <div
        :class="{ 'xl:!items-start': isUltraResponsive }"
        class="footer__menu-wrapper flex flex-col lg:items-start"
      >
        <FooterMenu />
      </div>
      <div
        :class="{ 'xl:!items-start !ml-10 xl:!ml-0 xl:mt-10': isUltraResponsive }"
        class="footer__menu-wrapper flex flex-col ml-16 lg:ml-0 lg:mt-10 lg:items-start"
      >
        <FooterMenu />
      </div>
      <div
        :class="{ 'xl:!justify-start xl:mt-6 xl:ml-0': isUltraResponsive }"
        class="footer__socials-wrapper flex ml-auto lg:ml-0 lg:mt-6 items-baseline lg:justify-start"
      >
        <router-link to="#" :class="{ 'xl:!ml-0': isUltraResponsive }" class="ml-4 mr-4 lg:ml-0">
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
    <div
      :class="{ 'ml-0 mr-0 pl-0 pr-0 w-full max-w-[100%]': isUltraResponsive }"
      class="footer__bottom-wrapper container mt-10"
    >
      <div
        :class="{ 'xl:!flex-col xl:!items-start': isUltraResponsive }"
        class="footer__bottom-container flex items-end lg:items-start lg:flex-col"
      >
        <SvgIcon name="icon-logo-light" class="w-20 h-6" />
        <div
          :class="{ 'xl:!mt-5 xl:!ml-0': isUltraResponsive }"
          class="footer__disclaimer text-gray-500 text-xs ml-6 lg:ml-0 lg:mt-5"
        >
          © 2023 ALFAtop, All rights reserved.
        </div>
        <a href="#"
          :class="{ 'xl:ml-0 xl:mt-10': isUltraResponsive }"
          class="footer__trustpilot-wrapper ml-auto flex items-center lg:ml-0 lg:mt-10"
        >
          <div class="footer__leave-a-review text-gray-500 text-xs mr-2">Leave a review</div>
          <SvgIcon name="icon-trustpilot" class="footer__trustpilot w-24 h-6" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterMenu from './footer-menu/footer-menu.vue'

const props = defineProps({
  isUltraResponsive: Boolean
})
</script>
