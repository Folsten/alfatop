<template>
  <div class="container">
    <div class="h-[160px] flex items-center justify-center font-semibold text-dh3 text-center text-gray-900 mt-4 mb-4 md:text-mh3">
      <h1>Choose from 1000+ products offered by global retailers<br class="lg:hidden"> and pay with crypto</h1>
    </div>
    <div class="flex sm:flex-wrap">
      <div class="flex w-full items-center mr-5 rounded-lg overflow-hidden h-[224px] sm:mb-5 lg:mr-1">
        <div class="mobile-and-crypto-card h-full w-full">
          <div class="p-8 flex flex-col justify-center h-full md:p-4">
            <span class="text-white leading-10 sm:text-center text-dh4 md:text-mh4">Recharge your mobile <br class="lg:hidden">with crypto</span>
            <router-link
              to="#"
              class="w-40 h-9 text-gray-700 mt-5 flex justify-center items-center bg-gray-25 rounded-md sm:w-full"
            >Browse products</router-link>
          </div>
        </div>
      </div>
      <div class="flex w-full items-center ml-5 rounded-lg overflow-hidden h-[224px] sm:mt-5 lg:ml-1">
        <div class="gift-cards-and-more h-full w-full">
          <div class="p-8 flex flex-col h-full justify-center md:p-4">
            <span class="text-white leading-10 sm:text-center text-dh4 md:text-mh4">Shop exclusive gift cards
            <br class="lg:hidden">and more</span>
            <!-- <router-link to="#" class="w-40 h-9 text-gray-700 mt-5 flex justify-center items-center bg-gray-25 rounded-md">Browse products</router-link> -->
            <div class="flex mt-5 sm:flex-wrap">
              <div class="relative w-2/3 sm:w-full sm:mb-3">
                <IconCyprus class="absolute left-3 h-[20px] w-[20px] top-[calc(50%-10px)]" />
                <input
                  type="tel"
                  class="h-9 w-full text-gray-700 flex justify-center items-start bg-gray-25 rounded-md pl-10"
                  placeholder="+375"
                >
              </div>
              <router-link
                to="#"
                class="flex items-center justify-center bg-orange-400 text-orange-25 h-9 pl-3 pr-3 ml-4 rounded-md lg:text-sm sm:w-full sm:ml-0"
              >Top up</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobile-and-crypto-card {
  background: url('./images/recharge-your-mobile-and-crypto.png');
  background-size: cover;
}

.gift-cards-and-more {
  background: url('./images/shop-exclusive-gift-cards-and-more.png');
  background-size: cover;
}
</style>

<script setup lang="ts">
import IconCyprus from '~/icons/icon-cyprus.vue';
</script>