<template>
  <div
    class="register-start flex flex-col items-center flex-[2] justify-center w-full ml-5 mr-5 xs:ml-3 xs:mr-3"
  >
    <div
      class="register-start__main-container flex flex-col items-center w-full max-w-[500px] border rounded-lg bg-gray-50 p-10 xs:p-5"
    >
      <div class="register-start__title w-full text-left text-lg font-semibold text-gray-900">
        Password reset
      </div>
      <div class="register-start__subtitle w-full text-left text-sm text-gray-500">
        Please check that you are visiting
        <router-link to="#" class="text-indigo-500">alfa.top</router-link>
      </div>
      <div class="input-text w-full mt-6">
        <input
          type="text"
          placeholder="Enter new password"
          class="w-full text-sm text-gray-900 mr-4"
        />
        <SvgIcon name="icon-crossed-eye" class="w-7 h-7 text-gray-500" />
      </div>
      <ul class="w-full list-disc ml-10 mt-2 text-gray-500 text-sm">
        <li class="mt-1">10 characters minimum</li>
        <li class="mt-1">UPPER CASE letters</li>
        <li class="mt-1">Numbers</li>
      </ul>
      <div class="input-text w-full mt-4">
        <input
          type="text"
          placeholder="Confirm new password"
          class="w-full text-sm text-gray-900 mr-4"
        />
        <SvgIcon name="icon-crossed-eye" class="w-7 h-7 text-gray-500" />
      </div>
      <div class="flex mt-6 justify-between w-full">
        <button class="btn btn-neutral text-sm w-fit h-10 pl-4 pr-4">Cancel</button>
        <button class="btn btn-success text-sm w-fit h-10 pl-4 pr-4">Save password</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
