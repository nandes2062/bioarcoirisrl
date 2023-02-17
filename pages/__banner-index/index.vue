<template src="./BannerIndex.html"></template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }
})
</script>
<style>
.carousel__item {
  @apply bg-green-500;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  @apply bg-green-500 bg-opacity-30 rounded-full text-white hover:text-gray-200;
}
.carousel__pagination {
  @apply -mt-7 relative py-2;
}
</style>
