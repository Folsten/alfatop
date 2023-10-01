<template>
  <Header :isMenuVisible="false" class="hidden md:flex"/>
  <div class="w-full flex">
    <AccountSidebar />
    <div class="flex flex-col w-full">
      <div class="flex justify-end h-[66px] w-full items-center border-b border-gray-100 md:hidden">
        <div class="flex items-center pr-6">
          <SvgIcon name="icon-log-out" class="w-4 h-4 text-gray-700 mr-2" />
          <span class="text-sm text-gray-700 font-medium">Log out</span>
        </div>
      </div>
      <div class="flex flex-col pl-6 pr-6 md:mt-10">
        <div class="flex flex-col w-full mt-4">
          <div class="text-lg font-medium text-gray-900">Orders</div>
          <div class="text-sm text-gray-500">View all recent orders</div>
        </div>
        <div
          class="flex flex-col w-full min-h-[190px] items-center justify-center bg-gray-50 border border-gray-100 mt-10 rounded-lg"
        >
          <SvgIcon name="icon-paper-in-eclipse" class="w-16 h-16" />
          <div class="text-sm text-gray-900 font-semibold text-center mt-2">No orders made yet</div>
          <div class="mt-2 text-center">There are no orders to be displayed here.</div>
        </div>
        <div class="w-full flex justify-center items-center bg-gray-50 rounded-lg pb-10 pt-10 min-h-[304px] mt-20 mb-10 pl-16 pr-16 md:mt-10">
          <Newsletter
            :is-ultra-responsive="true"
            class="xl:flex-wrap"
          />
        </div>
        <Footer :is-ultra-responsive="true" class="w-full mb-5" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AccountSidebar from '@/pages/account/components/account-sidebar.vue'
import SvgIcon from '~/svg-icon/svg-icon.vue'
import Newsletter from '~/newsletter/newsletter.vue'
import Footer from '~/footer/footer.vue'
import Header from "~/header/header.vue";
</script>