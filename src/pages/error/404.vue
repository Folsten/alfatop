<template>
  <div
    class="404-page flex flex-col justify-between h-screen max-h-screen lg:h-auto lg:max-h-[auto]"
  >
    <div class="404-page__header-container container mt-9">
      <SvgIcon name="icon-big-logo" class="404-page__header-logo w-[104px] h-[32px]" />
    </div>
    <div class="404-page__main-container flex container w-full items-center lg:mt-20">
      <div class="404-page__content-container flex flex-1 flex-col lg:items-center sm:items-start">
        <div class="404-page__error-code text-[64px] font-semibold text-gray-900">404</div>
        <h1
          class="404-page__title text-dh1 text-gray-900 font-semibold sm:text-mh1 lg:text-center sm:text-left"
        >
          The page you were looking can not be found.
        </h1>
        <div class="404-page__subtitle text-lg text-gray-500 mt-4 lg:text-center sm:text-left">
          Please go to the ALFAtop home page by clicking the button below.
        </div>
        <router-link
          to="#"
          tag="button"
          class="404-page__btn btn btn-success w-44 h-12 pl-5 pr-5 pt-2 pb-2 mt-8"
          >ALFAtop home
        </router-link>
      </div>
      <div class="404-page__img flex flex-1 lg:hidden">
        <picture>
          <source srcset="./images/404-bg.webp" type="image/webp" />
          <img src="./images/404-bg.png" alt="page not found" />
        </picture>
      </div>
    </div>
    <Footer class="lg:mt-20" />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/footer/footer.vue'
</script>
