<template>
  <div class="home-welcome container">
    <div class="home-welcome__h1-wrapper flex items-center justify-center mt-10 mb-10">
      <h1 class="home-welcome__h1 font-semibold text-dh3 text-center text-gray-900 md:text-mh3">
        Choose from 1000+ products offered by global retailers<br class="lg:hidden" />
        and pay with crypto
      </h1>
    </div>
    <div class="home-welcome__wrapper-for-mobile-and-gift-cards flex sm:flex-wrap">
      <div
        class="home-welcome__wrapper-for-mobile-card flex w-full items-center mr-5 rounded-lg overflow-hidden h-[224px] sm:mb-5 sm:mr-0 lg:mr-2"
      >
        <div class="home-welcome__mobile-card h-full w-full">
          <div
            class="home-welcome__mobile-card-container p-8 flex flex-col justify-center h-full md:p-4"
          >
            <span
              class="home-welcome__mobile-card-title text-white leading-10 sm:text-center font-semibold text-dh4 md:text-mh4"
              >Recharge your mobile <br class="lg:hidden" />with crypto</span
            >
            <router-link
              to="#"
              tag="button"
              class="home-welcome__mobile-card-btn btn btn-neutral font-medium text-gray-700 font-medium w-40 h-10 mt-5 sm:w-full"
              >Browse products
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="home-welcome__wrapper-gifts-card flex w-full items-center ml-5 rounded-lg overflow-hidden h-[224px] sm:mt-5 sm:ml-0 lg:ml-2"
      >
        <div class="home-welcome__gifts-card h-full w-full">
          <div
            class="home-welcome__gifts-card-container p-8 flex flex-col h-full justify-center md:p-4"
          >
            <span
              class="home-welcome__gifts-card-title text-white leading-10 font-semibold sm:text-center text-dh4 md:text-mh4"
              >Shop exclusive gift cards <br class="lg:hidden" />and more</span
            >
            <div class="home-welcome__wrapper-gifts-card-2 flex mt-5 sm:flex-wrap">
              <div class="home-welcome__container-gifts-card-2 relative w-2/3 sm:w-full sm:mb-3">
                <SvgIcon
                  name="icon-cyprus"
                  class="home-welcome__gifts-card-country-icon w-5 h-5 text-gray-300 absolute left-3 top-[calc(50%-10px)]"
                />
                <input
                  type="tel"
                  class="home-welcome__gifts-card-phone-input h-10 w-full text-gray-700 flex justify-center items-start bg-gray-25 rounded-md pl-10 placeholder:font-medium"
                  placeholder="+375"
                />
              </div>
              <router-link
                to="#"
                tag="button"
                class="home-welcome__gifts-card-btn btn btn-orange font-medium w-20 h-10 pl-3 pr-3 ml-4 rounded-md lg:text-sm sm:w-full sm:ml-0"
                >Top up
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-welcome__mobile-card {
  background-image: url('images/mobileCardBg.png');
  background-image: -webkit-image-set(
    url('images/mobileCardBg.png') 2x,
    url('images/mobileCardBg.png') 1x
  );
  background-image: image-set(
    url('images/mobileCardBg.webp') type('image/webp') 2x,
    url('images/mobileCardBg.webp') type('image/webp') 1x,
    url('images/mobileCardBg.png') 2x,
    url('images/mobileCardBg.png') 1x
  );
  background-size: cover;
}

.home-welcome__gifts-card {
  background-image: url('images/giftsCardBg.png');
  background-image: -webkit-image-set(
    url('images/giftsCardBg.png') 2x,
    url('images/giftsCardBg.png') 1x
  );
  background-image: image-set(
    url('images/giftsCardBg.webp') type('image/webp') 2x,
    url('images/giftsCardBg.webp') type('image/webp') 1x,
    url('images/giftsCardBg.png') 2x,
    url('images/giftsCardBg.png') 1x
  );
  background-size: cover;
}
</style>

<script setup lang="ts"></script>
