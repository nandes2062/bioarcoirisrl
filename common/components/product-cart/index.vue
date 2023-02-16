<template>
  <figure class="flex items-center mb-4 leading-5 shadow-sm rounded bg-white border border-gray-200">
		<div>
			<div class="block relative w-20 h-20 rounded p-1 border border-gray-200">
				<img width="70" height="70" src="images/items/1.jpg" alt="Title">
				<span class="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full"> 1 </span>
			</div>
		</div>
		<figcaption class="ml-3">
			<p> GoPRO Action Camera <br> Model: G-200 </p>
			<p class="mt-1 text-gray-400"> Total: $12.99 </p>
      <QuantityInput :modelValue="props.product.quantity" @update:modelValue="changeQuantity" :max="quantityLimit"></QuantityInput>
		</figcaption>
	</figure>
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
