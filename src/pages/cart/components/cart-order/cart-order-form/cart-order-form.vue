<template>
  <div
    class="cart-order-form flex flex-col mt-10 lg:border lg:rounded-lg lg:bg-gray-50 lg:p-6 xs:p-4"
  >
    <div class="cart-order-form__title text-dh6 text-gray-900 font-medium sm:text-mh6">
      Contact information
    </div>
    <div class="cart-order-form__row-1 flex">
      <div class="cart-order-form__have-an-account text-gray-500 text-sm">
        Already have an account?
      </div>
      <router-link to="#" class="cart-order-form__have-an-account-link pl-1 text-indigo-500 text-sm"
        >Log in
      </router-link>
    </div>
    <div class="cart-order-form__row-2 mt-4 text-gray-700 text-sm placeholder:font-medium">
      Enter email address for order status updates
    </div>
    <input
      type="text"
      class="card-order-form__input tmt-1 border border-gray-300 bg-gray-25 shadow-xs rounded-md h-[42px] pt-[10px] pb-[10px] pl-3 pr-3"
      placeholder="example@mail.com"
    />
    <div class="cart-order-form__checkbox-container flex mt-6">
      <input type="checkbox" class="cart-order-form__checkbox-input mr-2" />
      <p class="cart-order-form__checkbox-text flex items-center text-sm text-gray-700 font-medium">
        I agree to subscribe to the newsletter
      </p>
    </div>
    <div class="cart-order-form__checkbox-container flex mt-2">
      <input type="checkbox" class="cart-order-form__checkbox-input mr-2" />
      <p class="cart-order-form__checkbox-text flex items-center text-sm text-gray-700 font-medium">
        I accept
        <router-link to="#" class="text-indigo-500 ml-1 mr-1">Terms of Use </router-link>
        and
        <router-link to="#" class="text-indigo-500 ml-1">Privacy Policy </router-link>
      </p>
    </div>
    <div class="cart-order-form__buttons-container flex justify-between mt-8 sm:flex-col">
      <button
        class="cart-order-form__btn-continue flex items-center justify-center rounded-md border border-gray-300 shadow-xs pl-5 pr-5 pt-2 pb-2 text-gray-700 font-medium text-md h-10"
      >
        Continue shopping
      </button>
      <button
        class="cart-order-form__btn-payment flex items-center justify-center rounded-md border border-gray-300 shadow-xs pl-5 pr-5 pt-2 pb-2 text-success-25 bg-success-500 font-medium text-md h-10 sm:mt-4"
      >
        Proceed to payment
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
