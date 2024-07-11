<template>
  <div
    class="register-with-email flex flex-col items-center flex-[2] justify-center w-full ml-5 mr-5 xs:ml-3 xs:mr-3"
  >
    <div
      class="register-with-email__main-container flex flex-col items-center w-full max-w-[500px] border rounded-lg bg-gray-50 p-10 xs:p-5"
    >
      <div class="register-with-email__title w-full text-left text-lg font-semibold text-gray-900">
        Register
      </div>
      <div class="register-with-email__subtitle w-full text-left text-sm text-gray-500">
        Please check that you are visiting
        <router-link to="#" class="text-indigo-500">alfa.top</router-link>
      </div>
      <div class="register-with-email__input-title w-full text-sm text-gray-700 mt-4 mb-1">
        Email
      </div>
      <div class="register-with-email__input-wrapper input-text w-full">
        <input
          class="register-with-email__input-text w-full text-sm text-gray-900 mr-4"
          placeholder="Enter your email"
        />
      </div>
      <div class="register-with-email__input-title w-full text-sm text-gray-700 mt-4 mb-1">
        Password
      </div>
      <div class="register-with-email__input-wrapper input-text w-full">
        <input
          class="register-with-email__input-text w-full text-sm text-gray-900 mr-4"
          placeholder="Enter your password"
        />
        <SvgIcon
          name="icon-crossed-eye"
          class="register-with-email__eye-icon w-7 h-7 text-gray-500"
        />
      </div>
      <div class="register-with-email__input-title w-full text-sm text-gray-700 mt-4 mb-1">
        Confirm password
      </div>
      <div class="register-with-email__input-wrapper input-text w-full">
        <input
          class="register-with-email__input-text w-full text-sm text-gray-900 mr-4"
          placeholder="Confirm password"
        />
        <SvgIcon
          name="icon-crossed-eye"
          class="register-with-email__eye-icon w-7 h-7 text-gray-500"
        />
      </div>
      <div class="register-with-email__checkbox-wrapper flex mt-4 w-full">
        <input type="checkbox" class="register-with-email__checkbox cursor-pointer mr-2" />
        <div class="register-with-email__checkbox-text text-gray-900 text-sm font-medium">
          I accept
          <router-link to="#" class="text-indigo-500">Terms of Use</router-link>
          and
          <router-link to="#" class="text-indigo-500">Privacy Policy</router-link>
        </div>
      </div>
      <button class="register-with-email__create-account-button btn btn-success w-full mt-4 h-10">
        Create account
      </button>
      <div class="register-with-email__have-an-account text-sm text-gray-900 mt-4">
        Already have an account?
        <router-link to="#" class="text-indigo-500 font-medium">Log in</router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
