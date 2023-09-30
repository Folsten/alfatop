<template>
  <div
    class="register-start flex flex-col items-center flex-[2] justify-center w-full ml-5 mr-5 xs:ml-3 xs:mr-3"
  >
    <div
      class="register-start__main-container flex flex-col items-center w-full max-w-[500px] border rounded-lg bg-gray-50 p-10 xs:p-5"
    >
      <SvgIcon name="icon-confirm" class="text-success-500 h-12 w-12 mb-7"/>
      <div class="register-start__title w-full text-center text-lg font-semibold text-gray-900">
        Password was successfully changed
      </div>
      <div class="register-start__subtitle w-full text-center text-sm text-gray-500">
        Now you can Log in to your account with a new password
      </div>
      <div class="flex mt-6 justify-between w-full">
        <button class="btn btn-neutral text-sm w-fit h-10 pl-4 pr-4">Cancel</button>
        <button class="btn btn-indigo text-sm w-fit h-10 pl-4 pr-4">Proceed to Log in</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from "~/svg-icon/svg-icon.vue";
</script>
