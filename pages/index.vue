<template>
  <div class="mx-auto">
    <BannerIndex></BannerIndex>
    <section class="bg-gray-100 py-12 mb-20">
      <div class="container max-w-screen-xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">NUESTROS PRODUCTOS</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6"
        >
          <Card v-for="item in catalog8" @update="updateCard" :product="item"> </Card>
        </div>
        <!-- grid .// -->
        <div class="flex justify-center">
          <nuxt-link
            to="/catalogo"
            class="px-6 py-2 cursor-pointer inline-block font-semibold text-white text-center bg-green-600 border border-transparent rounded-md hover:bg-green-700 uppercase"
          >
            Ver catálogo completo
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="container mx-auto">
      <div class="border-b border-gray-800 mb-16">
        <h2 class="mb-2 text-4xl text-center">¿ QUE ES LA COOPERATIVA MULTIACTIVA BIO - ARCOIRIS R.L.?</h2>
        <p class="intro mb-20 mx-auto sm:max-w-xl">
          <b>La cooperativa Multiactiva Bio - arcoíris R.L.</b>, organización de primer nivel. <b>Fundada en 2019</b>, que agrupamos a <b>100
productores de café especial</b>, asentadas en el municipio de
Coroico, Caranavi y Palos blancos, que están inmersas en la
producción de café, cítricos, paltas, mangas, hortalizas y otros
todo en armonía con el medio ambiente y cuidado de los
ecosistemas de importancia hídrica. Comercializa café
orgánico especial en grano y también transformado con su
marca ARCOIRIS, en tostado y molido.
        </p>
        <p>Las zonas se caracterizan por precipitación media anual de
1.800 mm, Humedad relativa
70-80%, con temperatura
promedio 25°C y una altura de 550m hasta 1880 m.s.n.m.</p>
        <div class="flex flex-col mb-8 sm:flex-row">
          <div class="flex items-center mb-8 md:w-5/12 sm:order-last sm:w-1/2">
            <img class="rounded-sm" src="features-split-image-01.b4363cde.png" alt="" />
          </div>
          <div class="flex flex-col justify-center mb-8 md:w-7/12 sm:pr-16 sm:w-1/2">
            <p
              class="font-semibold leading-none mb-2 sm:text-left text-center text-indigo-600 text-sm uppercase"
            >
              Lightning fast workflow
            </p>
            <h3 class="md:text-4xl sm:text-left title title-small">
              Data-driven insights
            </h3>
            <p class="md:text-left text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-8 sm:flex-row">
          <div class="flex items-center mb-8 md:w-5/12 sm:w-1/2">
            <img class="rounded-sm" src="features-split-image-02.1724ea91.png" alt="" />
          </div>
          <div class="flex flex-col justify-center mb-8 md:w-7/12 sm:pl-16 sm:w-1/2">
            <p
              class="font-semibold leading-none mb-2 sm:text-left text-center text-indigo-600 text-sm uppercase"
            >
              Lightning fast workflow
            </p>
            <h3 class="md:text-4xl sm:text-left title title-small">
              Data-driven insights
            </h3>
            <p class="md:text-left text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-8 sm:flex-row">
          <div class="flex items-center mb-8 md:w-5/12 sm:order-last sm:w-1/2">
            <img class="rounded-sm" src="features-split-image-03.a47c598b.png" alt="" />
          </div>
          <div class="flex flex-col justify-center mb-8 md:w-7/12 sm:pr-16 sm:w-1/2">
            <p
              class="font-semibold leading-none mb-2 sm:text-left text-center text-indigo-600 text-sm uppercase"
            >
              Lightning fast workflow
            </p>
            <h3 class="md:text-4xl sm:text-left title title-small">
              Data-driven insights
            </h3>
            <p class="md:text-left text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { shuffle } from "@/common/utils";
import BannerIndex from "./__banner-index/index.vue";
import Card from "@/common/components/card/index.vue";
import { cartStore } from "@/store/cart";
interface ProductContent extends ParsedContent {
  quantity: number;
}
const cartData = cartStore();
let catalog8 = ref([]);

// mounted
onMounted(() => {
  catalog8.value = shuffle(cartData.cart).filter((f: any, g: any) => g < 4) as any;
});

// methods
function updateCard(item: any) {
  catalog8.value = catalog8.value.map((v, k) => {
    if (v._id === item._id) {
      return item;
    } else {
      return v;
    }
  });
}
</script>
