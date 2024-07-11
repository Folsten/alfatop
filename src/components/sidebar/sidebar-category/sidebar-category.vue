<template>
  <div class="sidebar-category flex flex-col first:pt-0 first:mt-0 mt-3">
    <div
      @click="accordionHandler"
      class="sidebar-category__container flex items-center justify-between text-gray-900 cursor-pointer pt-3 pb-3 pl-4 pr-4 hover:bg-indigo-50 rounded-md first:mt-2 transition-all"
    >
      <div class="sidebar-category__wrapper flex items-center">
        <SvgIcon
          name="icon-gift"
          class="sidebar-category__category-icon w-4 h-4 text-gray-900 mr-3"
        />
        <span class="sidebar-category__category-name font-medium">Gift cards</span>
      </div>
      <SvgIcon
        name="icon-arrow-up"
        :class="{ 'rotate-180': !isCategoryOpen }"
        class="local-transition sidebar-category__arrow w-2 h-2 text-gray-900"
      />
    </div>
    <div
      ref="contentContainer"
      class="overflow-hidden local-transition"
    >
      <div class="flex flex-col first:mt-0">
        <SidebarCategoryItem />
        <SidebarCategoryItem />
        <SidebarCategoryItem />
        <SidebarCategoryItem />
        <SidebarCategoryItem />
        <SidebarCategoryItem />
      </div>
    </div>
  </div>
</template>

<style>
.local-transition {
  transition-property: all;
  transition-duration: 0.3s;
}
</style>

<script setup lang="ts">
import SidebarCategoryItem from './sidebar-category-item/sidebar-category-item.vue'
import SvgIcon from '~/svg-icon/svg-icon.vue'
import { ref, onMounted } from "vue";

let isCategoryOpen = ref(true)
let contentContainer = ref()
let contentContainerHeight = ''

onMounted(async () => {
  window.addEventListener("load", function() {
    contentContainerHeight = contentContainer.value.offsetHeight
    contentContainer.value.style.height = contentContainerHeight + 'px'
  });
})

function accordionHandler() {
  if (isCategoryOpen.value) {
    contentContainer.value.style.height = '0px'
    isCategoryOpen.value = false
    return
  }
  contentContainer.value.style.height = contentContainerHeight + 'px'
  isCategoryOpen.value = true
}
</script>