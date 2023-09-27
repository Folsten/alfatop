<template>
  <div class="flex lg:flex-col lg:items-center lg:max-w-2xl lg:ml-auto lg:mr-auto">
    <div class="flex items-center justify-center w-2/3 h-96 mr-10 lg:w-full lg:mr-0">
      <img
        src="./images/netflix.png"
        class="object-cover w-full h-full lg:mr-0"
      >
    </div>
    <div class="flex flex-col w-full lg:items-center">
      <div class="flex w-full justify-between lg:mt-4">
        <h4 class="text-dh4 font-semibold text-gray-900 sm:text-mh4">Netflix EUR Gift Card</h4>
        <button class="flex items-center pt-2 pb-2 pl-3 pr-3 border border-gray-300 rounded-md sm:hidden">
          <IconFavouriteAdded class="mr-2" />
          <div class="text-gray-700 text-sm font-medium">Add to favourites</div>
        </button>
      </div>
      <div class="flex flex-col w-full mt-6 sm:flex-col">
        <div class="flex justify-between items-center h-20 pt-4 pb-4 border-b border-gray-100 cursor-pointer">
          <div class="flex items-center">
            <input
              type="radio"
              class="mr-3"
            >
            <span class="text-gray-900 font-medium text-dh6 sm:text-mh6">Phone PIN refill</span>
          </div>
        </div>
        <!-- START INFO -->
        <div class="flex-col pt-4 rounded-md bg-gray-50">
          <div class="flex pl-4 pr-4 sm:flex-col">
            <div class="flex flex-col w-full mr-2 sm:mr-0">
              <div class="text-sm text-gray-700">Select plan or enter exact amount:</div>
              <Customselect />
            </div>
            <div class="flex flex-col w-full ml-2 sm:ml-0 sm:mt-4">
              <div class="text-sm text-gray-700">Enter phone number:</div>
              <div class="flex items-center w-full mt-1 pr-3 pt-2 pb-2 bg-gray-25 border border-gray-300 rounded-md">
                <div class="relative flex items-center h-full border-r border-gray-300 pl-3 cursor-pointer">
                  <IconCyprus class="mr-2" />
                  <div class="text-gray-500 font-medium text-sm mr-2">+375</div>
                  <IconArrowDown class="mr-2" />
                  <div class="fly-window flex flex-col left-0 top-10 w-full p-3 cursor-pointer">
                    <div class="flex items-center">
                      <IconCyprus />
                      <span class="pl-2 text-sm font-medium">+915</span>
                    </div>
                    <div class="flex items-center mt-3">
                      <IconCyprus />
                      <span class="pl-2 text-sm font-medium">+915</span>
                    </div>
                    <div class="flex items-center mt-3">
                      <IconCyprus />
                      <span class="pl-2 text-sm font-medium">+915</span>
                    </div>
                    <div class="flex items-center mt-3">
                      <IconCyprus />
                      <span class="pl-2 text-sm font-medium">+915</span>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  class="text-sm pl-2"
                >
              </div>
            </div>
          </div>
          <div class="flex flex-col pl-4 pr-4 mt-8">
            <div class="text-sm text-gray-700">Select plan or enter exact amount:</div>
            <Customselect />
          </div>
          <div class="flex w-full justify-between mt-8 pl-4 pr-4">
            <div class="flex items-center">
              <div class="mr-2 text-md text-gray-900 font-medium">Total estimate</div>
              <IconReference />
            </div>
            <div class="text-dh5 font-semibold text-gray-900 text-right sm:text-mh5">0.01622017 BTC</div>
          </div>
          <div class="flex w-full mt-10 pt-4 border-t border-gray-100 pl-4 pr-4">
            <div class="text-sm text-gray-500 font-medium">Description</div>
          </div>
          <div class="flex mt-2 text-md text-gray-900 pl-4 pb-4 pr-4">Pay on Netflix EUR with Crypto. Buy Netflix EUR Gift
            Cards with
            Bitcoin, Lightning, Ethereum,
            Binance Pay, USDT, USDC, Dogecoin, Litecoin, Dash. Instant email delivery. No account required. Start living
            on
            crypto!
          </div>
        </div>
        <!-- END INFO -->
        <div class="flex justify-between items-center h-20 pt-4 pb-4 border-b border-gray-100 cursor-pointer">
          <div class="flex items-center">
            <input
              type="radio"
              class="mr-3"
            >
            <span class="text-gray-900 font-medium text-dh6 sm:text-mh6">Phone PIN refill</span>
          </div>
        </div>
        <!-- START INFO -->
        <div class="flex-col pt-4 rounded-md bg-gray-50">
          <div class="flex m-4 border border-gray-300 bg-gray-25 rounded-md h-10 items-center">
            <input
              type="checkbox"
              class="checkbox mr-4 ml-3 h-10"
            >
            <div class="text-gray-900 font-medium">10 GB, 30 days 50</div>
          </div>
          <div class="flex m-4 border border-gray-300 bg-gray-25 rounded-md h-10 items-center">
            <input
              type="checkbox"
              class="checkbox mr-4 ml-3 h-10"
            >
            <div class="text-gray-900 font-medium">10 GB, 30 days 50</div>
          </div>
          <div class="flex m-4 border border-gray-300 bg-gray-25 rounded-md h-10 items-center">
            <input
              type="checkbox"
              class="checkbox mr-4 ml-3 h-10"
            >
            <div class="text-gray-900 font-medium">10 GB, 30 days 50</div>
          </div>
          <div class="flex m-4 border border-gray-300 bg-gray-25 rounded-md h-10 items-center">
            <input
              type="checkbox"
              class="checkbox mr-4 ml-3 h-10"
            >
            <div class="text-gray-900 font-medium">10 GB, 30 days 50</div>
          </div>
          <div class="flex m-4 border border-gray-300 bg-gray-25 rounded-md h-10 items-center">
            <input
              type="checkbox"
              class="checkbox mr-4 ml-3 h-10"
            >
            <div class="text-gray-900 font-medium">10 GB, 30 days 50</div>
          </div>
          <div class="flex m-4 border border-gray-300 bg-gray-25 rounded-md h-10 items-center">
            <input
              type="checkbox"
              class="checkbox mr-4 ml-3 h-10"
            >
            <div class="text-gray-900 font-medium">10 GB, 30 days 50</div>
          </div>
          <div class="flex flex-col pl-4 pr-4 mt-8 sm:ml-0 sm:mt-4">
            <div class="text-sm text-gray-700">Choose crypto to pay with</div>
            <Customselect />
          </div>
          <div class="flex w-full justify-between mt-8 pl-4 pr-4">
            <div class="flex items-center">
              <div class="mr-2 text-md text-gray-900 font-medium">Total estimate</div>
              <IconReference />
            </div>
            <div class="text-dh5 font-semibold text-gray-900 text-right sm:text-mh5">0.01622017 BTC</div>
          </div>
          <div class="flex w-full mt-10 pt-4 border-t border-gray-100 pl-4 pr-4">
            <div class="text-sm text-gray-500 font-medium">Description</div>
          </div>
          <div class="flex mt-2 text-md text-gray-900 pl-4 pb-4 pr-4">Pay on Netflix EUR with Crypto. Buy Netflix EUR Gift
            Cards with
            Bitcoin, Lightning, Ethereum,
            Binance Pay, USDT, USDC, Dogecoin, Litecoin, Dash. Instant email delivery. No account required. Start living
            on
            crypto!
          </div>
        </div>
        <!-- END INFO -->
        <div class="flex justify-between items-center h-20 pt-4 pb-4 cursor-pointer">
          <div class="flex items-center">
            <input
              type="radio"
              class="mr-3"
            >
            <span class="text-gray-900 font-medium text-dh6 sm:text-mh6">Phone PIN refill</span>
          </div>
        </div>
        <!-- START INFO -->
        <div class="flex-col pt-4 rounded-md bg-gray-50">
          <div class="flex m-4 border border-gray-300 bg-gray-25 rounded-md h-10 items-center">
            <input
              type="checkbox"
              class="checkbox mr-4 ml-3 h-10"
            >
            <div class="text-gray-900 font-medium">10 GB, 30 days 50</div>
          </div>
          <div class="flex pl-4 pr-4 sm:flex-col">
            <div class="flex flex-col w-full mr-2 sm:mr-0">
              <div class="text-sm text-gray-700">Select plan or enter exact amount:</div>
              <Customselect />
            </div>
            <div class="flex flex-col w-full ml-2 sm:ml-0 sm:mt-4">
              <div class="text-sm text-gray-700">Choose crypto to pay with</div>
              <Customselect />
            </div>
          </div>
          <div class="flex w-full justify-between mt-8 pl-4 pr-4">
            <div class="flex items-center">
              <div class="mr-2 text-md text-gray-900 font-medium">Total estimate</div>
              <IconReference />
            </div>
            <div class="text-dh5 font-semibold text-gray-900 text-right sm:text-mh5">0.01622017 BTC</div>
          </div>
          <div class="flex w-full mt-10 pt-4 border-t border-gray-100 pl-4 pr-4">
            <div class="text-sm text-gray-500 font-medium">Description</div>
          </div>
          <div class="flex mt-2 text-md text-gray-900 pl-4 pb-4 pr-4">Pay on Netflix EUR with Crypto. Buy Netflix EUR Gift
            Cards with
            Bitcoin, Lightning, Ethereum,
            Binance Pay, USDT, USDC, Dogecoin, Litecoin, Dash. Instant email delivery. No account required. Start living
            on
            crypto!
          </div>
        </div>
        <!-- END INFO -->
      </div>
      <div class="flex w-full justify-between mt-10 sm:flex-col">
        <button
          class="hidden items-center pt-2 pb-2 pl-3 pr-3 border border-gray-300 rounded-md sm:flex sm:justify-center"
        >
          <IconFavouriteAdded class="mr-2" />
          <div class="text-gray-700 text-sm font-medium">Add to favourites</div>
        </button>
        <button class="flex items-center bg-indigo-50 rounded-md pt-2 pb-2 pl-5 pr-5 sm:justify-center sm:mt-4">
          <IconGift class="mr-2" />
          <span class="text-md font-medium text-indigo-500">Purchase as gift</span>
        </button>
        <button class="flex items-center bg-success-500 rounded-md pt-2 pb-2 pl-5 pr-5 sm:justify-center sm:mt-4">
          <IconCartPlus class="mr-2" />
          <span class="text-md font-medium text-success-25">Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input[type="checkbox"] {
  width: 16px;
}
</style>

<script setup lang="ts">
// Components
import Customselect from '@/components/customselect/customselect.vue';
// Icons
import IconFavouriteAdded from '@/components/icons/icon-favourite-added.vue';
import IconReference from '@/components/icons/icon-reference.vue';
import IconGift from '@/components/icons/icon-gift.vue';
import IconCartPlus from '@/components/icons/icon-cart-plus.vue';
import IconCyprus from '@/components/icons/icon-cyprus.vue';
import IconArrowDown from '@/components/icons/icon-arrow-down.vue';
</script>