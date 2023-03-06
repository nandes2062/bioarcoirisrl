<template>
  <section class="py-12">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h2
        class="mb-6 flex justify-center lg:text-5xl text-4xl text-green-500 font-medium"
      >
        Noticias
      </h2>
      <div class="flex flex-col md:flex-row -mx-4 items-center justify-center">
        <!-- col.// -->
        <main class="md:w-2/3 lg:w-3/4 px-3">
          <!-- <p>{{ news }}</p> -->
          <!-- COMPONENT: PRODUCT ITEM -->
          <NewsCard
            v-for="item in news"
            :title="item.title"
            :description="item.description"
            :to="item._path"
          ></NewsCard>
          <div class="flex justify-center pb-14">
            <button
              class="border cursor-not-allowed rounded-lg flex justify-center items-center px-4"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" style="fill: #7fcd18">
                <path
                  d="M9.23104082,14.9514887 L8.43827216,15.7648617 C8.10259533,16.1092629 7.55979877,16.1092629 7.22769298,15.7648617 L0.285610623,8.6460158 C-0.0500661988,8.30161461 -0.0500661988,7.74471056 0.285610623,7.40397321 L7.22769298,0.281463477 C7.5633698,-0.0629377142 8.10616636,-0.0629377142 8.43827216,0.281463477 L9.23104082,1.0948365 C9.57028867,1.44290153 9.56314661,2.01079712 9.2167567,2.35153446 L4.91366553,6.5576256 L15.1768058,6.5576256 C15.6517528,6.5576256 16.033853,6.94965674 16.033853,7.43694779 L16.033853,8.60937738 C16.033853,9.09666842 15.6517528,9.48869957 15.1768058,9.48869957 L4.91366553,9.48869957 L9.2167567,13.6947907 C9.56671764,14.0355281 9.5738597,14.6034236 9.23104082,14.9514887 Z"
                ></path>
              </svg>
            </button>
            <form class="mx-4">
              <label for="">Página</label>
              <input
                placeholder="1"
                value="1"
                class="w-20 mx-1 text-center bg-transparent shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
              <label for="">de 20</label>
            </form>
            <button class="border rounded-lg flex justify-center items-center px-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                class="transform rotate-180"
                style="fill: #7fcd18"
              >
                <path
                  d="M9.23104082,14.9514887 L8.43827216,15.7648617 C8.10259533,16.1092629 7.55979877,16.1092629 7.22769298,15.7648617 L0.285610623,8.6460158 C-0.0500661988,8.30161461 -0.0500661988,7.74471056 0.285610623,7.40397321 L7.22769298,0.281463477 C7.5633698,-0.0629377142 8.10616636,-0.0629377142 8.43827216,0.281463477 L9.23104082,1.0948365 C9.57028867,1.44290153 9.56314661,2.01079712 9.2167567,2.35153446 L4.91366553,6.5576256 L15.1768058,6.5576256 C15.6517528,6.5576256 16.033853,6.94965674 16.033853,7.43694779 L16.033853,8.60937738 C16.033853,9.09666842 15.6517528,9.48869957 15.1768058,9.48869957 L4.91366553,9.48869957 L9.2167567,13.6947907 C9.56671764,14.0355281 9.5738597,14.6034236 9.23104082,14.9514887 Z"
                ></path>
              </svg>
            </button>
          </div>
        </main>
        <!-- col.// -->
        <!-- <aside class="md:w-1/3 lg:w-1/4 px-4"> -->
          <!-- filter wrap -->

          <!-- <a
            class="md:hidden mb-5 w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-green-600"
            href="#"
          >
            Filter by
          </a> -->

          <!-- <div class="block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
            <h3 class="font-semibold mb-2">Categorias</h3>

            <ul class="text-gray-500 space-y-1">
              <li>
                <a class="hover:text-green-600 hover:underline" href="#">Electronics </a>
              </li>
              <li>
                <a class="hover:text-green-600 hover:underline" href="#">Watches </a>
              </li>
              <li>
                <a class="hover:text-green-600 hover:underline" href="#">Cinema </a>
              </li>
              <li>
                <a class="hover:text-green-600 hover:underline" href="#">Clothes </a>
              </li>
              <li>
                <a class="hover:text-green-600 hover:underline" href="#">Home items </a>
              </li>
              <li>
                <a class="hover:text-green-600 hover:underline" href="#">Smartwatches </a>
              </li>
            </ul>
          </div> -->
          <!-- filter wrap -->
        <!-- </aside> -->
      </div>
      <!-- grid.// -->
    </div>
    <!-- container .// -->
  </section>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import NewsCard from "@/common/components/news-card/index.vue";
import { newsStore } from '@/store/news'
interface ProductContent extends ParsedContent {}
const newsData = newsStore()

let { data: news } = await useAsyncData("noticias", async () => {
  if (newsData.report.length <= 0) {
    return await queryContent<ProductContent>("/noticias/").find();
  } else {
    return newsData.report
  }
})
</script>
