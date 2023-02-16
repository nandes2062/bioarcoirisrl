<template>
  <div class="fixed top-0 left-0 w-screen h-screen flex justify-end z-50">
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60" @click="close"></div>
    <section class="bg-white max-w-sm w-full relative">
      <header class="bg-green-600 h-16 text-white flex items-center justify-center px-5">
        <b>Carro de compras</b>
        <CloseIcon @click="close" class="w-6 h-6 absolute stroke-white right-0 mr-4 text-white"></CloseIcon>
      </header>
      <main v-if="props.cart.length > 0" class="text-sm px-4 py-3 h-[calc(100vh-17.5rem)] overflow-auto">
        <div>
          <p>Total de productos</p>
          <button>Vaciar carro</button>
        </div>
        <ProductCart
          v-for="item in productsCart"
          :product="item"
        />
      </main>
      <main v-else class="flex justify-center flex-col items-center pt-5">
        <CartIcon class="w-20 h-20 bg-slate-200 text-slate-800 rounded-full p-4"></CartIcon>
        <p><b>Tu carro está vacio.</b></p>
      </main>
      <footer class="bg-gray-100 px-4 pt-4 pb-5">
        <article class="bg-white rounded-sm shadow-sm p-4">
          <h3 class="font-semibold text-center text-gray-900 border-b pb-2">Resumen de tu cuenta</h3>
          <ul class="mb-3">
            <li class="flex justify-between pt-3"> 
              <span>Precio total:</span> 
              <span class="text-gray-900 font-bold">$420.00</span>
            </li>
          </ul>
          <div class="border-t flex justify-center pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" class="px-5 py-2 cursor-pointer inline-flex items-center font-semibold text-white text-center bg-lime-500 border border-transparent rounded-md hover:bg-lime-600">
              <WhatsappIcon class="w-5 h-5 mr-2"></WhatsappIcon>
              <span class="lg:text-base text-sm">Realizar pedido por Whatsapp</span>
            </a>
          </div>
        </article>
      </footer>
    </section>
  </div>
</template>
<script setup lang="ts">
  import  ProductCart from '@/common/components/product-cart/index.vue'
  import { cartStore } from '~~/store/cart'
  interface Product {
    name: string
  }
  const cartData = cartStore()
  const productsCart = computed(() => {
    return cartData.cart.filter((v, k) => v.quantity > 0)
  })
  // bindings
  const props = withDefaults(defineProps<{
    cart: Product[]
  }>(), {
  })
  // events binding
  const emit = defineEmits([
    'close'
  ])

  // methods
  function close (args = null as any) {
    emit('close', args)
  }
</script>
