<template>
  <!-- START ABSOLUTE MODAL WINDOW -->
  <div
    v-if="isPayoutRequested"
    class="fixed flex flex-col justify-center items-center z-10 bg-gray-25 shadow-xl rounded-lg w-[352px] left-[calc(50%-176px)] top-[60%] p-6"
  >
    <SvgIcon name="icon-confirm" class="w-8 h-8 text-success-500" />
    <div class="flex text-center mt-7 text-lg font-medium text-gray-900">
      Your payout request have been accepted
    </div>
    <div class="text-sm text-gray-500 text-center mt-2">
      We will review your request and process it as soon as possible. Usually this process takes 1-3
      days. Thank you!
    </div>
    <div class="flex mt-5 w-full">
      <button @click="isPayoutRequested = false" class="btn btn-neutral w-full h-11 mr-2">
        Cancel
      </button>
      <button @click="isPayoutRequested = false" class="btn btn-success w-full h-11 ml-2">
        Ok
      </button>
    </div>
  </div>
  <!-- / END ABSOLUTE MODAL WINDOW -->
  <Header :isMenuVisible="false" class="hidden md:flex" />
  <div v-if="!isPayoutRequested" class="w-full flex">
    <AccountSidebar />
    <div class="flex flex-col w-full">
      <AccountHeaderLine />
      <div class="container w-full flex flex-col mt-6">
        <AccountCrumbs />
        <div class="flex w-full mt-6 lg:flex-wrap">
          <div class="flex flex-col bg-gray-50 mr-4 w-1/2 rounded-[10px] p-8 lg:w-full">
            <div class="flex items-center">
              <span class="text-gray-900 text-lg font-medium mr-2">Current Balance</span>
              <SvgIcon name="icon-attention" class="w-4 h-4" />
            </div>
            <div class="text-gray-900 font-semibold text-[32px]">2,982 EUR</div>
          </div>
          <div class="flex flex-col bg-gray-50 w-1/2 rounded-[10px] p-8 lg:mt-4 lg:w-full">
            <div class="flex items-center">
              <span class="text-gray-900 text-lg font-medium mr-2">Current Balance</span>
              <SvgIcon name="icon-attention" class="w-4 h-4" />
            </div>
            <div class="text-gray-900 font-semibold text-[32px]">2,982 EUR</div>
          </div>
        </div>
        <div class="flex flex-col w-full bg-gray-50 p-8 mt-12">
          <div class="text-gray-900 text-lg font-medium">Referral data</div>
          <div class="text-gray-500 text-sm font-medium">Lorem ipsum</div>
          <div class="flex w-full mt-8 lg:flex-wrap">
            <div class="flex flex-col w-full mr-6 lg:mr-0">
              <div class="text-gray-900 text-sm mb-1">Your referral code</div>
              <div class="input-text cursor-pointer">
                <span class="text-gray-900 text-md">4A34RF00078XL</span>
                <SvgIcon name="icon-copy" class="w-6 h-6 text-indigo-500 cursor-pointer ml-auto" />
              </div>
            </div>
            <div class="flex flex-col w-full lg:mt-4">
              <div class="text-gray-900 text-sm mb-1">Your referral link using code</div>
              <div class="input-text cursor-pointer">
                <span
                  class="w-full inline-block text-indigo-500 font-normal text-ellipsis overflow-hidden xl:w-[300px] lg:w-[200px]"
                  >https://dev.cpay.io/$ref_4A34RF00078XL</span
                >
                <SvgIcon name="icon-copy" class="w-6 h-6 text-indigo-500 ml-auto" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full bg-gray-50 p-8 mt-12">
          <div class="text-gray-900 text-lg font-medium">Request payout</div>
          <div class="flex w-full mt-8 lg:flex-wrap">
            <div class="flex flex-col w-full mr-5 lg:mr-0">
              <div class="text-gray-900 text-sm mb-1">Choose your payout currency</div>
              <SelectCustom class="mt-0" />
            </div>
            <div class="flex flex-col w-full mr-5 lg:mr-0 mt-4">
              <div class="text-gray-900 text-sm mb-1">Enter address</div>
              <div class="input-text">
                <input type="text" class="w-full" />
                <SvgIcon name="icon-copy" class="w-6 h-6 text-indigo-500 cursor-pointer" />
              </div>
            </div>
            <button class="btn btn-success min-w-[180px] h-[42px] self-end lg:mt-6 lg:w-full">
              <SvgIcon name="icon-usd-label" class="w-5 h-5 mr-1" />
              <span>Request payout</span>
            </button>
          </div>
        </div>
        <div class="flex flex-col w-full bg-error-50 p-8 mt-12 rounded-lg">
          <div class="text-gray-900 text-lg font-medium">Request payout</div>
          <div class="text-gray-500 text-sm font-medium">
            You will be available to request payout when your balance will be equal or exceed 50
            EUR.
          </div>
        </div>
        <button @click="isPayoutRequested = true" class="btn btn-indigo mt-10 h-20 text-[20px]">
          ВЫЗОВ ЗАВЕРШАЮЩЕГО ОКНА (ПРОСТО ДЛЯ ПРОСМОТРА КОМПОНЕНТА)
        </button>
        <Newsletter :is-ultra-responsive="true" class="mt-40 mb-40 lg:mt-20 lg:mb-20" />
        <Footer :is-ultra-responsive="true" />
      </div>
    </div>
  </div>
  <!-- START REQUESTED PAYOUT WINDOW MOBILE -->
  <div v-if="isPayoutRequested" class="container flex flex-col items-center w-full">
    <div class="text-lg text-gray-900 mt-12">Referral program</div>
    <SvgIcon name="icon-confirm" class="w-8 h-8 text-success-500" />
    <div class="flex text-center mt-7 text-lg font-medium text-gray-900">
      Your payout request have been accepted
    </div>
    <div class="text-sm text-gray-500 text-center mt-2">
      We will review your request and process it as soon as possible. Usually this process takes 1-3
      days. Thank you!
    </div>
    <div class="flex mt-5 w-full">
      <button @click="isPayoutRequested = false" class="btn btn-neutral w-full h-11 mr-2">
        Cancel
      </button>
      <button @click="isPayoutRequested = false" class="btn btn-success w-full h-11 ml-2">
        Ok
      </button>
    </div>
  </div>
  <!-- END REQUESTED PAYOUT WINDOW MOBILE -->
</template>
<script setup lang="ts">
import Header from '~/header/header.vue'
import AccountSidebar from '@/pages/account/components/account-sidebar.vue'
import AccountHeaderLine from '@/pages/account/components/account-header-line.vue'
import AccountCrumbs from '@/pages/account/components/account-crumbs.vue'
import SelectCustom from '~/select-custom/select-custom.vue'
import SvgIcon from '~/svg-icon/svg-icon.vue'
import Newsletter from '~/newsletter/newsletter.vue'
import Footer from '~/footer/footer.vue'

import { ref } from 'vue'

let isPayoutRequested = ref(false)
</script>