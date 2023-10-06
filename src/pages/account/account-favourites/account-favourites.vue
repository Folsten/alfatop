<template>
  <Header :isMenuVisible="false" class="hidden md:flex" />
  <div class="account-favourites__ w-full flex">
    <AccountSidebar />
    <div class="account-favourites__main-wrapper flex flex-col w-full">
      <AccountHeaderLine />
      <div class="account-favourites__main-container container flex flex-col pl-6 pr-6 md:mt-10">
        <div class="account-favourites__title-container flex flex-col w-full mt-4">
          <div class="account-favourites__title text-lg font-medium text-gray-900">Orders</div>
          <div class="account-favourites__subtitle text-sm text-gray-500">View all recent orders</div>
        </div>
        <div
          class="account-favourites__no-favourites-container flex flex-col w-full min-h-[190px] items-center justify-center bg-gray-50 border border-gray-100 mt-10 p-8 rounded-lg"
        >
          <SvgIcon name="icon-paper-in-eclipse" class="account-favourites__no-favourites-icon w-16 h-16" />
          <div class="account-favourites__no-favourites-title text-sm text-gray-900 font-semibold text-center mt-2">No orders made yet</div>
          <div class="account-favourites__no-favourites-subtitle mt-2 text-center">There are no orders to be displayed here.</div>
        </div>

        <!-- XL+ VERSION -->
        <div
          class="account-favourites__table flex flex-col w-full justify-center bg-gray-25 border border-gray-100 pt-8 pb-8 pl-10 pr-10 mt-10 rounded-lg xl:hidden"
        >
          <div
            class="account-favourites__table-titles-wrapper flex w-full border-b border-b-gray-100 h-6"
          >
            <div class="account-favourites__table-title w-[50%] text-gray-500 text-xs pr-4 pl-4">
              Product
            </div>
            <div class="account-favourites__table-title w-[50%] text-gray-500 text-xs pr-4">Amount</div>
          </div>
          <AccountFavouritesItem/>
          <AccountFavouritesItem/>
          <AccountFavouritesItem/>
          <AccountTablePagination class="mt-8 justify-end w-full" />
        </div>
        <!-- XL- VERSION -->
        <div
          class="account-favourites__table-small hidden flex-col w-full max-w-[900px] self-center justify-center mt-10 xl:max-w-[400px] xl:flex"
        >
          <AccountFavouritesItem/>
          <AccountFavouritesItem/>
          <AccountFavouritesItem/>
          <button class="account-favourites__table-load-more btn btn-neutral mt-12 h-8 text-sm text-gray-700 font-medium">Load more</button>
        </div>

        <div
          class="account-favourites__newsletter-container w-full flex justify-center items-center bg-gray-50 rounded-lg min-h-[304px] mt-20 mb-20  sm:pl-8 sm:pr-8"
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