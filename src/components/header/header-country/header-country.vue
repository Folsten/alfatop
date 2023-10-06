<template>
  <div
    class="header-country flex items-center ml-2 cursor-pointer relative z-20"
    v-click-outside="outsideClickHandler"
    @click="isOpen = true"
  >
    <SvgIcon name="icon-cyprus" class="w-5 h-5 mr-2 text-gray-300" />
    <div class="header-country__selected-name text-gray-500 text-sm font-medium">Cyprus</div>
    <div class="ml-1">
      <SvgIcon name="icon-arrow-down" :class="{'rotate-180': isOpen}" class="w-5 h-5 text-gray-300 transition-all" />
    </div>
    <Transition name="fade">
      <div v-if="isOpen" class="header-country__fly-window-wrapper cursor-default">
        <div class="header-country__fly-window fly-window w-[280px] top-8 left-0">
          <div class="header-country__fly-window-internal-wrapper mt-3 mb-4 ml-3 mr-3">
            <div class="header-country__fly-window-header flex justify-start">
              <SvgIcon name="icon-cyprus" class="w-5 h-5 text-gray-300" />
              <div class="header-country__fly-window-header-info flex flex-col pl-2 items-start">
                <span
                  class="header-country__fly-window-header-where-title text-gray-900 text-sm font-medium"
                  >International</span
                >
                <span
                  class="header-country__fly-window-header-where-subtitle text-gray-500 text-xs font-normal"
                  >Browse products available globally</span
                >
              </div>
            </div>
            <hr class="header-country__hr mt-2 mb-2" />
            <div class="header-country__search-wrapper flex flex-col">
              <HeaderCountrySearch />
              <div
                class="header-country__items-wrapper relative flex flex-col max-h-28 mt-4 scroll-custom"
              >
                <HeaderCountryItem />
                <HeaderCountryItem />
                <HeaderCountryItem />
                <HeaderCountryItem />
                <HeaderCountryItem />
                <HeaderCountryItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderCountrySearch from './header-country-search.vue/header-country-search.vue'
import HeaderCountryItem from './header-country-item.vue/header-country-item.vue'

const isOpen = ref(false)

function outsideClickHandler() {isOpen.value = false}
</script>
