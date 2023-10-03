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
            class="flex flex-col items-center w-full border border-gray-100 bg-gray-25 p-6 mr-10"
          >
            <div class="text-gray-900 text-md font-medium text-left w-full">Product list</div>
            <div class="flex w-full items-center mt-8">
              <div class="text-gray-700 text-sm font-medium text-left mr-1">Gift cards</div>
              <div
                class="rounded-md bg-gray-100 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-[10px] font-semibold"
              >
                2
              </div>
            </div>
            <div class="flex w-full items-center mt-6">
              <img class="w-10 h-10 rounded-md mr-4" src="@/assets/images/playstation.png" />
              <div class="flex flex-col mr-4">
                <div class="text-sm leading-5 text-gray-900 font-medium">Amazon.es Spain</div>
                <div class="text-sm leading-5 font-medium text-gray-700">20 EUR</div>
              </div>
              <div class="text-gray-900 font-medium ml-auto mr-auto">1</div>
              <div class="flex items-center ml-auto mr-auto">
                <SvgIcon name="icon-lightning-green" class="w-4 h-4 mr-2" />
                <div class="text-sm font-semibold text-gray-900">Completed</div>
                <button class="btn btn-neutral"></button>
              </div>
              <button class="btn btn-neutral h-[42px] pl-3 pr-3 pt-1.5 pb-1.5">
                <SvgIcon name="icon-favourite-filled" class="w-4 h-4 mr-2" />
                <span class="flex text-sm">Add to favourites</span>
              </button>
            </div>
          </div>
          <div class="flex flex-col w-full border border-gray-100 bg-gray-50 p-6">
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
                  <SvgIcon name="icon-lightning-green" class="w-4 h-4" />
                  <div class="flex text-right text-gray-900 text-sm font-semibold">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
</script>
