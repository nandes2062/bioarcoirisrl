<template src="./CardGridComponent.html"></template>
<script setup lang="ts">
  import QuantityInput from '../quantity-input/index.vue'
  interface Price {
    code: string,
    prefix: string,
    value: number,
    discountQuantity: number
  }

  interface ImageName {
    image: string,
    name: string
  }

  // Enviroments
  const { VITE_WHATSAPP_BASE_URL } = useRuntimeConfig().public

  // data ref
  const openBuyLocal = ref(false)

  // bindings
  const props = withDefaults(defineProps<{
    name?: string,
    duration?: string,
    combo?: ImageName[],
    image?: string,
    price: Price[],
    symbol?: string,
    quantity: number,
    quantityLimit?: number,
    category: string,
    openBuy?: boolean
  }>(), {
    image: '/images/no-image.png'
  })
  // events binding
  const emit = defineEmits([
    'update:quantity',
    'update:openBuy'
  ])

  // computeds
  const priceCalculed = computed(() => {
    const normalPrice = props.price[0].value * props.quantity
    const discount = props.price[0].discountQuantity * (props.quantity - 1)
    return Math.round(normalPrice - discount)
  })

  const categoryCalculed = computed(() => {
    const categories: any = {
      PERFIL: {
        plural: 'Dispositivos (Perfiles)',
        singular: 'Dispositivo (Perfil)'
      },
      CUENTA: {
        plural: 'Cuentas completas',
        singular: 'Cuenta completa'
      },
      ['COMBO-PERFIL']: {
        plural: 'Dispositivos (Combo)',
        singular: 'Dispositivo (Combo)'
      }
    }
    return props.quantity > 1 ? categories[props.category].plural : categories[props.category].singular
  })
  const _ = '%0A'
  const whatsappMessage = computed(() => {
    if (props.combo) {
      const name = props.combo.map(v => v.name).toString()
      const message = 'Hola *Caserito Digital* 👋🏼' + _ +
                      'quisiera obtener:' + _ +
                      `🔹 ${props.quantity} ${categoryCalculed.value}` + _ +
                      `🔸 ${name}, ${props.duration}` + _ +
                      `🔹 Precio: ${props.price[0].prefix} ${priceCalculed.value}`
      return `${VITE_WHATSAPP_BASE_URL}${message}`
    } else {
      const message = 'Hola *Caserito Digital* 👋🏼' + _ +
                      'quisiera obtener:' + _ +
                      `🔹 ${props.quantity} ${categoryCalculed.value}` + _ +
                      `🔸 ${props.name} ${props.duration}` + _ +
                      `🔹 Precio: ${props.price[0].prefix} ${priceCalculed.value}`
      return `${VITE_WHATSAPP_BASE_URL}${message}`
    }
  })

  // methods
  function changeQuantity (args: any) {
    emit('update:quantity', parseInt(args))
  }
  
  function changeOpenBuy (args: boolean) {
    console.log('changeOpenBuy: ', args)
    openBuyLocal.value = args
    emit('update:openBuy', args)
  }

  function changeOpenBuyResp (resp: any) {
    console.log(resp)    
  }
</script>
