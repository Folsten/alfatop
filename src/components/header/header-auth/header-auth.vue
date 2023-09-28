<template>
  <div class="flex items-center justify-center ml-2">
    <div class="hidden items-center p-2 rounded-[3px] shadow-md md:flex cursor-pointer">
      <SvgIcon
        name="icon-group"
        class="w-4 h-4"
      />
    </div>
    <!-- <div class="flex items-center justify-center w-28 text-gray-700 h-10 rounded-lg text-sm border-2 cursor-pointer sm:hidden">
      <div class="mr-3">Log in</div>
      <IconLogin />
      <SvgIcon name="icon-login" class="w-5 h-5 text-gray-700">
    </div> -->
    <div
      @click="isOpen = !isOpen"
      class="relative flex items-center justify-center md:hidden"
    >
      <div class="flex items-center cursor-pointer">
        <SvgIcon
          name="icon-my-account"
          class="w-5 h-5 text-gray-700 mr-2"
        />
        <span class="text-gray-700 font-medium text-sm">My account</span>
        <SvgIcon
          name="icon-arrow-down"
          class="w-4 h-4 ml-2"
        />
      </div>
      <Transition name="fade">
        <div
          v-if="isOpen"
          class="flyWindow top-10 right-0 w-64"
        >
          <div class="flex flex-col pl-4 pr-4 pt-5 pb-2">
            <div class="text-gray-900 font-medium text-sm">
              My account
            </div>
            <div class="text-xs">
              myworkingemail@gmail.com
            </div>
          </div>
          <hr class="text-gray-300 mt-2 mb-2">
          <div class="flex flex-col pl-4 pr-4 pt-2">
            <div class="text-xs pb-2">Account</div>
            <div class="flex items-center mt-2 cursor-pointer">
              <SvgIcon
                name="icon-orders"
                class="w-5 h-5 text-gray-700"
              />
              <div class="ml-2 text-gray-700 font-medium">Orders</div>
            </div>
            <div class="flex items-center mt-3 cursor-pointer">
              <SvgIcon
                name="icon-favourites2"
                class="w-5 h-5 text-gray-700"
              />
              <div class="ml-2 text-gray-700 font-medium">Favourites</div>
            </div>
            <div class="flex items-center mt-3 cursor-pointer">
              <SvgIcon
                name="icon-helpsupport"
                class="w-5 h-5 text-gray-700"
              />
              <div class="ml-2 text-gray-700 font-medium">Help & Support</div>
            </div>
            <div class="flex items-center mt-3 cursor-pointer">
              <SvgIcon
                name="icon-referral"
                class="w-5 h-5 text-gray-700"
              />
              <div class="ml-2 text-gray-700 font-medium">Referral program</div>
            </div>
          </div>
          <hr class="text-gray-300 mt-2 mb-2">
          <div class="flex pl-4 pr-4">
            <div class="flex items-center mt-3 pb-5 cursor-pointer">
              <SvgIcon
                name="icon-logout"
                class="w-5 h-5 text-gray-700"
              />
              <div class="ml-2 text-gray-700 font-medium">Log out</div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let isOpen = ref(false);
</script>