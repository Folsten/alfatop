<template>
  <div class="account-orders-order-product flex w-full items-center mt-8">
    <img class="w-10 h-10 rounded-md mr-4" src="@/assets/images/playstation.png" />
    <div class="flex flex-col mr-4">
      <div class="text-sm leading-5 text-gray-900 font-medium">Amazon.es Spain</div>
      <div class="text-sm leading-5 font-medium text-gray-700">20 EUR</div>
    </div>
    <div class="text-gray-900 font-medium ml-auto mr-auto">1</div>
    <div class="flex items-center ml-auto mr-auto">
      <SvgIcon name="icon-lightning-green" class="w-4 h-4 mr-2" />
      <div class="text-sm font-semibold text-gray-900">Completed</div>
      <button class="btn btn-neutral"></button>
    </div>
    <button class="btn btn-neutral h-[42px] pl-3 pr-3 pt-1.5 pb-1.5">
      <SvgIcon name="icon-favourite-filled" class="w-4 h-4 mr-2" />
      <span class="flex text-sm">Add to favourites</span>
    </button>
  </div>
</template>