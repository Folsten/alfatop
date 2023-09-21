<template>
  <div class="container">
    <div class="h-[160px] flex items-center justify-center font-semibold text-3xl text-center text-gray-900">
      <h1>Choose from 1000+ products offered by global retailers<br class="lg:hidden"> and pay with crypto</h1>
    </div>
    <div class="flex md:flex-wrap">
      <div class="flex w-full md:w-full items-center m-5 rounded-lg overflow-hidden">
        <div class="mobile-and-crypto-card h-full w-full">
          <div class="p-8 flex flex-col">
            <span class="text-[28px] text-white leading-10 sm:text-center">Recharge your mobile <br class="lg:hidden">with crypto</span>
            <router-link
              to="#"
              class="w-40 h-9 text-gray-700 mt-5 flex justify-center items-center bg-gray-25 rounded-md sm:w-full"
            >Browse products</router-link>
          </div>
        </div>
      </div>
      <div class="flex w-full md:w-full items-center m-5 rounded-lg overflow-hidden">
        <div class="gift-cards-and-more h-full w-full">
          <div class="p-8 flex flex-col">
            <span class="text-[28px] text-white leading-10 sm:text-center">Shop exclusive gift cards
            <br class="lg:hidden">and more</span>
            <!-- <router-link to="#" class="w-40 h-9 text-gray-700 mt-5 flex justify-center items-center bg-gray-25 rounded-md">Browse products</router-link> -->
            <div class="flex mt-5 sm:flex-wrap">
              <div class="relative w-2/3 sm:w-full sm:mb-2">
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

<script setup land="ts">
import IconCyprus from '~/icons/icon-cyprus.vue';
</script>