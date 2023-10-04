<template>
  <div class="flex flex-col items-center mt-14">
    <SvgIcon name="icon-confirm-filled" class="w-8 h-8 text-indigo-500" />
    <h6 class="text-gray-900 font-medium text-dh6 mt-4">This invoice has been paid!</h6>
    <router-link to="#" class="text-indigo-500 text-xs mt-2">&ltTransaction hash></router-link>
    <button class="btn btn-success w-full mt-14 h-[48px]">Contact merchant</button>
    <router-link to="#" class="text-indigo-500 text-sm self-start mt-8">Show invoice details</router-link>
  </div>
</template>