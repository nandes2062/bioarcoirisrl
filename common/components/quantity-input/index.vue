<template src="./QuantityInput.html"></template>

<script setup lang="ts">
  const props = withDefaults(defineProps<{
    modelValue: number,
    max: number
  }>(), {
    modelValue: 1
  })
  
  const emit = defineEmits(['update:modelValue'])

  function inputChange (args: any) {
    const result = parseInt(args.target.value) 
    if (!isNaN(result)) { 
      emit('update:modelValue', result)
    }
  }

  function increment () {
    console.log('props.number', props.modelValue)    
    console.log(props.modelValue + 1)
    if (props.modelValue < props.max) {
      emit('update:modelValue', props.modelValue + 1)
    }
  }

  function decrement () {
    if (props.modelValue >= 1) {
      emit('update:modelValue', props.modelValue - 1)
    }
  }
</script>
