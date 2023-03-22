<template src="./Header.html"></template>
<script setup lang="ts">
  import ShowCartRight from './show-cart-right/index.vue'
  import ShowMenuHeader from './show-menu-header/index.vue'
  import { cartStore } from '~~/store/cart'
  const openMenuHeader = ref(false)
  const store = cartStore()
  // computed
  const notifyQuantity = computed(() => {
    return store.cart.reduce((accumulator, currentValue) =>  accumulator + currentValue.quantity, 0)
  })

  // methods
  function showCart () {
    store.openCart = true
    document.body.style.overflowY = 'hidden'
  }
  function closeCart () {
    store.openCart = false
    document.body.style.overflowY = 'auto'
  }
  function shownMenu () {
    openMenuHeader.value = true
    document.body.style.overflowY = 'hidden'
  }
  function closeMenu () {
    openMenuHeader.value = false
    document.body.style.overflowY = 'auto'
  }
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>