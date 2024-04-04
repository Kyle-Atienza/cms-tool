import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticket', () => {
  const brand = ref('')
  const product = ref('')
  const state = ref('')

  const setDetails = (brand, product, state) => {
    this.brand = brand
    this.product = product
    this.state = state
  }

  return {
    brand,
    product,
    state,

    setDetails
  }
})
