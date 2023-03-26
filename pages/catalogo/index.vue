<template>
  <div>
    <section class="bg-gray-100 py-12">
      <div class="container max-w-screen-xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">NUESTROS PRODUCTOS</h2>
        <ContentList
          path="/catalogo"
          :query="{
            only: ['title', 'description', 'tags', '_path', 'img'],
            where: {
              tags: {
                $contains: filter,
              },
            }
          }"
        >
          <!-- Default list slot -->
          <template v-slot="{ list }">
            <nuxt-link class="hidden" v-for="item in list" :to="item._path">{{ item.title }}</nuxt-link>
          </template>
          <!-- Not found slot to display message when no content us is found -->
          <template #not-found>
            <p>No hay articulos para mostrar.</p>
          </template>
        </ContentList>
        <nuxt-link class="hidden" v-for="item in data.totalPagesPath" :to="item">{{ item }}</nuxt-link>
        <div class="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card
            v-for="item in data.products"
            @update="updateCard"
            :product="item" >
          </Card>
        </div> <!-- grid .// -->
        <div class="flex justify-center pb-14">
          <button
            @click="pageBack"
            class="border rounded-lg flex justify-center items-center px-4"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" style="fill: #7fcd18">
              <path
                d="M9.23104082,14.9514887 L8.43827216,15.7648617 C8.10259533,16.1092629 7.55979877,16.1092629 7.22769298,15.7648617 L0.285610623,8.6460158 C-0.0500661988,8.30161461 -0.0500661988,7.74471056 0.285610623,7.40397321 L7.22769298,0.281463477 C7.5633698,-0.0629377142 8.10616636,-0.0629377142 8.43827216,0.281463477 L9.23104082,1.0948365 C9.57028867,1.44290153 9.56314661,2.01079712 9.2167567,2.35153446 L4.91366553,6.5576256 L15.1768058,6.5576256 C15.6517528,6.5576256 16.033853,6.94965674 16.033853,7.43694779 L16.033853,8.60937738 C16.033853,9.09666842 15.6517528,9.48869957 15.1768058,9.48869957 L4.91366553,9.48869957 L9.2167567,13.6947907 C9.56671764,14.0355281 9.5738597,14.6034236 9.23104082,14.9514887 Z"
              ></path>
            </svg>
          </button>
          <form @submit.prevent="handlePage" class="mx-4">
            <label for="">Página</label>
            <input
              placeholder="1"
              v-model.number="page"
              class="w-20 mx-1 text-center bg-transparent shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            />
            <label for="">de {{ data.totalPages }}</label>
          </form>
          <button @click="pageNext" class="border rounded-lg flex justify-center items-center px-4">
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
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
  import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'
  import Card from '@/common/components/card/index.vue'
  import { cartStore } from '@/store/cart'
  import { useCatalogo } from './catalogo.composable'
  interface ProductContent extends MarkdownParsedContent {
    quantity: number
  }
  definePageMeta({
    key: (route) => route.fullPath,
  })
  const cartData = cartStore()
  // get tag query
  const {
    query: { tags },
  } = useRoute();

  const filter = ref(tags?.split(','));
  const route = useRoute()
  const router = useRouter()
  const page = ref(1)

  let { data } = await useAsyncData('catalogo', async () => {
    let prodTotal: object[]
    if (cartData.cart.length <= 0) {
      prodTotal = await queryContent<ProductContent>('/catalogo/').find()
    } else {
      prodTotal = cartData.cart
    }
    const itemsForPage = 8
    const totalItems = prodTotal.length
    const totalPages = Math.ceil(totalItems / itemsForPage)
    const limitBefore = (page.value - 1) * itemsForPage
    const limitAfter = ((page.value - 1) * itemsForPage) + (itemsForPage - 1)
    const products = prodTotal.filter((v, k) => k >= limitBefore && k <= limitAfter)
    const totalPagesPath = Array.from(Array(totalPages).keys()).map((v, k) => { return '/catalogo/p/' + (k + 1) + '/' })
    return {
      products,
      totalPages,
      totalPagesPath
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
  const { handlePage, pageNext, pageBack } = useCatalogo({ route, router, newsReponse: data, page })
</script>
