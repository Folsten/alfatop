<template>
  <div
    class="account-sidebar relative flex flex-col justify-start items-start min-h-screen min-w-[64px] border border-gray-100 bg-gray-25 shadow-[4px_0px_8px_0px_rgba(0,0,0,0.02)] md:hidden"
    :class="{ 'sidebar-open-core': isOpen }"
  >
    <div class="fixed flex flex-col h-full">
      <div
        class="account-sidebar__header relative flex items-center w-full border-b border-gray-100 mb-6"
      >
        <div
          class="account-sidebar__header-container cursor-pointer flex justify-center items-center w-[60px] h-[64px]"
        >
          <SvgIcon
            name="icon-logo-no-text"
            class="account-sidebar__header-logo transition-all w-8 h-8 flex"
          />
        </div>
        <Transition name="fade-030">
          <div
            v-show="isOpen"
            @click="isOpen = !isOpen"
            class="account-sidebar__header-icon-wrapper absolute left-[200px] flex justify-center items-center cursor-pointer p-2 hover:bg-gray-100 hover:rounded-lg mr-2"
          >
            <SvgIcon
              name="icon-sidebar-right"
              class="account-sidebar__header-icon w-6 h-6 rotate-180 text-gray-700"
            ></SvgIcon>
          </div>
        </Transition>
      </div>
      <!--    <div class="p-2 pl-5">Account</div>-->
      <div
        :class="{ 'w-[258px]': isOpen }"
        class="account-sidebar__menu-item-wrapper local-transition cursor-pointer flex justify-start items-center h-16 p-2"
      >
        <router-link
          @mouseover.self="orderTooltip = true"
          @mouseleave.self="orderTooltip = false"
          to="#"
          class="relative account-sidebar__menu-item-container w-full flex p-2 hover:bg-gray-100 hover:rounded-lg"
        >
          <Transition name="fade-004">
            <div
              v-if="orderTooltip && !isOpen"
              class="sidebar-tooltip-custom absolute left-[52px] top-[-4px] bg-gray-900 font-medium text-sm text-gray-100 p-3 rounded-lg"
            >
              Orders
            </div>
          </Transition>
          <SvgIcon
            name="icon-orders"
            class="account-sidebar__menu-item-icon w-6 h-6 self-center text-gray-700"
          />
          <Transition name="fade-004">
            <div
              v-if="isOpen"
              class="account-sidebar__menu-item-text ml-2 text-sm text-gray-700 font-medium"
            >
              Orders
            </div>
          </Transition>
        </router-link>
      </div>
      <div
        :class="{ 'w-[258px]': isOpen }"
        class="account-sidebar__menu-item-wrapper local-transition cursor-pointer flex justify-start items-center h-16 p-2"
      >
        <router-link
          @mouseover.self="favouritesTooltip = true"
          @mouseleave.self="favouritesTooltip = false"
          to="#"
          class="relative account-sidebar__menu-item-container w-full flex p-2 hover:bg-gray-100 hover:rounded-lg"
        >
          <Transition name="fade-004">
            <div
              v-if="favouritesTooltip && !isOpen"
              class="sidebar-tooltip-custom absolute left-[52px] top-[-4px] bg-gray-900 font-medium text-sm text-gray-100 p-3 rounded-lg"
            >
              Favourites
            </div>
          </Transition>
          <SvgIcon
            name="icon-favourite-bag"
            class="account-sidebar__menu-item-icon w-6 h-6 self-center text-gray-700"
          />
          <Transition name="fade-004">
            <div
              v-if="isOpen"
              class="account-sidebar__menu-item-text ml-2 text-sm text-gray-700 font-medium"
            >
              Favourites
            </div>
          </Transition>
        </router-link>
      </div>
      <div
        :class="{ 'w-[258px]': isOpen }"
        class="account-sidebar__menu-item-wrapper local-transition cursor-pointer flex justify-start items-center trans h-16 p-2"
      >
        <router-link
          @mouseover.self="referralTooltip = true"
          @mouseleave.self="referralTooltip = false"
          to="#"
          class="relative account-sidebar__menu-item-container w-full flex p-2 hover:bg-gray-100 hover:rounded-lg"
        >
          <Transition name="fade-004">
            <div
              v-if="referralTooltip && !isOpen"
              class="sidebar-tooltip-custom absolute left-[52px] top-[-4px] bg-gray-900 font-medium text-sm text-gray-100 p-3 rounded-lg"
            >
              Referral
            </div>
          </Transition>
          <SvgIcon
            name="icon-referral"
            class="account-sidebar__menu-item-icon w-6 h-6 self-center text-gray-700"
          />
          <Transition name="fade-004">
            <div
              v-if="isOpen"
              class="account-sidebar__menu-item-text ml-2 text-sm text-gray-700 font-medium"
            >
              Referral program
            </div>
          </Transition>
        </router-link>
      </div>
      <div
        @click="isOpen = !isOpen"
        class="account-sidebar__bottom-sidebar-icon-wrapper cursor-pointer flex justify-start items-center h-16 p-2 pl-2 mt-auto"
      >
        <div
          class="account-sidebar__bottom-sidebar-icon-container flex p-2 hover:bg-gray-100 hover:rounded-lg"
        >
          <SvgIcon
            :class="{ 'rotate-180': isOpen }"
            name="icon-sidebar-right"
            class="account-sidebar__bottom-sidebar-icon w-6 h-6 self-center text-gray-700"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let isOpen = ref(true)
let orderTooltip = ref(false)
let favouritesTooltip = ref(false)
let referralTooltip = ref(false)
</script>

<style lang="scss" scoped>
.account-sidebar {
  transition: all 0.25s;
}

.local-transition {
  transition: all 0.25s;
  transition-property: all;
}

.sidebar-open-core {
  min-width: 260px !important;
}

.sidebar-open-row {
  justify-content: flex-start;
  width: 100%;
}

.sidebar-tooltip-custom {
  &::before {
    opacity: 1;
    top: calc(50% - 8px);
    left: -16px;
    content: '';
    border-width: 8px;
    border-style: solid;
    position: absolute;
    z-index: 1;
    pointer-events: none;
    border-color: transparent rgb(16, 24, 40) transparent transparent;
  }
}
</style>