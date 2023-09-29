<template>
  <div class="flex flex-col justify-between h-screen max-h-screen lg:h-auto lg:max-h-[auto]">
    <div class="container mt-9">
      <SvgIcon name="icon-big-logo" class="w-[104px] h-[32px]"/>
    </div>
    <div class="flex container w-full items-center lg:mt-20">
      <div class="flex flex-1 flex-col lg:items-center sm:items-start">
        <div class="text-[64px] font-semibold text-gray-900">403</div>
        <h1 class="text-dh1 text-gray-900 font-semibold sm:text-mh1 lg:text-center sm:text-left">You are not authorized to access this page</h1>
        <div class="text-lg text-gray-500 mt-4 lg:text-center sm:text-left">You are not authorized or you do not have permissions
          to view this page.
        </div>
        <router-link to="#" tag="button" class="btn btn-success w-32 h-12 pl-5 pr-5 pt-2 pb-2 mt-8">Log in now
        </router-link>
      </div>
      <div class="flex flex-1 lg:hidden">
        <img src="./images/403-bg.png">
      </div>
    </div>
    <Footer class="lg:mt-20"/>
  </div>
</template>

<script setup lang="ts">
import Footer from "~/footer/footer.vue";
</script>