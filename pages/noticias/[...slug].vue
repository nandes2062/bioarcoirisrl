<!-- ./pages/blog/[…slug.vue] -->

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  // let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);

  return {
    article: await queryContent(path).findOne(),
    // surround: await surround
  };
});

// set the meta
// useHead({
//   title: data.value.article.title,
//   meta: [
//     { name: "description", content: data.value.article.description },
//     {
//       hid: "og:image",
//       property: "og:image",
//       content: `https://site.com/${data.value.article.img}`,
//     },
//   ],
// });
</script>
<template>
    <!-- component with nested async dependencies -->
    <main id="main" class="article-main">
      <!-- <code>{{ data.article }}</code> -->
      <header class="article-header">
        <div class="img-cont h-72 mb-12">
          <img :src="`/${data.article.img}`" :alt="data.article.title" class=" rounded-2xl" />
        </div>
        <h1 class="heading">{{ data.article.title }}</h1>
        <p class="supporting">{{ data.article.description }}</p>
        <ul class="article-tags">
          <li class="tag" v-for="(tag, n) in data.article.tags" :key="n">{{ tag }}</li>
        </ul>
      </header>
      <hr />
      <section class="article-section">
        <aside class="aside">
          <Toc :links="data.article.body.toc.links" />
        </aside>
        <article class="article">
          <ContentRenderer :value="data.article">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </article>
      </section>
      <!-- <PrevNext :prev="data.surround[0]" :next="data.surround[1]" /> -->
    </main>
</template>

<style scoped>
.article-main {
  @apply p-4 max-w-5xl m-auto;
}

.article-header {
  @apply p-4 pb-12;
}

.article-header .heading {
  @apply font-extrabold text-5xl;
}

.article-header .supporting {
  @apply font-medium text-lg;
}

.article-section {
  @apply grid grid-cols-8;
}

.aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full pt-14;
}

.aside .toc {
  @apply sticky top-20;
}

.article {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 w-full p-4 max-w-3xl m-auto;
}
</style>
