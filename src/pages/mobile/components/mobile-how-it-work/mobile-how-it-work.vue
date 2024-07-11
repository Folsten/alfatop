<!--
Здесь классы по БЭМ прописаны не везде,
на данный момент не целесообразно,
т.к наиболее вероятно объединение с другим компонентом в один
src/components/components-how-it-work/components-how-it-work
-->

<template>
  <div class="flex-col">
    <div class="flex justify-between">
      <div class="flex-col">
        <h4 class="text-dh4 font-semibold text-gray-900 sm:text-mh4">How does it work</h4>
        <div class="text-gray-500 text-lg">
          We offer absolutely transparent conditions for working with cryptocurrencies without
          hidden fees and restrictions.
        </div>
      </div>
      <button
        class="flex self-end items-center p-[10px] shadow-xs border border-gray-300 bg-gray-25 rounded-lg ml-2"
      >
        <SvgIcon name="icon-list" class="w-5 h-5 mr-2 text-gray-700" />
        <span class="text-gray-700 font-medium">FAQ</span>
      </button>
    </div>
    <div class="flex mt-10 md:flex-col">
      <div class="w-full rounded-md bg-gray-25 border border-gray-200 mr-10 md:mr-0">
        <div class="flex-col items-start w-full p-6">
          <SvgIcon
            name="icon-phonenumber"
            class="h-12 w-full flex justify-start self-start text-left md:w-auto"
          />
          <h6 class="text-gray-900 text-dh6 font-medium mt-6 sm:text-mh6">
            Choose your payment method and amount
          </h6>
          <p class="text-md mt-4">Select or enter the preferred value for the gift card.</p>
        </div>
      </div>
      <div class="w-full rounded-md bg-gray-25 border border-gray-200 mr-10 md:mr-0 md:mt-6">
        <div class="flex-col w-full p-6">
          <SvgIcon name="icon-prefferedcrypto" class="h-12 w-28 text-indigo-500" />
          <h6 class="text-gray-900 text-dh6 font-medium mt-6 sm:text-mh6">
            Pay with the preferred crypto
          </h6>
          <p class="text-md mt-4">In most cases, the payment is confirmed within a few minutes.</p>
        </div>
      </div>
      <div class="w-full rounded-md bg-gray-25 border border-gray-200 md:mt-6">
        <div class="flex-col items-start w-full p-6">
          <SvgIcon name="icon-confirm" class="h-12 w-12 text-indigo-500" />
          <h6 class="text-gray-900 text-dh6 font-medium mt-6 sm:text-mh6">
            That's it, ready to use it!
          </h6>
          <p class="text-md mt-4">
            Redeem the gift card at your chosen retailer according to their instructions.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Icons
</script>
