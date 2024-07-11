<template>
  <div
    class="register-start flex flex-col items-center flex-[2] justify-center w-full ml-5 mr-5 xs:ml-3 xs:mr-3"
  >
    <div
      class="register-start__main-container flex flex-col items-center w-full max-w-[500px] border rounded-lg bg-gray-50 p-10 xs:p-5"
    >
      <div class="register-start__title w-full text-left text-lg font-semibold text-gray-900">
        Register
      </div>
      <div class="register-start__subtitle w-full text-left text-sm text-gray-500">
        Please check that you are visiting
        <router-link to="#" class="text-indigo-500">alfa.top</router-link>
      </div>
      <button class="register-start__btn btn btn-neutral w-full h-10 pl-3 pr-3 mt-4">
        <SvgIcon name="icon-social-google" class="register-start__social-icon w-5 h-5 mr-2" />
        <span class="register-start__btn-text text-sm text-gray-700">Sign up with Google</span>
      </button>
      <button class="register-start__btn btn btn-neutral w-full h-10 pl-3 pr-3 mt-4">
        <SvgIcon name="icon-social-meta" class="register-start__social-icon w-5 h-5 mr-2" />
        <span class="register-start__btn-text text-sm text-gray-700">Sign up with Meta</span>
      </button>
      <div class="register-start__or self-center mt-4">or</div>
      <button class="register-start__btn btn btn-neutral w-full h-10 pl-3 pr-3 mt-4">
        <SvgIcon name="text-sm text-gray-700" class="register-start__social-icon w-5 h-5 mr-2" />
        <span class="register-start__btn-text text-sm text-gray-700">Sign up with Email</span>
      </button>
      <div class="register-start__have-an-account text-sm text-gray-900 mt-4">
        Already have an account?
        <router-link to="#" class="text-indigo-500 font-medium">Log in</router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
