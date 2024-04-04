<template>
  <div class="flex gap-2 flex-wrap">
    <!-- brand select -->
    <select
      class="select select-bordered select-sm w-sm min-h-0 h-[45px] w-[120px]"
      v-model="value.brand"
    >
      <option hidden selected>
        {{ defaultValue.brand }}
      </option>
      <option v-for="(brand, index) in brandsArray" :key="index" :value="brand">{{ brand }}</option>
    </select>
    <!-- product select -->
    <select
      class="select select-bordered select-sm w-sm min-h-0 h-[45px] w-[100px]"
      v-model="value.product"
    >
      <option hidden selected>
        {{ defaultValue.product }}
      </option>
      <option v-for="(product, index) in productsArray" :key="index" :value="product">
        {{ capitalizeCase(product) }}
      </option>
    </select>
    <!-- state select -->
    <select
      class="select select-bordered select-sm w-sm min-h-0 h-[45px] w-[100px]"
      v-model="value.state"
    >
      <option hidden selected>
        {{ defaultValue.state }}
      </option>
      <option v-for="(state, index) in statesArray" :key="index" :value="state">
        {{ state }}
      </option>
    </select>
    <div class="flex items-center gap-2 p-2 rounded-xl border-2">
      <input type="checkbox" class="toggle" />
      CHR
    </div>
  </div>
</template>

<script>
import { brands } from '../../constants/brands'
import { sitecore } from '../../constants/links'

import { capitalizeCase } from '../../helpers/stringHelper'

import { computed, reactive, watch, onMounted } from 'vue'

export default {
  setup() {
    const defaultValue = reactive({
      brand: 'Brand',
      product: 'Product',
      state: 'State'
    })
    const value = reactive({
      brand: defaultValue.brand,
      product: defaultValue.product,
      state: defaultValue.state
    })
    const brandsArray = computed(() => Object.keys(brands))
    const productsArray = computed(() =>
      value.brand && value.brand !== defaultValue.brand
        ? Object.keys(brands[value.brand].products)
        : []
    )
    const statesArray = computed(() => {
      let array

      if (value.product && value.product !== defaultValue.product) {
        array = brands[value.brand].products[value.product].states
      } else {
        array = []
      }

      return array
    })

    watch(value, () => {
      sessionStorage.setItem('brand', value.brand)
      sessionStorage.setItem('product', value.product)
      sessionStorage.setItem('state', value.state)
    })

    onMounted(() => {
      value.brand = sessionStorage.getItem('brand') || defaultValue.brand
      value.product = sessionStorage.getItem('product') || defaultValue.product
      value.state = sessionStorage.getItem('state') || defaultValue.state
    })

    return {
      defaultValue,
      value,
      brandsArray,
      productsArray,
      statesArray,

      capitalizeCase
    }
  }
}
</script>
