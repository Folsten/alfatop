<template>
  <div
    class="403-page flex flex-col justify-between h-screen max-h-screen lg:h-auto lg:max-h-[auto]"
  >
    <div class="403-page__header-container container mt-9">
      <SvgIcon name="icon-big-logo" class="403-page__header-logo w-[104px] h-[32px]" />
    </div>
    <div class="403-page__main-container flex container w-full items-center lg:mt-20">
      <div class="403-page__content-container flex flex-1 flex-col lg:items-center sm:items-start">
        <div class="403-page__error-code text-[64px] font-semibold text-gray-900">403</div>
        <h1
          class="403-page__title text-dh1 text-gray-900 font-semibold sm:text-mh1 lg:text-center sm:text-left"
        >
          You are not authorized to access this page
        </h1>
        <div class="403-page__subtitle text-lg text-gray-500 mt-4 lg:text-center sm:text-left">
          You are not authorized or you do not have permissions to view this page.
        </div>
        <router-link
          to="#"
          tag="button"
          class="403-page__btn btn btn-success w-32 h-12 pl-5 pr-5 pt-2 pb-2 mt-8"
          >Log in now
        </router-link>
      </div>
      <div class="403-page__img flex flex-1 lg:hidden">
        <picture>
          <source srcset="./images/403-bg.webp" type="image/webp" />
          <img src="./images/403-bg.png" alt="no permissions" />
        </picture>
      </div>
    </div>
    <Footer class="lg:mt-20" />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/footer/footer.vue'
</script>
