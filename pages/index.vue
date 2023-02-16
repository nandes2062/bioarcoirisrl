<template src="./IndexComponent.html"></template>

<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
  import { shuffle } from '@/common/utils'
  import BannerIndex from './__banner-index/index.vue'
  import Card from '@/common/components/card/index.vue'
  import { cartStore } from '@/store/cart'
  interface ProductContent extends ParsedContent {
    quantity: number
  }
  const cartData = cartStore()
  let catalog4 = ref([])

  // mounted
  onMounted(() => {
    catalog4.value = shuffle(cartData.cart).filter((f: any, g: any) => g < 4) as any
  })

  // methods
  function updateCard(item: any) {
    catalog4.value = catalog4.value.map((v, k) => {
      if (v._id === item._id) {
        return item
      } else {
        return v
      }
    })
  }
</script>
