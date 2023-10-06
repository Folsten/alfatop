<template>
  <Header :isMenuVisible="false" class="hidden md:flex" />
  <div class="w-full flex">
    <AccountSidebar />
    <div class="flex flex-col self-center w-full ml-auto mr-auto">
      <AccountHeaderLine />
      <div class="container flex flex-col pl-6 pr-6 md:mt-10">
        <div class="flex flex-col w-full mt-4">
          <div class="text-lg font-medium text-gray-900">Orders</div>
          <div class="text-sm text-gray-500">View all recent orders</div>
        </div>
        <div
          class="flex flex-col w-full min-h-[190px] items-center justify-center bg-gray-50 border border-gray-100 mt-10 p-8 rounded-lg"
        >
          <SvgIcon name="icon-paper-in-eclipse" class="w-16 h-16" />
          <div class="text-sm text-gray-900 font-semibold text-center mt-2">No orders made yet</div>
          <div class="mt-2 text-center">There are no orders to be displayed here.</div>
        </div>
        <AccountOrdersTable />
        <div class="mt-2.5 cursor-pointer text-indigo-500 text-sm">Load more</div>
        <div
          class="w-full flex justify-center items-center bg-gray-50 rounded-lg mt-40 mb-40 lg:mt-20 lg:mb-20 sm:pl-8 sm:pr-8"
        >
          <Newsletter :is-ultra-responsive="true" />
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
import Header from '~/header/header.vue'
import AccountOrdersTable from '@/pages/account/account-orders/components/account-orders-table.vue'
import AccountHeaderLine from '@/pages/account/components/account-header-line.vue'
</script>
