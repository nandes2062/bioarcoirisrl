import { defineStore } from 'pinia'

export const cartStore = defineStore('cart', {
  state: () => {
    return {
      cart: [] as ProductInfo[],
      openCart: false as boolean
    }
  }
})

interface ProductInfo {
  name: string,
  unitPrice?: number,
  totalPrice?: number,
  description?: string,
  quantity: number
}