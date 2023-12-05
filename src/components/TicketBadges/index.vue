<template>
  <div class="flex gap-2  flex-wrap">
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
      <option hidden selected >
        {{ defaultValue.product }}
      </option>
      <option v-for="(product, index) in productsArray" :key="index" :value="product">{{ capitalizeCase(product) }}</option>
    </select>
    <!-- state multiselect -->
    <details class="dropdown dropdown-end">
      <summary class=" btn normal-case font-normal bg-base-100 border-secondary h-[45px] min-h-0">State</summary>
      <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[180px] mt-2">
        <div class="grid gap-2 grid-cols-3">
          <button 
            :class="['btn btn-sm']" v-for="(state, index) in statesArray" 
            :key="index"
            @click="onSelectState(state)"
          >
              {{ state.name }}
          </button>
        </div>
      </ul>
    </details>
    <div class="flex items-center gap-2 p-2 rounded-xl border-2">
      <input type="checkbox" class="toggle" />
      CHR
    </div>
  </div>
</template>

<script>
import { brands } from "../../constants/brands"

import { capitalizeCase } from "../../helpers/stringHelper"

import { computed, reactive, watch } from 'vue'

export default {
  setup() {
    const defaultValue = reactive({
      brand: 'Brand',
      product: 'Product'
    })
    const value = reactive({
      brand: defaultValue.brand,
      product:  defaultValue.product,
      state: []
    })
    const brandsArray = computed(() => Object.keys(brands))
    const productsArray = computed(() => value.brand && value.brand !== defaultValue.brand ? Object.keys(brands[value.brand].products) : [])
    const statesArray = computed(() => {
      let array;

      if (value.product && value.product !== defaultValue.product) {
        array = brands[value.brand].products[value.product].states
      } else {
        array = []
      }

      return array.map(state => ({
        name: state,
        selected: false
      }))
    })

    const onSelectState = (state) => {
      const stateIndex = value.state.findIndex(el => el === state)

      if (!stateIndex) {
        value.state.push(state)
      } else {
        value.state = value.state.filter()
      }
    }

    watch(productsArray, () => {
      console.log(value)
    })

    return{
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