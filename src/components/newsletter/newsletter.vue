<template>
  <div class="flex md:flex-wrap justify-center">
    <div class="flex flex-col w-full mr-5 md:mr-0">
      <h4 class="text-gray-900 text-dh4 font-semibold md:text-center text-mh4">Subscribe to our newsletter</h4>
      <p class="text-gray-700 text-lg font-normal md:text-center md:mb-6">Stay updated with our promotions and the
        latest news.</p>
    </div>
    <div class="flex flex-col w-full md:items-center">
      <div class="flex w-full md:justify-center md:flex-wrap">
        <input
          type="text"
          placeholder="Enter your Email"
          class="rounded-lg border-2 p-3 w-full h-12"
        >
        <button
          class="bg-orange-400 text-orange-25 rounded-md text-base w-[145px] ml-3 md:w-full md:h-12 md:mt-3 md:ml-0">Subscribe</button>
      </div>
      <div class="mt-1 md:text-center text-gray-700 font-normal text-sm md:mt-6 ml-[2px]">We care about your personal
        data, check our <router-link
          to="#"
          class="text-indigo-500"
        >Privacy policy</router-link>.</div>
    </div>
  </div>
</template>