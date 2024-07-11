<template>
  <div class="register-finish flex items-center justify-center w-full h-screen">
    <div class="register-finish__main-container flex flex-col ml-10 mr-10 mt-10 mb-10 max-w-2xl">
      <SvgIcon name="icon-big-logo" class="register-finish__logo w-[104px] h-[32px]" />
      <div class="register-finish__title text-gray-900 text-dh5 mt-14 font-semibold sm:text-mh5">
        Welcome to ALFAtop!
      </div>
      <p class="register-finish__upper-text text-gray-900 text-md mt-6">
        Dear user!<br />
        You have successfully registered an account at ALFAtop.
      </p>
      <p class="register-finish__upper-text text-gray-900 text-md mt-6">
        To proceed to your account and start using the service, click on the "Get started" button to
        confirm it, or follow the link below.
      </p>
      <button class="register-finish__btn btn btn-success mt-8 w-36 h-12 pl-2 pr-2">
        Get started
      </button>
      <div class="register-finish__lower-text text-gray-500 text-sm mt-12">
        Confirmation link:
        <router-link to="#" class="text-indigo-500"
          >https://www.alfa.top/&confirm_acc$23456</router-link
        >
      </div>
      <div class="register-finish__lower-text text-gray-500 text-sm mt-6">
        If you have any questions, please contact our
        <router-link to="#" class="text-indigo-500">team</router-link>.<br />
        Thank you for joining us.
      </div>
      <div class="register-finish__lower-text text-sm text-gray-500 mt-12">
        Regards, ALFAtop team<br />
        <router-link to="#" class="text-indigo-500">https://www.alfa.top</router-link>
      </div>
    </div>
  </div>
</template>
