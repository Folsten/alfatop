<template>
  <header>
    <div class="container">
      <div class="flex items-center justify-between h-[48px]">
        <HeaderCountry />
        <HeaderLanguage />
      </div>
      <div class="flex items-center h-[72px]">
        <IconBigLogo />
        <HeaderSearch />
        <HeaderCart />
        <HeaderAuth />
      </div>
      <HeaderMenu />
    </div>
    <hr>
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