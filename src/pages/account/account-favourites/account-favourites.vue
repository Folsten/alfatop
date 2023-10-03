<template>
  <Header :isMenuVisible="false" class="hidden md:flex" />
  <div class="w-full flex">
    <AccountSidebar />
    <div class="flex flex-col w-full">
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

        <!-- XL+ VERSION -->
        <div
          class="account-orders-table flex flex-col w-full justify-center bg-gray-25 border border-gray-100 pt-8 pb-8 pl-10 pr-10 mt-10 rounded-lg xl:hidden"
        >
          <div
            class="account-orders-table__titles-wrapper flex w-full border-b border-b-gray-100 h-6"
          >
            <div class="account-orders-table__title w-[50%] text-gray-500 text-xs pr-4 pl-4">
              Product
            </div>
            <div class="account-orders-table__title w-[50%] text-gray-500 text-xs pr-4">Amount</div>
          </div>
          <AccountFavouritesItem/>
          <AccountFavouritesItem/>
          <AccountFavouritesItem/>
          <AccountTablePagination class="mt-8 justify-end w-full" />
        </div>
        <!-- XL- VERSION -->
        <div
          class="account-orders-table-small hidden flex-col w-full max-w-[900px] self-center justify-center mt-10 xl:max-w-[400px] xl:flex"
        >
          <AccountFavouritesItem/>
          <AccountFavouritesItem/>
          <AccountFavouritesItem/>
          <button class="btn btn-neutral mt-12 h-8 text-sm text-gray-700 font-medium">Load more</button>
        </div>

        <div
          class="w-full flex justify-center items-center bg-gray-50 rounded-lg pb-10 pt-10 min-h-[304px] mt-20 mb-10 pl-16 pr-16 md:mt-10 sm:pl-8 sm:pr-8"
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
import Newsletter from '~/newsletter/newsletter.vue'
import Footer from '~/footer/footer.vue'
import Header from '~/header/header.vue'
import AccountOrdersTable from '@/pages/account/account-orders/components/account-orders-table.vue'
import AccountHeaderLine from '@/pages/account/components/account-header-line.vue'
import AccountOrdersTableDate from '@/pages/account/account-orders/components/account-orders-table-date.vue'
import AccountOrdersTableItem from '@/pages/account/account-orders/components/account-orders-table-item.vue'
import AccountTablePagination from '@/pages/account/components/account-table-pagination.vue'
import AccountFavouritesItem from '@/pages/account/account-favourites/components/account-favourites-item.vue'
</script>