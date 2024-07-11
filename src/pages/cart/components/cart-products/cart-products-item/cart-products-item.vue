<template>
  <div class="cart-products-item flex items-center justify-between w-full mt-4 first:mt-0 sm:mt-8">
    <div class="cart-products-item__header-container flex">
      <img
        src="../../../../../assets/images/f226fe62521ea77679ce2f1dcc1d3698.png"
        class="cart-products-item__product-img w-12 h-12 rounded-md overflow-hidden mr-2 sm:w-[88px] sm:h-[88px] sm:mr-4"
        alt="product-image"
      />
      <div class="cart-products-item__product-container flex flex-col">
        <span class="cart-products-item__product-name text-md font-medium text-gray-900 xs:text-sm"
          >Big Kahuna Burger Ltd.</span
        >
        <span class="cart-products-item__product-price text-sm font- font-medium text-gray-700"
          >210 EUR</span
        >
        <div class="cart-products-item__counter-wrapper hidden items-center sm:flex h-full">
          <div
            class="cart-products-item__counter-wrapper-2 flex rounded-md border border-gray-300 bg-gray-25 w-24 sm:h-8 sm:self-end"
          >
            <div
              class="cart-products-item__container flex w-full justify-between items-center pl-3 pr-3 pt-2 pb-2"
            >
              <SvgIcon
                name="icon-remove-unit"
                class="cart-products-item__counter-icon-remove-unit cursor-pointer w-4 h-4"
              />
              <span class="pl-2 pr-2 text-gray-900 font-medium text-sm">1</span>
              <SvgIcon
                name="icon-add-unit"
                class="cart-products-item__counter-icon-add-unit w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-products-item__mobile-counter-wrapper flex items-center sm:hidden">
      <div
        class="cart-products-item__mobile-counter-wrapper-2 flex rounded-md border border-gray-300 bg-gray-25 mr-6 w-24"
      >
        <div
          class="cart-products-item__mobile-counter-container flex w-full justify-between items-center pl-3 pr-3 pt-2 pb-2"
        >
          <SvgIcon
            name="icon-remove-unit"
            class="cart-products-item__mobile-counter-icon-remove-unit cursor-pointer w-4 h-4"
          />
          <span class="pl-2 pr-2 text-gray-900 font-medium text-sm">1</span>
          <SvgIcon
            name="icon-add-unit"
            class="cart-products-item__mobile-counter-icon-add-unit cursor-pointer w-4 h-4"
          />
        </div>
      </div>
      <SvgIcon
        name="icon-recycle"
        class="cart-products-item__icon-recycle cursor-pointer w-4 h-4 text-gray-900"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
