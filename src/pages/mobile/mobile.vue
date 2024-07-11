<template>
  <Header />
  <div class="mobile-page container mt-10">
    <div class="mobile-page__wrapper-main flex-col">
      <div
        class="mobile-page__wrapper-main2 flex w-full items-center rounded-lg border border-gray-200 overflow-hidden"
      >
        <div class="mobile__bg h-72 w-full md:h-96 sm:h-[450px] xs:h-[600px]">
          <div
            class="mobile-page__container-content p-8 flex flex-col justify-center items-center h-full md:p-4"
          >
            <span
              class="mobile-page__title text-white leading-10 text-center font-semibold text-dh4 sm:text-mh4 w-2/3 md:w-3/4 sm:w-full"
            >
              Top up prepaid mobile phones with Bitcoin and other cryptocurrencies from anywhere in
              the world
            </span>
            <div
              class="mobile-page__wrapper-inputs flex w-1/3 justify-center mt-6 xl:w-1/2 md:w-3/4 xs:flex-col sm:w-[100%]"
            >
              <div class="mobile-page__phone-number relative w-full">
                <SvgIcon
                  name="icon-cyprus"
                  class="mobile-page__phone-number-icon w-5 h-5 text-gray-300 absolute left-3 top-[calc(50%-10px)]"
                />
                <input
                  type="text"
                  class="mobile-page__phone-number-input h-12 w-full text-gray-700 flex justify-center items-start bg-gray-25 rounded-md pl-10"
                  placeholder="+375"
                />
              </div>
              <router-link
                to="#"
                class="mobile-page__btn-proceed flex items-center justify-center bg-orange-400 text-orange-25 h-12 font-medium rounded-md text-md pl-4 pr-4 pt-3 pb-3 ml-4 lg:text-sm xs:w-full xs:ml-0 xs:mt-4"
                >Proceed</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <GalleryCategory class="mt-20 lg:mt-10" />
    <MobileHowItWork class="mt-32 lg:mt-16" />
    <Newsletter class="mt-40 mb-40 lg:mt-20 lg:mb-20" />
    <Footer />
  </div>
</template>

<style scoped>
.mobile__bg {
  background-image: url('images/mobile-bg.png');
  background-image: -webkit-image-set(
    url('images/mobile-bg.png') 2x,
    url('images/mobile-bg.png') 1x
  );
  background-image: image-set(
    url('images/mobile-bg.webp') type('image/webp') 2x,
    url('images/mobile-bg.webp') type('image/webp') 1x,
    url('images/mobile-bg.png') 2x,
    url('images/mobile-bg.png') 1x
  );
  background-size: cover;
  background-position: 50%;
}
</style>

<script setup lang="ts">
import GalleryCategory from '@/components/gallery/gallery-category/gallery-category.vue'
import MobileHowItWork from './components/mobile-how-it-work/mobile-how-it-work.vue'
import Header from '@/components/header/header.vue'
import Newsletter from '@/components/newsletter/newsletter.vue'
import Footer from '@/components/footer/footer.vue'
</script>
