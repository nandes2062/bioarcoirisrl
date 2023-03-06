import { defineStore } from 'pinia'

export const newsStore = defineStore('report', {
  state: () => {
    return {
      report: [] as ProductInfo[],
      openCart: false as boolean
    }
  }
})

interface ProductInfo {
  title: string,
  description?: string
}