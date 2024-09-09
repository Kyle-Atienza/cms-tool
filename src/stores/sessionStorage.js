import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStorageStore = defineStore('sessionStorage', () => {
  const changes = ref(0)

  const changeSessionStorage = () => {
    changes.value += 1
  }

  return {
    changes,

    changeSessionStorage
  }
})
