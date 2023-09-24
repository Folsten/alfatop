<template>
  <header>
    <div class="container">
      <div class="flex items-center justify-between h-[48px] md:hidden">
        <HeaderCountry />
        <HeaderLanguage />
      </div>
      <div class="flex items-center h-[72px]">
        <IconBigLogo />
        <HeaderSearch />
        <div class="flex ml-auto">
          <HeaderCart />
          <HeaderAuth />
        </div>
      </div>
    </div>
    <hr class="hidden md:flex">
    <div class="container">
      <HeaderMenu />
    </div>
    <hr class="md:hidden">
  </header>
</template>

<script setup lang="ts">
import HeaderCountry from './header-country/header-country.vue';
import HeaderLanguage from './header-language/header-language.vue';
import HeaderSearch from './header-search/header-search.vue';
import HeaderCart from './header-cart/header-cart.vue';
import HeaderAuth from './header-auth/header-auth.vue';
import HeaderMenu from './header-menu/header-menu.vue';
// Icons
import IconBigLogo from '~/icons/icon-big-logo.vue';
</script>