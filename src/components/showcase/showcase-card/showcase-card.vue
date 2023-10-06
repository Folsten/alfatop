<template>
  <div class="showcase-card flex flex-col mt-8 w-full xs:flex-row">
    <div class="showcase-card__header-container relative">
      <img
        src="../../../assets/images/playstation.png"
        class="showcase-card__header-img rounded-md w-full object-cover h-48"
        alt="playstation"
      />
      <div class="showcase-card__absolute-block absolute w-full top-0 flex xs:hidden">
        <div
          class="showcase-card__signs-container w-full flex pt-4 pl-4 pr-4 sm:pt-2 sm:pl-2 sm:pr-2"
        >
          <div
            class="showcase-card__new-sign bg-blue-600 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md sm:pl-2 sm:pr-2"
          >
            New
          </div>
          <div
            class="showcase-card__popular-sign bg-orange-400 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md ml-2 sm:pl-1 sm:pr-1 sm:pb-1 sm:pt-1"
          >
            Popular
          </div>
          <SvgIcon
            @click="isFavouriteAdded = true"
            v-if="! isFavouriteAdded"
            name="icon-favourite"
            class="showcase-card__favourite-icon w-5 h-5 ml-auto cursor-pointer text-warning-300 select-none sm:hidden"
          />
          <SvgIcon
            @click="isFavouriteAdded = false"
            v-if="isFavouriteAdded"
            name="icon-favourite-filled"
            class="showcase-card__favourite-icon w-5 h-5 ml-auto cursor-pointer text-warning-300 select-none sm:hidden"
          />
        </div>
      </div>
    </div>
    <div class="showcase-card__mid-wrapper flex-col xs:ml-3">
      <div class="showcase-card__mid-container flex">
        <div
          class="showcase-card__new-sign-mobile bg-blue-600 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md hidden sm:pl-2 sm:pr-2 xs:flex"
        >
          New
        </div>
        <div
          class="showcase-card__new-sign-popular bg-orange-400 text-gray-25 text-xs font-medium pt-1 pb-1 pl-3 pr-3 rounded-md ml-2 hidden sm:pl-1 sm:pr-1 sm:pb-1 sm:pt-1 xs:flex"
        >
          Popular
        </div>
      </div>
      <div class="showcase-card__crumbs text-gray-500 text-xs mt-3 xs:hidden">
        Gift Cards<span class="font-bold text-xs pl-1 pr-1">/</span>Travel and Transport
      </div>
      <div
        class="showcase-card__title text-gray-900 text-dh6 font-semibold mt-2 md:text-mh6 xs:text-md"
      >
        PUBG Mobile UC International
      </div>
      <div class="showcase-card__price text-gray-900 text-md font-semibold mt-2">
        5 EUR - 200 EUR
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

let isFavouriteAdded = ref(false)
</script>
