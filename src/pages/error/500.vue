<template>
  <div
    class="500-page flex flex-col justify-between h-screen max-h-screen lg:h-auto lg:max-h-[auto]"
  >
    <div class="500-page__header-container container mt-9">
      <SvgIcon name="icon-big-logo" class="500-page__header-logo w-[104px] h-[32px]" />
    </div>
    <div class="500-page__main-container flex container w-full items-center lg:mt-20">
      <div class="500-page__content-container flex flex-1 flex-col lg:items-center sm:items-start">
        <div class="500-page__error-code text-[64px] font-semibold text-gray-900">500</div>
        <h1
          class="500-page__title text-dh1 text-gray-900 font-semibold sm:text-mh1 lg:text-center sm:text-left"
        >
          Alfatop is currently undergoing scheduled maintenance.
        </h1>
        <div class="500-page__subtitle text-lg text-gray-500 mt-4 lg:text-center sm:text-left">
          We’ll be back online shortly!
        </div>
      </div>
      <div class="500-page__img flex flex-1 lg:hidden">
        <picture>
          <source srcset="./images/500-bg.webp" type="image/webp" />
          <img src="./images/500-bg.png" alt="maintenance" />
        </picture>
      </div>
    </div>
    <Footer class="lg:mt-20" />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/footer/footer.vue'
</script>
