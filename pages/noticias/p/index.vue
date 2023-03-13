<template>
  <div></div>
</template>

<script setup lang="ts">
  const router = useRouter()
  onMounted(() => {
    router.push('/noticias/p/1')
  })
</script>
