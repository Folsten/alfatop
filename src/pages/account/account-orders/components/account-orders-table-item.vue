<template>
  <!-- XL+ VERSION -->
  <div
    class="account-orders-table-item flex w-full items-start h-[72px] border-b border-b-gray-100 pt-2.5 pb-2.5 xl:hidden"
  >
    <div
      class="account-orders-table-item__order-id flex w-[20%] text-gray-900 text-md font-medium pr-4 pl-4"
    >
      12345678910
    </div>
    <div class="account-orders-table-item__item-wrapper flex w-[35%] items-center pr-4">
      <img
        src="../../../../assets/images/playstation.png"
        class="account-orders-table-item__item-image h-10 w-10 rounded-lg"
      />
      <div
        class="account-orders-table-item__item-container flex flex-col w-full justify-start ml-2"
      >
        <div class="account-orders-table-item__item-container-2 flex w-full">
          <div class="account-orders-table-item__item-name text-md font-medium text-gray-900">
            Amazon.es Spain
          </div>
          <div class="account-orders-table-item__item-more text-sm font-medium text-gray-400 ml-5">
            +3 more
          </div>
        </div>
        <div class="account-orders-table-item__item-price text-sm text-gray-500">20 EUR</div>
      </div>
    </div>
    <div
      class="account-orders-table-item__total-amount-container flex w-[20%] flex-col text-center pr-4"
    >
      <div
        class="account-orders-table-item__total-amount-price text-gray-900 text-sm font-medium text-right"
      >
        8.56411352 USDT
      </div>
      <div
        class="account-orders-table-item__total-amount-price-2 text-xs text-gray-500 font-medium text-right"
      >
        8456.56 EUR
      </div>
    </div>
    <div class="account-orders-table-item__status-container flex w-[15%] ml-auto items-center">
      <SvgIcon name="icon-lightning-blue" class="account-orders-table-item__status-icon w-4 h-4" />
      <div class="account-orders-table-item__status-text text-sm text-gray-900 font-medium pl-2">
        Paid
      </div>
    </div>
  </div>
  <!-- XL- VERSION -->
  <div
    class="account-orders-table-item-small hidden flex-col rounded-md border border-gray-100 pt-4 pb-4 pl-3 pr-5 xl:flex"
  >
    <div
      class="account-orders-table-item-small__order-container flex border-b border-gray-100 pb-2"
    >
      <div
        class="account-orders-table-item-small__order-title mr-1 text-gray-900 text-sm font-medium sm:text-xs"
      >
        Order:
      </div>
      <router-link
        to="#"
        class="account-orders-table-item-small__order-number text-sm font-medium text-indigo-500 sm:text-xs"
        >123456789109876543212345</router-link
      >
    </div>
    <div
      class="account-orders-table-item-small__item-container flex items-center border-b border-gray-100 mt-2 pb-2"
    >
      <img
        src="@/assets/images/playstation.png"
        class="account-orders-table-item-small__item-img w-8 h-8 rounded-lg mr-2"
      />
      <div
        class="account-orders-table-item-small__item-name text-gray-900 font-medium text-sm sm:text-xs"
      >
        Amazon.es Spain
      </div>
      <div
        class="account-orders-table-item-small__item-more text-gray-400 font-medium text-sm ml-auto sm:text-xs"
      >
        +3 more
      </div>
    </div>
    <div
      class="account-orders-table-item-small__item-price-1 text-gray-900 font-medium text-sm mb-2 mt-2 sm:text-xs"
    >
      8.56411352 USDT TRC-20
    </div>
    <div class="account-orders-table-item-small__item-price-2-container flex justify-between">
      <div
        class="account-orders-table-item-small__item-price-2 text-sm text-gray-500 font-medium sm:text-xs"
      >
        8456.56 EUR
      </div>
      <div class="account-orders-table-item-small__status-container flex items-center">
        <SvgIcon
          name="icon-lightning-yellow"
          class="account-orders-table-item-small__status-icon w-4 h-4 sm:w-3 sm:h-3"
        />
        <div
          class="account-orders-table-item-small__status-text ml-2 font-semibold text-gray-900 text-sm sm:text-xs sm:ml-1"
        >
          NEW
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from '~/svg-icon/svg-icon.vue'
</script>
