<template>
  <div class="header-auth flex items-center justify-center ml-2">

<!--  MOBILE MENU START-->

    <div
      @click="isMobileMenuOpen = !isMobileMenuOpen"
      class="header-auth__burger-button hidden items-center p-2 rounded-[3px] shadow-md md:flex cursor-pointer"
    >
      <SvgIcon name="icon-group" class="w-4 h-4" />
    </div>
<!--    <div-->
<!--      :class="{ '!left-0': isMobileMenuOpen }"-->
<!--      class="mobile-menu absolute w-screen h-screen bg-white top-[73px] left-[100%] text-gray-900 z-10"-->
<!--    >-->
<!--      <div class="flex flex-col items-start pl-6 pr-6 mt-4">-->
<!--        <router-link to="#" class="">Account</router-link>-->
<!--        <router-link to="#" class="pl-2 pr-2 pt-1.5 pb-1.5">Dashboard</router-link>-->
<!--        <router-link to="#" class="pl-2 pr-2 pt-1.5 pb-1.5">Orders</router-link>-->
<!--        <router-link to="#" class="pl-2 pr-2 pt-1.5 pb-1.5">Favourites</router-link>-->
<!--        <router-link to="#" class="pl-2 pr-2 pt-1.5 pb-1.5">Support</router-link>-->
<!--        <router-link to="#" class="pl-2 pr-2 pt-1.5 pb-1.5">Referral program</router-link>-->
<!--      </div>-->
<!--    </div>-->

<!--  MOBILE MENU END  -->

<!--  LOGIN BUTTON START  -->
    <!-- <div class="header-auth__log-in-button flex items-center justify-center w-28 text-gray-700 h-10 rounded-lg text-sm border-2 cursor-pointer sm:hidden">
      <div class="mr-3">Log in</div>
      <IconLogin />
      <SvgIcon name="icon-login" class="auth__log-in-icon w-5 h-5 text-gray-700">
    </div> -->

<!--  LOGIN BUTTON END -->

    <div
      @click="isOpen = true"
      v-click-outside="outsideClickHandler"
      class="header-auth__main-container relative flex items-center justify-center md:hidden"
    >
      <div class="header-auth__my-account-button flex items-center cursor-pointer">
        <SvgIcon
          name="icon-my-account"
          class="header-auth__my-account-icon w-5 h-5 text-gray-700 mr-2"
        />
        <span class="header-auth__my-account-text text-gray-700 font-medium text-sm"
          >My account</span
        >
        <SvgIcon name="icon-arrow-down" :class="{'rotate-180': isOpen}" class="header-auth__my-account-arrow w-4 h-4 transition-all ml-2" />
      </div>
      <Transition name="fade">
        <div v-if="isOpen" class="header-auth__fly-window fly-window top-10 right-0 w-64">
          <div class="header-auth__fly-window-header flex flex-col pl-4 pr-4 pt-5 pb-2">
            <div class="header-auth__fly-window-my-account text-gray-900 font-medium text-sm">
              My account
            </div>
            <div class="header-auth__fly-window-my-email text-xs">myworkingemail@gmail.com</div>
          </div>
          <hr class="header-auth__hr1 border-gray-300 mt-2 mb-2" />
          <div class="header-auth__fly-window-content-container flex flex-col pl-4 pr-4 pt-2">
            <div class="header-auth__fly-window-account-text text-xs pb-2">Account</div>
            <div class="header-auth__fly-window-row flex items-center mt-2 cursor-pointer">
              <SvgIcon name="icon-orders" class="header-auth__orders-icon w-5 h-5 text-gray-700" />
              <div class="header-auth__orders-text ml-2 text-gray-700 font-medium">Orders</div>
            </div>
            <div class="header-auth__fly-window-row flex items-center mt-3.5 cursor-pointer">
              <SvgIcon
                name="icon-favourite-bag"
                class="header-auth__favourites-icon w-5 h-5 text-gray-700"
              />
              <div class="header-auth__favourites-text ml-2 text-gray-700 font-medium">
                Favourites
              </div>
            </div>
            <div class="header-auth__fly-window-row flex items-center mt-3.5 cursor-pointer">
              <SvgIcon
                name="icon-help-support"
                class="header-auth__icon-help-support w-5 h-5 text-gray-700"
              />
              <div class="header-auth__text-help-support ml-2 text-gray-700 font-medium">
                Help & Support
              </div>
            </div>
            <div class="header-auth__fly-window-row flex items-center mt-3.5 cursor-pointer">
              <SvgIcon
                name="icon-referral"
                class="header-auth__icon-referral w-5 h-5 text-gray-700"
              />
              <div class="header-auth__text-referral ml-2 text-gray-700 font-medium">
                Referral program
              </div>
            </div>
          </div>
          <hr class="header-auth__hr-2 border-gray-300 mt-5 mb-2" />
          <div class="header-auth__fly-window-bottom flex pl-4 pr-4">
            <div
              class="header-auth__fly-window-bottom-internal-container flex items-center mt-3 pb-5 cursor-pointer"
            >
              <SvgIcon name="icon-log-out" class="header-auth__icon-logout w-5 h-5 text-gray-700" />
              <div class="header-auth__text-logout ml-2 text-gray-700 font-medium">Log out</div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-menu {
  transition-property: all;
  transition-duration: 0.3s;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

let isOpen = ref(false)
let isMobileMenuOpen = ref(false)

function outsideClickHandler() {isOpen.value = false}
</script>