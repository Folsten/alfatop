<template>
  <div
    class="register-start flex flex-col items-center flex-[2] justify-center w-full ml-5 mr-5 xs:ml-3 xs:mr-3"
  >
    <div
      class="register-start__main-container flex flex-col items-center w-full max-w-[500px] border rounded-lg bg-gray-50 p-10 xs:p-5"
    >
      <div class="register-start__title w-full text-left text-lg font-semibold text-gray-900">
        Email verification code
      </div>
      <div class="register-start__subtitle w-full text-left text-sm text-gray-500">
        We have sent an email with a verification code to your email address. In order to complete
        the password reset process, please enter the confirmation code below.
      </div>
      <div class="flex w-full justify-between mt-6">
        <input type="text" class="input-text w-12 h-12" />
        <input type="text" class="input-text w-12 h-12" />
        <input type="text" class="input-text w-12 h-12" />
        <input type="text" class="input-text w-12 h-12" />
        <input type="text" class="input-text w-12 h-12" />
        <input type="text" class="input-text w-12 h-12" />
      </div>
      <button class="btn btn-indigo w-full h-10 mt-6 rounded text-sm">Proceed</button>
      <div class="flex w-full text-gray-900 text-sm mt-4">
        Email did not arrive?
        <span class="text-gray-500 text-sm ml-1">Resend in 09:33</span>
      </div>
      <div class="text-sm mt-4 w-full">If you have not received that email, check spam folders.</div>
      <router-link to="#" class="text-indigo-500 w-full text-sm mt-4">Log out</router-link>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
