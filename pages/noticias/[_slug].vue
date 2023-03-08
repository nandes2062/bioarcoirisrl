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
            <nuxt-link class="text-gray-600 hover:text-green-600" to="/noticias">Noticias</nuxt-link> 
            <ArrowIcon class="transform rotate-90 w-5 h-5 ml-3"></ArrowIcon>
          </li>
          <li class="inline-flex items-center"> {{ data.title }} </li>
        </ol>
        <!-- breadcrumbs end -->
      </div><!-- /.container -->
    </section>
    <ContentDoc class="container mx-auto max-w-screen-lg px-5 py-20 markdown-body" />
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).only(['title']).findOne()
})
</script>