<template>
  <div
    class="log-in-forgot-password flex flex-col items-center flex-[2] justify-center w-full ml-5 mr-5 xs:ml-3 xs:mr-3"
  >
    <div
      class="log-in-forgot-password__main-container flex flex-col items-center w-full max-w-[500px] border rounded-lg bg-gray-50 p-10 xs:p-5"
    >
      <div
        class="log-in-forgot-password__title w-full text-left text-lg font-semibold text-gray-900"
      >
        Forgot password?
      </div>
      <div class="log-in-forgot-password__subtitle w-full text-left text-sm text-gray-500">
        Forgotten your password? No problem, we will email you a reset link to your inbox.
      </div>
      <input
        type="text"
        class="log-in-forgot-password__email-input input-text w-full mt-6"
        placeholder="Enter email specified at registration"
      />
      <button
        class="log-in-forgot-password__btn-reset btn btn-indigo text-sm w-full h-10 mt-6 rounded"
      >
        Reset password
      </button>
      <button
        class="log-in-forgot-password__btn-cancel btn btn-neutral text-sm w-full h-10 mt-3 rounded"
      >
        Cancel
      </button>
      <div
        class="log-in-forgot-password__buttons-container register-start__have-an-account text-sm flex justify-between text-gray-900 w-full mt-4"
      >
        <router-link to="#" class="log-in-forgot-password__btn-log-in text-indigo-500"
          >Log in</router-link
        >
        <router-link to="#" class="log-in-forgot-password__btn-create-account text-indigo-500"
          >Create account</router-link
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
