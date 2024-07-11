<!--
Здесь классы по БЭМ прописаны не везде,
на данный момент не целесообразно,
т.к очень вероятно объединение с другим компонентом в один
src/components/components-product/components-product.vue
Также будет комплексное деление на независимые компоненты, но на данном этапе
не очевидно как это будет по итогу.
-->

<template>
  <div class="flex lg:flex-col lg:items-center lg:max-w-2xl lg:ml-auto lg:mr-auto">
    <div class="flex items-center justify-center w-2/3 h-96 mr-10 lg:w-full lg:mr-0">
      <img src="./images/netflix.png" class="object-cover w-full h-full rounded-md lg:mr-0" alt="netflix" />
    </div>
    <div class="flex flex-col w-full lg:items-center">
      <div class="flex w-full justify-between lg:mt-4">
        <h4 class="text-dh4 font-semibold text-gray-900 sm:text-mh4">Netflix EUR Gift Card</h4>
        <button
          class="flex items-center pt-2 pb-2 pl-3 pr-3 border border-gray-300 rounded-md text-gray-700 text-sm font-medium sm:hidden"
        >
          <SvgIcon name="icon-favourite-filled" class="w-4 h-4 mr-2" />
          Add to favourites
        </button>
      </div>
      <div class="mt-10 bg-gray-50 border border-gray-100 rounded-md w-full">
        <div class="flex w-full border-gray-100 border-b p-4 sm:flex-col">
          <div class="flex flex-col w-full mr-2 sm:mr-0">
            <div class="text-sm text-gray-700">Select plan or enter exact amount:</div>
            <SelectCustom />
          </div>
          <div class="flex flex-col w-full ml-2 sm:ml-0 sm:mt-4">
            <div class="text-sm text-gray-700">Choose crypto to pay with</div>
            <SelectCustom />
          </div>
        </div>
        <div class="flex w-full justify-between p-4">
          <div class="flex items-center">
            <div class="mr-2 text-md text-gray-900 font-medium">Total estimate</div>
            <SvgIcon name="icon-reference" class="w-4 h-4 text-gray-700" />
          </div>
          <div class="text-dh5 font-semibold text-gray-900 text-right sm:text-mh5">
            0.01622017 BTC
          </div>
        </div>
      </div>
      <div class="flex w-full justify-between mt-6 sm:flex-col">
        <button
          class="hidden items-center pt-2 pb-2 pl-3 pr-3 border border-gray-300 rounded-md sm:flex sm:justify-center"
        >
          <SvgIcon name="icon-favourite-filled" class="w-4 h-4 mr-2" />
          <div class="text-gray-700 text-sm font-medium">Add to favourites</div>
        </button>
        <button
          class="flex items-center bg-indigo-50 rounded-md pt-2 pb-2 pl-5 pr-5 sm:justify-center sm:mt-4"
        >
          <SvgIcon name="icon-gift-bold" class="w-4 h-4 mr-2 text-indigo-500" />
          <span class="text-md font-medium text-indigo-500">Purchase as gift</span>
        </button>
        <button
          class="flex items-center bg-success-500 rounded-md pt-2 pb-2 pl-5 pr-5 sm:justify-center sm:mt-4"
        >
          <SvgIcon name="icon-cart-plus" class="w-4 h-4 mr-2 text-success-25" />
          <span class="text-md font-medium text-success-25">Add to cart</span>
        </button>
      </div>
      <div class="flex w-full mt-6">
        <div class="text-sm text-gray-500 font-medium">Description</div>
      </div>
      <div class="flex mt-2 text-md text-gray-900">
        Pay on Netflix EUR with Crypto. Buy Netflix EUR Gift Cards with Bitcoin, Lightning,
        Ethereum, Binance Pay, USDT, USDC, Dogecoin, Litecoin, Dash. Instant email delivery. No
        account required. Start living on crypto!
      </div>
      <div class="w-full text-sm text-gray-500 font-medium mt-6">Terms and conditions</div>
      <div class="flex mt-2 text-sm text-gray-700">
        Buying a Netflix Gift Card in the country Eurozone means getting access to the most popular
        entertainment streaming service for movies and series. This gift card will give you access
        to exciting films, series that keep you constantly in suspense and all this in any genre. A
        Netflix gift card can be a great gift option for relatives or friends, because we all, or
        most, watch movies or series.
      </div>
      <div class="flex w-full mt-6">
        <div class="text-sm text-gray-500 font-medium">How to redeem</div>
      </div>
      <ul class="text-sm text-gray-700 mt-2 list-disc w-full">
        <li class="ml-4">How to redeem</li>
        <li class="ml-4">How to redeem</li>
        <li class="ml-4">How to redeem</li>
      </ul>
      <div
        class="flex w-full items-center mt-6 shadow-xs bg-error-300 rounded-md pl-4 pr-4 pt-3 pb-3"
      >
        <SvgIcon name="icon-attention" class="w-6 h-6 mr-2 text-error-25" />
        <div class="text-sm font-medium text-error-25">
          This gift card is redeemable on the e-commerce platform
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import SelectCustom from '~/select-custom/select-custom.vue'
</script>
