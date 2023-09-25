<template>
  <div class="flex items-center justify-center ml-2">
    <div class="hidden items-center p-2 rounded-[3px] shadow-md md:flex cursor-pointer">
      <IconGroup />
    </div>
    <!-- <div class="flex items-center justify-center w-28 text-gray-700 h-10 rounded-lg text-sm border-2 cursor-pointer sm:hidden">
      <div class="mr-3">Log in</div>
      <IconLogin />
    </div> -->
    <div
      @click="isOpen = !isOpen"
      class="relative flex items-center text-sm justify-center md:hidden"
    >
      <IconMyAccount class="mr-2" />
      <span class="text-gray-700 font-medium">My account</span>
      <IconArrowDown class="ml-2" />
      <Transition name="fade">
        <div
          v-if="isOpen"
          class="fly-window top-10 right-0 w-64"
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
              <IconOrders />
              <div class="ml-2 text-gray-700 font-medium">Orders</div>
            </div>
            <div class="flex items-center mt-3 cursor-pointer">
              <IconFavourites />
              <div class="ml-2 text-gray-700 font-medium">Favourites</div>
            </div>
            <div class="flex items-center mt-3 cursor-pointer">
              <IconHelpsupport />
              <div class="ml-2 text-gray-700 font-medium">Help & Support</div>
            </div>
            <div class="flex items-center mt-3 cursor-pointer">
              <IconReferral />
              <div class="ml-2 text-gray-700 font-medium">Referral program</div>
            </div>
          </div>
          <hr class="text-gray-300 mt-2 mb-2">
          <div class="flex pl-4 pr-4">
            <div class="flex items-center mt-3 pb-5 cursor-pointer">
              <IconLogout />
              <div class="ml-2 text-gray-700 font-medium">Log out</div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
//Icons
import IconArrowDown from '~/icons/icon-arrow-down.vue';
import IconLogin from './icons/icon-login.vue';
import IconMyAccount from '~/icons/icon-my-account.vue';
import IconOrders from './icons/icon-orders.vue';
import IconFavourites from './icons/icon-favourites.vue';
import IconHelpsupport from './icons/icon-helpsupport.vue';
import IconReferral from './icons/icon-referral.vue';
import IconLogout from './icons/icon-logout.vue';
import IconGroup from '~/icons/icon-group.vue';
// Dependencies
import { ref } from 'vue';

let isOpen = ref(false);

</script>