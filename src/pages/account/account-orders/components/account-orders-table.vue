<template>
  <!-- XL+ VERSION -->
  <div
    class="account-orders-table flex flex-col w-full justify-center bg-gray-25 border border-gray-100 pt-8 pb-8 pl-10 pr-10 mt-10 rounded-lg xl:hidden"
  >
    <div class="account-orders-table__titles-wrapper flex w-full border-b border-b-gray-100 h-6">
      <div class="account-orders-table__title w-[20%] text-gray-500 text-xs pr-4 pl-4">
        Order ID
      </div>
      <div class="account-orders-table__title w-[35%] text-gray-500 text-xs pr-4">Items</div>
      <div class="account-orders-table__title w-[20%] text-gray-500 text-xs text-right pr-4">
        Total amount
      </div>
      <div class="account-orders-table__title w-[15%] ml-auto text-gray-500 text-xs text-left">
        Status
      </div>
    </div>
    <AccountOrdersTableDate />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableDate />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountTablePagination class="mt-8 justify-end w-full" />
  </div>
  <!-- XL- VERSION -->
  <div
    class="account-orders-table-small hidden flex-col w-full max-w-[900px] self-center justify-center mt-10 xl:flex"
  >
    <div
      class="account-orders-table-small__titles-wrapper flex justify-between pb-2 border-b border-gray-100"
    >
      <div class="account-orders-table-small__title pl-5 text-sm sm:text-xs">Order ID</div>
      <div class="account-orders-table-small__title pr-5 text-sm sm:text-xs">Amount</div>
    </div>
    <AccountOrdersTableDate class="bg-primary-50" />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
    <AccountOrdersTableDate class="bg-primary-50" />
    <AccountOrdersTableItem />
    <AccountOrdersTableItem />
  </div>
</template>
<script setup lang="ts">
import AccountOrdersTableItem from '@/pages/account/account-orders/components/account-orders-table-item.vue'
import AccountOrdersTableDate from '@/pages/account/account-orders/components/account-orders-table-date.vue'
import AccountTablePagination from '@/pages/account/components/account-table-pagination.vue'
import SvgIcon from '~/svg-icon/svg-icon.vue'
</script>
