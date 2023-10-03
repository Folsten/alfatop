<template>
  <div
    class="log-in-password-changed flex flex-col items-center flex-[2] justify-center w-full ml-5 mr-5 xs:ml-3 xs:mr-3"
  >
    <div
      class="log-in-password-changed__main-container flex flex-col items-center w-full max-w-[500px] border rounded-lg bg-gray-50 p-10 xs:p-5"
    >
      <SvgIcon
        name="icon-confirm"
        class="log-in-password-changed__icon-confirm text-success-500 h-12 w-12 mb-7"
      />
      <div
        class="log-in-password-changed__title w-full text-center text-lg font-semibold text-gray-900"
      >
        Password was successfully changed
      </div>
      <div class="log-in-password-changed__subtitle w-full text-center text-sm text-gray-500">
        Now you can Log in to your account with a new password
      </div>
      <div class="log-in-password-changed__buttons-container flex mt-6 justify-between w-full">
        <button
          class="log-in-password-changed__btn-cancel btn btn-neutral text-sm w-fit h-10 pl-4 pr-4"
        >
          Cancel
        </button>
        <button
          class="log-in-password-changed__btn-proceed btn btn-indigo text-sm w-fit h-10 pl-4 pr-4"
        >
          Proceed to Log in
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from '~/svg-icon/svg-icon.vue'
</script>
