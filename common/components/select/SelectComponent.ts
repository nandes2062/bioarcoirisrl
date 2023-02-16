import { ref } from 'vue'

export function SelectComponent () {
  const isOpen = ref(false)
  return {
    isOpen
  }
}
