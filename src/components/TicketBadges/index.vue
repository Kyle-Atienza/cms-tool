<template>
  <div class="flex gap-2  flex-wrap">
    <select class="select select-bordered select-sm w-sm min-h-0 h-[45px] w-[120px]" v-model="value.brand">
      <option v-for="(brand, index) in brandsArray" :key="index" :value="brand">{{ brand }}</option>
    </select>
    <select class="select select-bordered select-sm w-sm min-h-0 h-[45px] w-[100px]" :disabled="!productsArray.length">
      <option v-for="(product, index) in productsArray" :key="index" :value="product">{{ product }}</option>
    </select>
    <select class="select select-bordered select-sm w-sm min-h-0 h-[45px] w-[85px]">
      <option disabled selected>State</option>
      <option>Small Apple</option>
      <option>Small Orange</option>
      <option>Small Tomato</option>
    </select>
    <div class="flex items-center gap-2 p-2 rounded-xl border-2">
      <input type="checkbox" class="toggle" />
      CHR
    </div>
  </div>
</template>

<script>
import { brands } from "../../constants/brands"

import { computed, reactive, watch } from 'vue'

export default {
  setup() {
    const value = reactive({
      brand: 'Brand',
      product: 'Product',
      state: 'State'
    })
    const brandsArray = computed(() => Object.keys(brands))
    const productsArray = computed(() => brands[value.brand])

    watch(value, () => {
      console.log(productsArray)
    })

    return{
      value,
      brandsArray,
      productsArray
    }
  }
}

</script>