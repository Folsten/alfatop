<template>
  <header class="header">
    <div class="container">
      <div class="header__top-nav flex items-center justify-between h-[48px] md:hidden">
        <HeaderCountry />
        <HeaderLanguage />
      </div>
      <div class="header__mid-nav flex items-center h-[72px]">
        <router-link to="/">
          <SvgIcon name="icon-big-logo" class="w-[104px] h-8" />
        </router-link>
        <HeaderSearch />
        <div class="flex ml-auto">
          <HeaderCart />
          <HeaderAuth />
        </div>
      </div>
    </div>
    <hr class="header__hr1 hidden md:flex" />
    <div class="container">
      <HeaderMenu />
    </div>
    <hr class="header__hr2 md:hidden" />
  </header>
</template>

<script setup lang="ts">
import HeaderCountry from './header-country/header-country.vue'
import HeaderLanguage from './header-language/header-language.vue'
import HeaderSearch from './header-search/header-search.vue'
import HeaderCart from './header-cart/header-cart.vue'
import HeaderAuth from './header-auth/header-auth.vue'
import HeaderMenu from './header-menu/header-menu.vue'
</script>
