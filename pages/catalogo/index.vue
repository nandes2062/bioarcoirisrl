<template>
  <div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum alias reiciendis, qui deserunt libero, dolorem veritatis itaque quas id est architecto eligendi laudantium nihil nostrum animi modi. Officia, ex consectetur?</p>
    <section class="bg-gray-100 py-12">
      <div class="container max-w-screen-xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">NUESTROS PRODUCTOS</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card
            v-for="item in data"
            @update="updateCard"
            :product="item" >
          </Card>
        </div> <!-- grid .// -->
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
  import Card from '@/common/components/card/index.vue'
  import { cartStore } from '@/store/cart'
  interface ProductContent extends ParsedContent {
    quantity: number
  }
  const cartData = cartStore()
  let { data } = await useAsyncData('catalogo', async () => {
    if (cartData.cart.length <= 0) {
      return await queryContent<ProductContent>('/catalogo/').find()
    } else {
      return cartData.cart
    }
  })

  function updateCard(item) {
    data.value = data.value.map((v, k) => {
      if (v._id === item._id) {
        return item
      } else {
        return v
      }
    })
  }
</script>
