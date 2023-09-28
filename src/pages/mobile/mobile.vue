
import GalleryCategory from '@/components/gallery/gallery-category/gallery-category.vue';
<template>
  <Header />
  <div class="container mt-10">
    <div class="flex-col">
      <div class="flex w-full items-center rounded-lg border border-gray-200 overflow-hidden">
        <div class="mobile-bg h-72 w-full md:h-96 sm:h-[450px] xs:h-[600px]">
          <div class="p-8 flex flex-col justify-center items-center h-full md:p-4">
            <span class="text-white leading-10 text-center font-semibold text-dh4 sm:text-mh4 xs:text-mh5 w-2/3">
              Top up prepaid mobile phones with Bitcoin and other cryptocurrencies from anywhere in the world
            </span>
            <div class="flex w-1/3 justify-center mt-6 xl:w-1/2 md:flex-col sm:w-2/3 xs:w-full">
              <div class="relative w-full">
                <SvgIcon name="icon-cyprus" class="w-5 h-5 text-gray-300 absolute left-3 top-[calc(50%-10px)]" />
                <input
                  type="tel"
                  class="h-12 w-full text-gray-700 flex justify-center items-start bg-gray-25 rounded-md pl-10"
                  placeholder="+375"
                >
              </div>
              <router-link
                to="#"
                class="flex items-center justify-center bg-orange-400 text-orange-25 h-12 font-medium rounded-md text-md pl-4 pr-4 pt-3 pb-3 ml-4 lg:text-sm sm:w-full md:ml-0 md:mt-4"
              >Proceed</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GalleryCategory class="mt-20 lg:mt-10" />
    <Mobilehowitwork class="mt-32 lg:mt-16" />
    <Newsletter class="mt-40 mb-40 lg:mt-20 lg:mb-20"/>
    <Footer />
  </div>
</template>

<style scoped>
.mobile-bg {
  background-image: url("@/components/images/mobile-bg.png");
  background-size: cover;
  background-position: 50%;
}
</style>

<script setup lang="ts">
import GalleryCategory from '@/components/gallery/gallery-category/gallery-category.vue';
import Mobilehowitwork from '@/components/mobilehowitwork/mobilehowitwork.vue';
import Header from '@/components/header/header.vue';
import Newsletter from '@/components/newsletter/newsletter.vue';
import Footer from '@/components/footer/footer.vue';
</script>