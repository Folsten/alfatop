<template>
  <Header :isMenuVisible="false" class="hidden md:flex" />
  <div class="w-full flex">
    <AccountSidebar />
    <div class="flex flex-col w-full">
      <AccountHeaderLine />
      <div class="container flex flex-col pl-6 pr-6 md:mt-10">
        <AccountCrumbs class="mt-4" />
        <div class="flex w-full mt-8">
          <div
            class="flex flex-col items-center w-[60%] border border-gray-100 bg-gray-25 p-6 mr-10 xl:w-full xl:mr-0"
          >
            <div class="text-gray-900 text-md font-medium text-left w-full mb-8">Product list</div>
            <AccountOrdersOrderCategory />
            <AccountOrdersOrderProduct />
            <AccountOrdersOrderProduct />
            <AccountOrdersOrderProduct />
            <hr class="w-full h-[1px] mb-5 mt-5" />
            <AccountOrdersOrderCategory />
            <AccountOrdersOrderProduct />
            <AccountOrdersOrderProduct />
          </div>
          <div
            class="flex flex-col self-baseline w-[40%] border border-gray-100 bg-gray-50 p-6 xl:hidden"
          >
            <div class="flex mb-6">Payment details</div>
            <div class="flex flex-col border-b border-gray-100 pb-6">
              <div class="flex justify-between items-center mt-4">
                <div class="flex items-center">
                  <SvgIcon name="icon-hash" class="w-5 h-5 mr-2" />
                  <div class="text-gray-900 text-sm">Order ID</div>
                </div>
                <div class="flex text-right text-gray-900 text-sm font-semibold">1234567</div>
              </div>
              <div class="flex justify-between items-center mt-4">
                <div class="flex items-center">
                  <SvgIcon name="icon-date" class="w-5 h-5 mr-2" />
                  <div class="text-gray-900 text-sm">Date</div>
                </div>
                <div class="flex text-right text-gray-900 text-sm font-semibold">
                  October 25, 2023
                </div>
              </div>
              <div class="flex justify-between items-center mt-4">
                <div class="flex items-center">
                  <SvgIcon name="icon-total-amount" class="w-5 h-5 mr-2" />
                  <div class="text-gray-900 text-sm">Total amount</div>
                </div>
                <div class="flex text-right text-gray-900 text-sm font-semibold">8456.56 EUR</div>
              </div>
              <div class="flex justify-between items-center mt-4">
                <div class="flex items-center">
                  <SvgIcon name="icon-status" class="w-5 h-5 mr-2" />
                  <div class="text-gray-900 text-sm">Status</div>
                </div>
                <div class="flex items-center">
                  <SvgIcon name="icon-lightning-green" class="w-4 h-4 mr-1.5" />
                  <div class="flex text-right text-gray-900 text-sm font-semibold">Completed</div>
                </div>
              </div>
            </div>
            <button class="btn btn-success flex self-end mt-6 p-2.5 h-[42px]">
              <SvgIcon name="icon-cart-with-arrow-down" class="w-4 h-4 text-success-25 mr-2" />
              <span class="text-sm">Create new order</span>
            </button>
          </div>
        </div>
      </div>
      <div class="container">
        <Newsletter :is-ultra-responsive="true" class="container mt-40 mb-40 lg:mt-20 lg:mb-20" />
        <Footer :is-ultra-responsive="true" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from '~/header/header.vue'
import AccountSidebar from '@/pages/account/components/account-sidebar.vue'
import AccountHeaderLine from '@/pages/account/components/account-header-line.vue'
import AccountCrumbs from '@/pages/account/components/account-crumbs.vue'
import SvgIcon from '~/svg-icon/svg-icon.vue'
import AccountOrdersOrderProduct from '@/pages/account/account-orders/account-orders-order/components/account-orders-order-product.vue'
import AccountOrdersOrderCategory from '@/pages/account/account-orders/account-orders-order/components/account-orders-order-category.vue'
import Newsletter from '~/newsletter/newsletter.vue'
import Footer from '~/footer/footer.vue'
</script>