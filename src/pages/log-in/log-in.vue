<template>
  <Header :is-menu-visible="false" class="hidden md:flex"/>
  <div class="flex w-full h-screen md:h-fit md:mt-32 md:mb-32">
    <div v-if="!isFinished" class="relative flex flex-1 md:hidden">
      <div class="flex w-full absolute ml-10 top-20">
        <SvgIcon name="icon-big-logo" class="w-[104px] h-[32px]" />
      </div>
      <div class="flex w-full absolute bottom-20 justify-center">
        <div class="pl-4 pr-4 text-gray-25 text-center text-dh3 font-semibold lg:text-mh3">
          Log in to your account and start shopping right away
        </div>
      </div>
      <img src="./images/auth-bg.png" class="object-cover" alt="auth-bg" />
    </div>
    <component @click="changeWindow" :is="currentWindow" />
  </div>
  <Footer class="hidden md:flex"/>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import RegisterStart from '@/pages/register/components/register-start.vue'
import RegisterFinish from '@/pages/register/components/register-finish.vue'
import LogInStart from '@/pages/log-in/components/log-in-start.vue'
import LogInEmailVerification from '@/pages/log-in/components/log-in-email-verification.vue'
import LogInForgotPassword from '@/pages/log-in/components/log-in-forgot-password.vue'
import LogInPasswordChanged from '@/pages/log-in/components/log-in-password-changed.vue'
import LogInPasswordReset from '@/pages/log-in/components/log-in-password-reset.vue'
import Footer from "~/footer/footer.vue";
import Header from "~/header/header.vue";

let currentWindow = shallowRef(LogInStart)
let counter = ref(1)
let componentsList = [
  LogInStart,
  LogInForgotPassword,
  LogInEmailVerification,
  LogInPasswordReset,
  LogInPasswordChanged
]
let isFinished = ref(false)

function changeWindow() {
  currentWindow.value = componentsList[counter.value]
  if (counter.value == componentsList.length - 1) {
    let isFinished = true
  }
  ++counter.value
  if (counter.value == componentsList.length) {
    counter.value = 0
  }
}
</script>
