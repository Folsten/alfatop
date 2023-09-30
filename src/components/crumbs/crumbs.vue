<template>
  <div class="crumbs flex flex-col">
    <div class="crumbs__container text-sm font-medium flex items-center">
      <router-link to="#" class="crumbs__link text-indigo-500">Main page</router-link>
      <span class="crumbs__separator text-gray-500 ml-1 mr-1">/</span>
      <router-link to="#" class="crumbs__link text-indigo-500">Gift cards</router-link>
      <span class="crumbs__separator text-gray-500 ml-1 mr-1">/</span>
      <span class="crumbs__current">Gaming</span>
    </div>
    <h6 class="crumbs__title text-gray-900 text-dh6 sm:text-mh6 font-medium mt-4">Gaming</h6>
  </div>
  <hr class="mt-3 sm:hidden" />
</template>
