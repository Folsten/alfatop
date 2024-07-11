<template>
  <div class="503-page flex flex-col h-screen max-h-screen lg:h-auto lg:max-h-[auto]">
    <div class="503-page__header-container container mt-9">
      <SvgIcon name="icon-big-logo" class="503-page__header-logo w-[104px] h-[32px]" />
    </div>
    <div class="503-page__main-container flex container w-full items-center mt-20">
      <div class="503-page__content-container flex flex-1 flex-col lg:items-center sm:items-start">
        <div class="503-page__error-code text-[64px] font-semibold text-gray-900">503</div>
        <h1
          class="503-page__title text-dh1 text-gray-900 font-semibold sm:text-mh1 lg:text-center sm:text-left"
        >
          Alfatop is currently undergoing scheduled maintenance.
        </h1>
        <div class="503-page__subtitle text-lg text-gray-500 mt-4 lg:text-center sm:text-left">
          We’ll be back online shortly!
        </div>
        <router-link
          to="#"
          tag="button"
          class="503-page__btn btn btn-success w-56 h-12 pl-5 pr-5 pt-2 pb-2 mt-8"
          >Contact support team
        </router-link>
        <div class="503-page__social-icons flex mt-20 justify-between w-56">
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
      <div class="503-page__img flex flex-1 lg:hidden">
        <picture>
          <source srcset="./images/503-bg.webp" type="image/webp" />
          <img src="./images/503-bg.png" alt="maintenance" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from '~/footer/footer.vue'
</script>
