<template>
  <div id="COMBOS-DUO-&-TRIO">
  <Header />
  <slot></slot>
  <Footer />
  </div>
</template>

<script setup lang="ts">
  import Header from './templates/header/index.vue'
  import Footer from './templates/footer/index.vue'
  import { cartStore } from '@/store/cart'
  interface ProductContent extends ParsedContent {
    quantity: number
  }
  const cartData = cartStore()
  await useAsyncData('catalogo', async () => {
    const result = await queryContent<ProductContent>('/catalogo/').find()
    cartData.cart = result as any
    return result
  })
</script>
