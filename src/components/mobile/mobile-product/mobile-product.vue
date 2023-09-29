<!--
Здесь классы по БЭМ прописаны не везде,
на данный момент не целесообразно,
т.к очень вероятно объединение с другим компонентом в один
src/gift/gift-product/gift-product.vue
Также будет комплексное деление на независимые компоненты, но на данном этапе
не очевидно как это будет по итогу.
-->

<template>
  <div class="mobile-product flex lg:flex-col lg:items-center lg:max-w-2xl lg:ml-auto lg:mr-auto">
    <div class="mobile-product__image-container flex items-center justify-center w-2/3 h-96 mr-10 lg:w-full lg:mr-0">
      <img
          src="./images/netflix.png"
          class="mobile-product__image object-cover w-full h-full lg:mr-0"
          alt="netflix"
      >
    </div>
    <div class="mobile-product__main-container flex flex-col w-full lg:items-center">
      <div class="mobile-product__header-container flex w-full justify-between lg:mt-4">
        <h4 class="mobile-product__header-title text-dh4 font-semibold text-gray-900 sm:text-mh4">Netflix EUR Gift Card</h4>
        <button
            class="mobile-product__header-btn btn btn-neutral pt-2 pb-2 pl-3 pr-3 text-sm sm:hidden">
          <SvgIcon
              name="icon-favourite-filled"
              class="mobile-product__header-icon w-4 h-4 mr-2"
          />
          Add to favourites
        </button>
      </div>
      <div class="mobile-product__content-container flex flex-col w-full mt-6 sm:flex-col">
        <div class="mobile-product__radio-wrapper flex justify-between items-center h-20 pt-4 pb-4 border-b border-gray-100 cursor-pointer">
          <div class="mobile-product__radio-container flex items-center">
            <input
                type="radio"
                class="mobile-product__radio-input mr-3"
            >
            <span class="mobile-product__radio-title text-gray-900 font-medium text-dh6 sm:text-mh6">Phone PIN refill</span>
          </div>
        </div>
        <!-- START INFO -->
        <div class="flex-col pt-4 rounded-md bg-gray-50">
          <div class="flex pl-4 pr-4 sm:flex-col">
            <div class="flex flex-col w-full mr-2 sm:mr-0">
              <div class="text-sm text-gray-700">Select plan or enter exact amount:</div>
              <SelectCustom/>
            </div>
            <div class="flex flex-col w-full ml-2 sm:ml-0 sm:mt-4">
              <div class="text-sm text-gray-700">Enter phone number:</div>
              <div class="flex items-center w-full mt-1 pr-3 pt-2 pb-2 bg-gray-25 border border-gray-300 rounded-md">
                <div class="relative flex items-center h-full border-r border-gray-300 pl-3 cursor-pointer">
                  <SvgIcon
                      name="icon-cyprus"
                      class="w-4 h-4 mr-2 text-gray-300"
                  />
                  <div class="text-gray-500 font-medium text-sm mr-2">+375</div>
                  <SvgIcon
                      name="icon-arrow-down"
                      class="w-4 h-4 mr-2"
                  />
                  <div class="fly-window flex flex-col left-0 top-10 w-full p-3 cursor-pointer">
                    <div class="flex items-center">
                      <SvgIcon
                          name="icon-cyprus"
                          class="w-4 h-4 text-gray-300"
                      />
                      <span class="pl-2 text-sm font-medium">+915</span>
                    </div>
                    <div class="flex items-center mt-3">
                      <SvgIcon
                          name="icon-cyprus"
                          class="w-4 h-4 text-gray-300"
                      />
                      <span class="pl-2 text-sm font-medium">+915</span>
                    </div>
                    <div class="flex items-center mt-3">
                      <SvgIcon
                          name="icon-cyprus"
                          class="w-4 h-4 text-gray-300"
                      />
                      <span class="pl-2 text-sm font-medium">+915</span>
                    </div>
                    <div class="flex items-center mt-3">
                      <SvgIcon
                          name="icon-cyprus"
                          class="w-4 h-4 text-gray-300"
                      />
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
            <SelectCustom/>
          </div>
          <div class="flex w-full justify-between mt-8 pl-4 pr-4">
            <div class="flex items-center">
              <div class="mr-2 text-md text-gray-900 font-medium">Total estimate</div>
              <SvgIcon
                  name="icon-reference"
                  class="w-4 h-4"
              />
            </div>
            <div class="text-dh5 font-semibold text-gray-900 text-right sm:text-mh5">0.01622017 BTC</div>
          </div>
          <div class="flex w-full mt-10 pt-4 border-t border-gray-100 pl-4 pr-4">
            <div class="text-sm text-gray-500 font-medium">Description</div>
          </div>
          <div class="flex mt-2 text-md text-gray-900 pl-4 pb-4 pr-4">Pay on Netflix EUR with Crypto. Buy Netflix EUR
            Gift
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
            <SelectCustom/>
          </div>
          <div class="flex w-full justify-between mt-8 pl-4 pr-4">
            <div class="flex items-center">
              <div class="mr-2 text-md text-gray-900 font-medium">Total estimate</div>
              <SvgIcon
                  name="icon-reference"
                  class="w-4 h-4"
              />
            </div>
            <div class="text-dh5 font-semibold text-gray-900 text-right sm:text-mh5">0.01622017 BTC</div>
          </div>
          <div class="flex w-full mt-10 pt-4 border-t border-gray-100 pl-4 pr-4">
            <div class="text-sm text-gray-500 font-medium">Description</div>
          </div>
          <div class="flex mt-2 text-md text-gray-900 pl-4 pb-4 pr-4">Pay on Netflix EUR with Crypto. Buy Netflix EUR
            Gift
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
              <SelectCustom/>
            </div>
            <div class="flex flex-col w-full ml-2 sm:ml-0 sm:mt-4">
              <div class="text-sm text-gray-700">Choose crypto to pay with</div>
              <SelectCustom/>
            </div>
          </div>
          <div class="flex w-full justify-between mt-8 pl-4 pr-4">
            <div class="flex items-center">
              <div class="mr-2 text-md text-gray-900 font-medium">Total estimate</div>
              <SvgIcon
                  name="icon-reference"
                  class="w-4 h-4"
              />
            </div>
            <div class="text-dh5 font-semibold text-gray-900 text-right sm:text-mh5">0.01622017 BTC</div>
          </div>
          <div class="flex w-full mt-10 pt-4 border-t border-gray-100 pl-4 pr-4">
            <div class="text-sm text-gray-500 font-medium">Description</div>
          </div>
          <div class="flex mt-2 text-md text-gray-900 pl-4 pb-4 pr-4">Pay on Netflix EUR with Crypto. Buy Netflix EUR
            Gift
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
            class="hidden items-center pt-2 pb-2 pl-3 pr-3 border border-gray-300 rounded-md sm:flex sm:justify-center text-gray-700 text-sm font-medium"
        >
          <SvgIcon name="icon-favourite-filled" class="w-4 h-4 mr-2"/>
          Add to favourites
        </button>
        <button class="flex items-center bg-indigo-50 rounded-md pt-2 pb-2 pl-5 pr-5 sm:justify-center sm:mt-4">
          <SvgIcon name="icon-gift-bold" class="w-4 h-4 mr-2 text-indigo-500"/>
          <span class="text-md font-medium text-indigo-500">Purchase as gift</span>
        </button>
        <button class="flex items-center bg-success-500 rounded-md pt-2 pb-2 pl-5 pr-5 sm:justify-center sm:mt-4">
          <SvgIcon name="icon-cart-plus" class="w-4 h-4 mr-2 text-success-25"/>
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
import SelectCustom from '~/select-custom/select-custom.vue';
</script>