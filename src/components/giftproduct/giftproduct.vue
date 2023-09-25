<template>
  <div class="flex lg:flex-col lg:items-center lg:max-w-2xl lg:ml-auto lg:mr-auto">
    <img
      src="./images/netflix.png"
      class="object-cover h-auto w-auto mr-10 lg:mr-0"
    >
    <div class="flex flex-col w-full lg:items-center">
      <div class="flex w-full justify-between lg:mt-4">
        <h4 class="text-dh4 font-semibold text-gray-900 sm:text-mh4">Netflix EUR Gift Card</h4>
        <button class="flex items-center pt-2 pb-2 pl-3 pr-3 border border-gray-300 rounded-md lg:hidden">
          <IconFavouriteAdded class="mr-2" />
          <div class="text-gray-700 text-sm font-medium">Add to favourites</div>
        </button>
      </div>
      <div class="mt-10 bg-gray-50 border border-gray-100 rounded-md w-full">
        <div class="flex w-full border-gray-100 border-b p-4">
          <div class="flex flex-col w-full mr-2">
            <div class="text-sm text-gray-700">Select plan or enter exact amount:</div>
            <Customselect />
          </div>
          <div class="flex flex-col w-full ml-2">
            <div class="text-sm text-gray-700">Choose crypto to pay with</div>
            <Customselect />
          </div>
        </div>
        <div class="flex w-full justify-between p-4">
          <div class="flex items-center">
            <div class="mr-2 text-md text-gray-900 font-medium">Total estimate</div>
            <IconReference />
          </div>
          <div class="text-dh5 font-semibold text-gray-900 text-right sm:text-mh5">0.01622017 BTC</div>
        </div>
      </div>
      <div class="flex justify-between mt-6">
        <button class="flex items-center bg-indigo-50 rounded-md pt-2 pb-2 pl-5 pr-5">
          <IconGift class="mr-2" />
          <span class="text-md font-medium text-indigo-500">Purchase as gift</span>
        </button>
        <button class="flex items-center bg-success-500 rounded-md pt-2 pb-2 pl-5 pr-5">
          <IconCartPlus class="mr-2" />
          <span class="text-md font-medium text-success-25">Add to cart</span>
        </button>
      </div>
      <div class="flex w-full mt-6">
        <div class="text-sm text-gray-500 font-medium">Description</div>
      </div>
      <div class="flex mt-2 text-md text-gray-900">Pay on Netflix EUR with Crypto. Buy Netflix EUR Gift Cards with
        Bitcoin, Lightning, Ethereum,
        Binance Pay, USDT, USDC, Dogecoin, Litecoin, Dash. Instant email delivery. No account required. Start living on
        crypto!
      </div>
      <div class="text-sm text-gray-500 font-medium mt-6">Terms and conditions</div>
      <div class="flex mt-2 text-sm text-gray-700">Buying a Netflix Gift Card in the country Eurozone means getting access
        to the most popular entertainment streaming service for movies and series. This gift card will give you access to
        exciting films, series that keep you constantly in suspense and all this in any genre. A Netflix gift card can be
        a great gift option for relatives or friends, because we all, or most, watch movies or series.</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import Customselect from '@/components/customselect/customselect.vue';
// Icons
import IconFavouriteAdded from '@/components/icons/icon-favourite-added.vue';
import IconReference from '@/components/icons/icon-reference.vue';
import IconGift from '@/components/icons/icon-gift.vue';
import IconCartPlus from '@/components/icons/icon-cart-plus.vue';
</script>