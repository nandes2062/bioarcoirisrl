<template>
  <div>
    <!-- COMPONENT: PRODUCT CARD -->
    <article
      class="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5"
    >
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/4">
          <img class="mx-auto" src="/images/image-disabled.jpg" alt="Product name text" />
        </div>
        <!-- col.// -->
        <div class="md:w-3/4">
          <div class="p-4">
            <nuxt-link :to="props.to" class="hover:text-green-600">
              {{ props.title }}
            </nuxt-link>
            <!-- <div class="flex flex-wrap items-center space-x-2 mb-2">
              <b class="text-gray-300">•</b>
              <span class="ml-1 text-yellow-500">9.3</span>
            </div> -->
            <p class="text-gray-500 mb-2">
              {{ props.description }}
            </p>
            <!-- <p class="space-y-2">
              <span
                class="inline-block px-3 text-sm py-1 border border-gray-300 text-gray-400 rounded-full"
              >
                Leather
              </span>
              <span
                class="inline-block px-3 text-sm py-1 border border-gray-300 text-gray-400 rounded-full"
              >
                Pink Color
              </span>
              <span
                class="inline-block px-3 text-sm py-1 border border-gray-300 text-gray-400 rounded-full"
              >
                Retina Screen
              </span>
              <span
                class="inline-block px-3 text-sm py-1 border border-gray-300 text-gray-400 rounded-full"
              >
                Original
              </span>
            </p> -->
          </div>
        </div>
        <!-- col.// -->
      </div>
    </article>
  </div>
</template>
<script setup lang="ts">
  // bindings
  const props = withDefaults(defineProps<{
    title: string,
    description: string,
    to: string
  }>(), {})
// event binding
// methods
</script>
