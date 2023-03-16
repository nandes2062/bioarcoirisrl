<template>
  <div></div>
</template>

<script setup lang="ts">
  const router = useRouter()
  onMounted(() => {
    router.push('/noticias/1')
  })
</script>
