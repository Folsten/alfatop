<template>
  <section class="flex flex-col pl-10 pt-10">
    <h1 class="title">All Pages</h1>
    <a class="link" href="/home">/</a>
    <a class="link" href="/gift-cards">/gift-cards</a>
    <a class="link" href="/gift-cards/product">/gift-cards/product</a>
    <a class="link" href="/mobile">/mobile</a>
    <a class="link" href="/mobile/category">/mobile/category</a>
    <a class="link" href="/mobile/product">/mobile/product</a>
    <a class="link" href="/cart">/cart</a>
    <a class="link" href="/support">/support</a>
    <a class="link" href="/faq">/faq</a>
    <a class="link" href="/faq/article">/faq/article</a>
    <a class="link" href="/register">/register</a>
    <a class="link" href="/log-in">/log-in</a>
    <a class="link" href="/account/orders">/account/orders</a>
    <a class="link" href="/account/orders/order">/account/orders/order</a>
    <a class="link" href="/account/favourite">/account/favourite</a>
    <a class="link" href="/account/referral">/account/referral</a>
    <a class="link" href="/cart/checkout">/cart/checkout</a>
    <a class="link" href="/cart/checkout/invoice">/cart/checkout/invoice</a>
    <a class="link" href="/error/403">/error/403</a>
    <a class="link" href="/error/404">/error/404</a>
    <a class="link" href="/error/500">/error/500</a>
    <a class="link" href="/error/503">/error/503</a>
    <a class="link" href="/error/coming-soon">/error/coming-soon</a>
  </section>
</template>

<style lang="scss" scoped>

.title {
  @apply font-bold text-[40px];
  color: black;
}

.link {
  @apply pt-2 text-blue-500 font-semibold w-fit;

  &:hover {
    text-decoration: underline;
  }
}

</style>