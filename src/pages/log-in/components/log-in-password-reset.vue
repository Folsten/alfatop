<template>
  <div
    class="log-in-password-reset flex flex-col items-center flex-[2] justify-center w-full ml-5 mr-5 xs:ml-3 xs:mr-3"
  >
    <div
      class="log-in-password-reset__main-container flex flex-col items-center w-full max-w-[500px] border rounded-lg bg-gray-50 p-10 xs:p-5"
    >
      <div
        class="log-in-password-reset__title w-full text-left text-lg font-semibold text-gray-900"
      >
        Password reset
      </div>
      <div class="log-in-password-reset__subtitle w-full text-left text-sm text-gray-500">
        Please check that you are visiting
        <router-link to="#" class="text-indigo-500">alfa.top</router-link>
      </div>
      <div class="log-in-password-reset__enter-password-container input-text w-full mt-6">
        <input
          type="text"
          placeholder="Enter new password"
          class="log-in-password-reset__enter-password-input w-full text-sm text-gray-900 mr-4"
        />
        <SvgIcon
          name="icon-crossed-eye"
          class="log-in-password-reset__eye-icon w-7 h-7 text-gray-500"
        />
      </div>
      <ul class="log-in-password-reset__list w-full list-disc ml-10 mt-2 text-gray-500 text-sm">
        <li class="log-in-password-reset__list-item mt-1">10 characters minimum</li>
        <li class="log-in-password-reset__list-item mt-1">UPPER CASE letters</li>
        <li class="log-in-password-reset__list-item mt-1">Numbers</li>
      </ul>
      <div class="log-in-password-reset__new-password-container input-text w-full mt-4">
        <input
          type="text"
          placeholder="Confirm new password"
          class="log-in-password-reset__new-password-input w-full text-sm text-gray-900 mr-4"
        />
        <SvgIcon
          name="icon-crossed-eye"
          class="log-in-password-reset__eye-icon w-7 h-7 text-gray-500"
        />
      </div>
      <div class="log-in-password__buttons-container flex mt-6 justify-between w-full">
        <button class="log-in-password__btn-cancel btn btn-neutral text-sm w-fit h-10 pl-4 pr-4">
          Cancel
        </button>
        <button
          class="log-in-password__btn-save-password btn btn-success text-sm w-fit h-10 pl-4 pr-4"
        >
          Save password
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
