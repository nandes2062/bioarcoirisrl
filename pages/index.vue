<template>
  <div class="mx-auto">
    <BannerIndex :slides="slides.slides"></BannerIndex>
    <section class="bg-gray-100 py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-green-600">NUESTROS PRODUCTOS</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-14"
        >
          <Card v-for="item in catalog8" @update="updateCard" :product="item"> </Card>
        </div>
        <!-- grid .// -->
        <div class="flex justify-center">
          <nuxt-link
            to="/catalogo"
            class="px-6 py-2 cursor-pointer inline-block font-semibold text-green-600 hover:text-white text-center border-green-600 border-2 border-transparent rounded-md hover:bg-green-700 uppercase"
          >
            Ver catálogo completo
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="mb-20">
      <div class="flex flex-wrap bg-black">
        <div
          class="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-90"
        >
          <div class="relative z-10 flex flex-col items-center">
            <span class="text-2xl">Coroico</span>
            <b class="text-6xl font-heading">28</b>
            <span class="text-xs">asociados</span>
          </div>
          <img preset="avatar" src="/images/image23.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60" />
        </div>
        <div class="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-90">
          <div class="relative z-10 flex flex-col items-center">
            <span class="text-2xl">Caranavi</span>
            <b class="text-6xl font-heading">49</b>
            <span class="text-xs">asociados</span>
          </div>
          <img preset="avatar" src="/images/image58.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60" />
        </div>
        <div class="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-90">
          <div class="relative z-10 flex flex-col items-center">
            <span class="text-2xl">Palos blancos</span>
            <b class="text-6xl font-heading">23</b>
            <span class="text-xs">asociados</span>
          </div>
          <img preset="avatar" src="/images/image22.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60" />
        </div>
      </div>
    </section>
    <section id="empresa" class="container mx-auto text-xl leading-9">
      <div class="mb-16 max-w-6xl px-4 mx-auto pt-20">
        <h2
          class="mb-6 flex justify-center lg:text-5xl text-4xl text-green-500 font-medium"
        >
          ¿ QUE ES BIO ARCOIRIS R.L.?
          <img class="ml-5 w-10 object-contain" src="/favicon.png" />
        </h2>
        <p class="intro mb-20 mx-auto sm:max-w-2xl text-center">
          <b>La cooperativa Multiactiva Bio - arcoíris R.L.</b>, es una organización de
          primer nivel. <b>Fundada en 2019</b>, que agrupamos a
          <b>100 productores de café especial</b>.
        </p>
        <p></p>
        <div class="flex flex-col mb-8 sm:flex-row text-base">
          <div class="flex items-center mb-8 md:w-5/12 sm:order-last sm:w-1/2">
            <img class="rounded-sm" src="/images/image8.jpg" alt="" />
          </div>
          <div class="flex flex-col justify-center mb-8 md:w-7/12 sm:pr-16 sm:w-1/2">
            <p
              class="font-semibold leading-none mb-2 sm:text-left text-center text-green-600 text-sm uppercase"
            >
              Asentadas en los municipios de
            </p>
            <h3 class="md:text-4xl sm:text-left title title-small">
              Coroico, Caranavi y Palos blancos
            </h3>
            <p class="md:text-left text">
              Que están inmersas en la producción de café, cítricos, paltas, mangas,
              hortalizas y otros todo en armonía con el medio ambiente y cuidado de los
              ecosistemas de importancia hídrica.
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-8 sm:flex-row text-base">
          <div class="flex items-center mb-8 md:w-5/12 sm:w-1/2">
            <img class="rounded-sm" src="/images/image10.jpg" alt="" />
          </div>
          <div class="flex flex-col justify-center mb-8 md:w-7/12 sm:pl-16 sm:w-1/2">
            <p
              class="font-semibold leading-none mb-2 sm:text-left text-center text-green-600 text-sm uppercase"
            >
              Comercializa
            </p>
            <h3 class="md:text-4xl sm:text-left title title-small">
              Café orgánico especial
            </h3>
            <p class="md:text-left text">
              En grano y también transformado con su marca ARCOIRIS, en tostado y molido.
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-8 sm:flex-row text-base">
          <div class="flex items-center mb-8 md:w-5/12 sm:order-last sm:w-1/2">
            <img class="rounded-sm" src="/images/image9.jpg" alt="" />
          </div>
          <div class="flex flex-col justify-center mb-8 md:w-7/12 sm:pr-16 sm:w-1/2">
            <p
              class="font-semibold leading-none mb-2 sm:text-left text-center text-green-600 text-sm uppercase"
            >
              Coroico, Caranavi y Palos blancos
            </p>
            <h3 class="md:text-4xl sm:text-left title title-small">
              Son zonas que se caracterizan por
            </h3>
            <p class="md:text-left text">
              Precipitación media anual de 1.800 mm, Humedad relativa 70-80%, con
              temperatura promedio 25°C y una altura de 550m hasta 1880 m.s.n.m.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-100 mx-auto text-xl leading-9 pb-4">
      <Contacto></Contacto>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { shuffle } from "@/common/utils";
import BannerIndex from "./__banner-index/index.vue";
import Contacto from "./__contacto/index.vue";
import Card from "@/common/components/card/index.vue";
import { cartStore } from "@/store/cart";
import _slides from '@/content/slides/index.json'
interface ProductContent extends ParsedContent {
  quantity: number;
}
const cartData = cartStore();
let catalog8 = ref([]);
const { data: slides } = await useAsyncData(() => _slides)

// mounted
onMounted(() => {
  catalog8.value = shuffle(cartData.cart).filter((f: any, g: any) => g < 8) as any;
});

// methods
function updateCard(item: any) {
  catalog8.value = catalog8.value.map((v, k) => {
    if (v._id === item._id) {
      return item;
    } else {
      return v;
    }
  })
}
</script>
