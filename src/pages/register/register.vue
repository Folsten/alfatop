<template>
  <Header :isMenuVisible="false" class="hidden md:flex" />
  <div class="flex w-full h-screen md:h-fit md:mt-32 md:mb-32">
    <div v-if="!isFinished" class="relative flex flex-1 md:hidden">
      <div class="flex w-full absolute ml-10 top-20">
        <SvgIcon name="icon-big-logo" class="w-[104px] h-[32px]" />
      </div>
      <img src="./images/auth-bg.png" class="object-cover" alt="auth-bg" />
    </div>
    <component @click="changeWindow" :is="currentWindow" />
  </div>
  <Footer class="hidden md:flex"/>
</template>
<script setup lang="ts">
import RegisterStart from '@/pages/register/components/register-start.vue'
import RegisterWithEmail from '@/pages/register/components/register-with-email.vue'
import RegisterFinish from '@/pages/register/components/register-finish.vue'
import { ref, shallowRef } from 'vue'
import Header from "~/header/header.vue";
import Footer from "~/footer/footer.vue";

let currentWindow = shallowRef(RegisterStart)
let counter = ref(1)
let componentsList = [RegisterStart, RegisterWithEmail]
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
