<template>
  <div>
    <label class="form-control w-full ">
      <div class="label">
        <span class="label-text">Ticket Details</span>
      </div>
      <div class="flex gap-2 flex-wrap">
        <!-- brand select -->
        <select
          class="select select-bordered select-sm w-sm min-h-0 h-[45px] w-[120px]"
          v-model="ticketDetails.brand"
        >
          <option :value="null" hidden selected>
            Brand
          </option>
          <option v-for="({value, label}, index) in brandsv2" :key="index" :value="value">{{ label }}</option>
        </select>
        <!-- product select -->
        <select
          class="select select-bordered select-sm w-sm min-h-0 h-[45px] w-[120px]"
          v-model="ticketDetails.product"
        >
          <option :value="null" hidden selected>
            Label
          </option>
          <option v-for="({value, label}, index) in productsArray" :key="index" :value="value">{{ label }}</option>
        </select>
        <!-- state select -->
        <select
          class="select select-bordered select-sm w-sm min-h-0 h-[45px] w-[120px]"
          v-model="ticketDetails.state"
        >
          <option :value="null" hidden selected>
            State
          </option>
          <option v-for="({value, label}, index) in statesArray" :key="index" :value="value">{{ label }}</option>
        </select>
        <div class="flex items-center gap-2 p-2 rounded-xl border-2">
          <input type="checkbox" class="toggle" />
          CHR
        </div>
      </div>
    </label>
    <label class="form-control w-full ">
      <div class="label">
        <span class="label-text">QA Filter</span>
      </div>
      <input
        type="text"
        placeholder="Enter QA Filter"
        class="input w-full w-full"
        v-model="ticketDetails.qaFilter"
      />
    </label>
  </div>
</template>

<script>
import { brands, brandsv2 } from '../../constants/brands'
import { sitecore } from '../../constants/links'

import { capitalizeCase } from '../../helpers/stringHelper'
import { useSessionStorageStore } from '../../stores/sessionStorage'

import { computed, reactive, watch, onMounted } from 'vue'

export default {
  setup() {
    const sessionStorageStore = useSessionStorageStore()

    const ticketDetails = reactive({
      brand: 'betmgm',
      product: 'casino',
      state: 'nj',
      qaFilter: 'kyle'
    })
    const productsArray = computed(
      () =>
        ticketDetails.brand
          ? brandsv2.find(brand => brand.value === ticketDetails.brand).products
          : []
    )
    const statesArray = computed(
      () =>
        ticketDetails.product
          ? productsArray.value.find(product => product.value === ticketDetails.product).states
          : []
    )

    watch(ticketDetails, () => {
      sessionStorage.setItem('brand', ticketDetails.brand)
      sessionStorage.setItem('product', ticketDetails.product)
      sessionStorage.setItem('state', ticketDetails.state)
      sessionStorage.setItem('qaFilter', ticketDetails.qaFilter)
      sessionStorageStore.changeSessionStorage()
    })

    onMounted(() => {
      ticketDetails.brand = sessionStorage.getItem('brand') || 'betmgm'
      ticketDetails.product = sessionStorage.getItem('product') || 'casino'
      ticketDetails.state = sessionStorage.getItem('state') || 'nj'
      ticketDetails.state = sessionStorage.getItem('qaFilter') || 'kyle'
    })

    return {
      brandsv2,
      ticketDetails,
      productsArray,
      statesArray,

      capitalizeCase
    }
  }
}
</script>
