<template>
  <div class="fixed top-0 left-0 w-screen h-screen flex justify-start z-50">
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60" @click="close"></div>
    <section class="bg-white max-w-sm w-full relative">
      <header class="bg-green-600 h-16 text-white flex items-center justify-center px-5">
        <b>Menu</b>
        <CloseIcon @click="close" class="w-6 h-6 absolute stroke-white right-0 mr-4 text-white"></CloseIcon>
      </header>
      <main class="flex justify-center flex-col items-center pt-5">
        <slot/>
      </main>
    </section>
  </div>
</template>
<script setup lang="ts">
  // events binding
  const emit = defineEmits([
    'close'
  ])

  // methods
  function close (args = null as any) {
    emit('close', args)
  }
</script>
