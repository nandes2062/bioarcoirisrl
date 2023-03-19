<template>
  <div class="mx-auto flex flex-col items-center">
    <section class="py-5 sm:py-7 bg-green-100 w-full">
      <div class="container mx-auto max-w-screen-lg px-5">
        <!-- breadcrumbs start -->
        <h2 class="text-3xl font-semibold mb-2">{{ data.title }}</h2>
        <ol class="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
          <li class="inline-flex items-center">
            <nuxt-link class="text-gray-600 hover:text-green-600" to="/">Inicio</nuxt-link>  
            <ArrowIcon class="transform rotate-90 w-5 h-5 ml-3"></ArrowIcon>
          </li>
          <li class="inline-flex items-center" aria-current="page">
            <button type="button" class="text-gray-600 hover:text-green-600" @click="back">Noticias</button>
            <ArrowIcon class="transform rotate-90 w-5 h-5 ml-3"></ArrowIcon>
          </li>
          <li class="inline-flex items-center"> {{ data.title }} </li>
        </ol>
        <!-- breadcrumbs end -->
      </div><!-- /.container -->
    </section>
    <ContentRenderer class="container mx-auto max-w-screen-lg px-5 py-20 markdown-body" :value="data">
      <!-- render rich text from document
      <MarkdownRenderer :value="data.article" /> -->
      <!-- display if document content is empty -->
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute()
const router = useRouter()
const { data } = await useAsyncData(`content-${path}`, async () => {
  return await queryContent().where({ _path: path }).findOne()
})
function back () {
  router.go(-1)
}
// set the meta
useHead({
  title: data.value.title,
  meta: [
    { name: "description", content: data.value.description },
    {
      hid: "og:image",
      property: "og:image",
      // content: `https://site.com/${data.value.article.img}`,
    },
  ],
});
</script>