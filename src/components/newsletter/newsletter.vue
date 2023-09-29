<template>
  <div class="newsletter flex md:flex-wrap justify-center">
    <div class="newsletter__info-container flex flex-col w-full mr-5 md:mr-0">
      <h4 class="newsletter__info-subscribe text-gray-900 text-dh4 font-semibold md:text-center text-mh4">Subscribe to
        our newsletter</h4>
      <p class="newsletter__info-stay-updated text-gray-700 text-lg font-normal md:text-center md:mb-6">Stay updated
        with our promotions and the
        latest news.</p>
    </div>
    <div class="newsletter__action-main-container flex flex-col w-full md:items-center">
      <div class="newsletter__action-container-1 flex w-full md:justify-center md:flex-wrap">
        <input
            type="text"
            placeholder="Enter your Email"
            class="newsletter__action-input rounded-lg border-2 p-3 w-full h-12"
        >
        <button
            class="newsletter__action-btn btn btn-orange w-[145px] ml-3 md:w-full md:h-12 md:mt-3 md:ml-0">Subscribe
        </button>
      </div>
      <div class="newsletter__action-personal-data mt-1 md:text-center text-gray-700 font-normal text-sm md:mt-6 ml-[2px]">We care about your personal
        data, check our
        <router-link
            to="#"
            class="text-indigo-500"
        >Privacy policy
        </router-link>
        .
      </div>
    </div>
  </div>
</template>