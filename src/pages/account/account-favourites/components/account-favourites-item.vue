<template>
  <!-- XL+ -->
  <div class="w-full flex mt-10 xl:hidden">
    <div class="flex w-[50%]">
      <img src="@/assets/images/playstation.png" class="w-10 h-10 rounded-md" />
      <div class="flex flex-col justify-center-center ml-4">
        <div class="text-gray-900 font-medium text-sm">Very long product name from the catalog</div>
        <div class="flex text-gray-500 text-xs">
          <span>Gift Cards</span>
          <span class="ml-1 mr-1">/</span>
          <span>Traven and Transport</span>
        </div>
      </div>
    </div>
    <div class="flex w-[50%] items-center">
      <div class="text-gray-900 text-sm font-medium ">40 EUR</div>
      <div class="flex ml-auto">
        <button class="btn btn-neutral h-10 p-2.5 mr-4">
          <SvgIcon name="icon-favourite-remove" class="w-4 h-4 mr-2" />
          <span class="text-sm font-medium text-gray-700">Remove from favourites</span>
        </button>
        <button class="btn btn-success h-10 p-2.5">
          <SvgIcon name="icon-cart-with-arrow-down" class="w-4 h-4 mr-2" />
          <span class="text-sm font-medium text-success-25">Buy again</span>
        </button>
      </div>
    </div>
  </div>

  <!-- XL- -->
  <div class="hidden w-full flex-col xl:flex">
    <div class="flex w-full mt-9">
      <img src="@/assets/images/playstation.png" class="w-10 h-10 rounded-md" />
      <div class="flex flex-col justify-center-center ml-4">
        <div class="text-gray-900 font-medium text-sm">Amazon.es Spain</div>
        <div class="flex text-gray-500 text-xs">20 EUR</div>
      </div>
      <div class="flex ml-auto">40 EUR</div>
    </div>
    <div class="flex w-full justify-between mt-6">
      <button class="btn btn-neutral h-8 p-2.5 mr-4">
        <SvgIcon name="icon-favourite-remove" class="w-4 h-4 mr-2" />
        <span class="text-sm font-medium text-gray-700">Remove</span>
      </button>
      <button class="btn btn-success h-8 p-2.5">
        <SvgIcon name="icon-cart-with-arrow-down" class="w-4 h-4 mr-2" />
        <span class="text-sm font-medium text-success-25">Buy again</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
