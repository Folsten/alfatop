<template>
  <div class="coming-soon-page flex flex-col h-screen max-h-screen lg:h-auto lg:max-h-[auto]">
    <div class="coming-soon-page__header-container container mt-9">
      <SvgIcon name="icon-big-logo" class="coming-soon-page__header-logo w-[104px] h-[32px]" />
    </div>
    <div class="coming-soon-page__main-container flex container w-full items-center mt-20">
      <div
        class="coming-soon-page__content-container flex flex-1 flex-col lg:items-center sm:items-start"
      >
        <h1
          class="coming-soon-page__title text-dh1 text-gray-900 font-semibold sm:text-mh1 lg:text-center sm:text-left"
        >
          Coming Soon
        </h1>
        <div
          class="coming-soon-page__subtitle text-lg text-gray-500 mt-4 lg:text-center sm:text-left"
        >
          Alfa.top is under active development.<br />
          Stay tuned!
        </div>
        <div class="coming-soon-page__social-icons flex mt-6">
          <router-link to="#" class="mr-4 sm:ml-0">
            <SvgIcon name="icon-telegram" class="w-6 h-6" />
          </router-link>
          <router-link to="#" class="ml-4 mr-4">
            <SvgIcon name="icon-facebook" class="w-6 h-6" />
          </router-link>
          <router-link to="#" class="ml-4 mr-4">
            <SvgIcon name="icon-instagram" class="w-6 h-6" />
          </router-link>
          <router-link to="#" class="ml-4">
            <SvgIcon name="icon-x" class="w-6 h-6" />
          </router-link>
        </div>
      </div>
      <div class="coming-soon-page__img flex flex-1 lg:hidden">
        <picture>
          <source srcset="./images/coming-soon-bg.webp" type="image/webp" />
          <img src="./images/coming-soon-bg.png" alt="coming soon!" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from '~/footer/footer.vue'
</script>
