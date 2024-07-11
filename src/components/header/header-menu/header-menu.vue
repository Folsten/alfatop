<template>
  <div
    class="header-menu flex h-[72px] items-center md:justify-center md:items-end sm:justify-start overflow-x-auto"
  >
    <HeaderMenuItem />
    <HeaderMenuItem />
    <HeaderMenuItem />
    <HeaderMenuItem />
  </div>
</template>

<script setup lang="ts">
import HeaderMenuItem from './header-menu-item/header-menu-item.vue'
</script>
