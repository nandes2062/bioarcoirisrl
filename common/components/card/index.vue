<template>
  <div>
    <!-- COMPONENT: PRODUCT CARD -->
    <article class="shadow-sm rounded bg-white border border-gray-200">
      <a href="#" class="block p-1">
        <img src="@/images/image-disabled.jpg" class="mx-auto w-auto" height="240" alt="Product title here">
      </a>
      <div class="p-4 border-t border-t-gray-200">
        <p class="font-semibold">$99.50</p>
        <a href="#" class="block text-gray-600 mb-3 hover:text-blue-500">
          Sample name of the product just goes here
        </a>
        <div class="flex justify-center">
          <button
            v-if="props.product.quantity <= 0"
            @click="addInCart"
            class="px-6 py-2 cursor-pointer inline-block font-semibold text-white text-center bg-green-600 border border-transparent rounded-md hover:bg-green-700"
          >
            Agregar
          </button>
          <QuantityInput v-else :modelValue="props.product.quantity" @update:modelValue="changeQuantity" :max="quantityLimit"></QuantityInput>
        </div>
      </div>
    </article>
    <!-- COMPONENT: PRODUCT CARD //END -->
  </div>
</template>
<script setup lang="ts">
  import QuantityInput from '../quantity-input/index.vue'
  import { cartStore } from '~~/store/cart'

  let cartData = cartStore()
  
  // bindings
  const props = withDefaults(defineProps<{
    product: any,
    quantityLimit?: number
  }>(), {
    quantityLimit: 9999
  })

  // event binding
  const emit = defineEmits([
    'update'
  ])

  // methods
  function addInCart () {
    cartData.cart = cartData.cart.map((v, k) => {
      if (v._id === props.product._id) {
        emit('update', {
          ...v,
          quantity: v.quantity + 1
        })
        return {
          ...v,
          quantity: v.quantity + 1
        }
      } else {
        emit('update', v)
        return v
      }
    })
  }

  function changeQuantity (args: any) {
    cartData.cart = cartData.cart.map((v, k) => {
      if (v._id === props.product._id) {
        emit('update', {
          ...v,
          quantity: parseInt(args)
        })
        return {
          ...v,
          quantity: parseInt(args)
        }
      } else {
        emit('update', v)
        return v
      }
    })
  }
</script>
