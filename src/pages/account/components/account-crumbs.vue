<template>
  <div class="account-crumbs flex flex-col w-full">
    <div class="account-crumbs__container flex">
      <router-link to="#" class="account-crumbs__container-link text-sm font-medium text-indigo-500">Orders</router-link>
      <div class="account-crumbs__container-separator text-sm font-medium text-gray-700 ml-1 mr-1">/</div>
      <div class="account-crumbs__container-current-location text-sm font-medium text-gray-500">Order 12345</div>
    </div>
    <div class="account-crumbs__title text-gray-900 text-lg font-medium mt-2">Order 12345 Details</div>
  </div>
</template>
<script setup lang="ts"></script>
