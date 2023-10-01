<template>
  <div
    class="sidebar flex flex-col justify-start items-start h-screen w-[66px] border border-gray-100 bg-gray-25 shadow-[4px_0px_8px_0px_rgba(0,0,0,0.02)]"
    :class="{ 'sidebar-open-core': isOpen }"
  >
    <div class="relative flex items-center w-full mt-4 mb-6">
      <div class="cursor-pointer flex justify-center items-center w-16 h-16">
        <SvgIcon name="icon-logo-no-text" class="transition-all w-8 h-8 flex" />
      </div>
      <Transition name="fade-007">
        <div
          v-if="isOpen"
          @click="isOpen = !isOpen"
          class="absolute right-0 flex justify-center items-center cursor-pointer p-2 hover:bg-gray-100 hover:rounded-lg"
        >
          <SvgIcon name="icon-sidebar-right" class="w-6 h-6 rotate-180 text-gray-700"></SvgIcon>
        </div>
      </Transition>
    </div>
    <div
      :class="{ 'w-[278px] !pl-2': isOpen }"
      class="transition-all cursor-pointer flex justify-start items-center h-16 p-2 pl-3"
    >
      <div class="w-full flex p-2 hover:bg-gray-100 hover:rounded-lg">
        <SvgIcon name="icon-orders" class="w-6 h-6 self-center text-gray-700" />
        <Transition name="fade-007">
          <div v-if="isOpen" class="ml-2 text-sm text-gray-700 font-medium">Orders</div>
        </Transition>
      </div>
    </div>
    <div
      :class="{ 'w-[278px] !pl-2': isOpen }"
      class="transition-all cursor-pointer flex justify-start items-center h-16 p-2 pl-3"
    >
      <div class="w-full flex p-2 hover:bg-gray-100 hover:rounded-lg">
        <SvgIcon name="icon-favourite-bag" class="w-6 h-6 self-center text-gray-700" />
        <Transition name="fade-007">
          <div v-if="isOpen" class="ml-2 text-sm text-gray-700 font-medium">Favourites</div>
        </Transition>
      </div>
    </div>
    <div
      :class="{ 'w-[278px] !pl-2': isOpen }"
      class="transition-all cursor-pointer flex justify-start items-center h-16 p-2 pl-3"
    >
      <div class="w-full flex p-2 hover:bg-gray-100 hover:rounded-lg">
        <SvgIcon name="icon-referral" class="w-6 h-6 self-center text-gray-700" />
        <Transition name="fade-007">
          <div v-if="isOpen" class="ml-2 text-sm text-gray-700 font-medium">Referral program</div>
        </Transition>
      </div>
    </div>
    <div
      @click="isOpen = !isOpen"
      class="cursor-pointer flex justify-start items-center h-16 p-2 pl-2 mt-auto"
    >
      <div class="w-full flex p-2 hover:bg-gray-100 hover:rounded-lg">
        <SvgIcon
          :class="{ 'rotate-180': isOpen }"
          name="icon-sidebar-right"
          class="w-6 h-6 self-center text-gray-700"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let isOpen = ref(false)
</script>

<style lang="scss" scoped>
.sidebar {
  transition: all 0.25s;
}

.sidebar-open-core {
  width: 312px !important;
  padding-left: 16px;
  padding-right: 16px;
}

.sidebar-open-row {
  justify-content: flex-start;
  width: 100%;
}
</style>