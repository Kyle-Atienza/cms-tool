<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <input type="text" v-model="item.value">
      <button @click="addItem(index)" v-if="index === items.length - 1">Add Field</button>
    </div>
  </div>
</template>
  
<script>
import { reactive } from 'vue';

export default {
  setup() {
    const items = reactive([{ value: '' }]); // Initial field

    const addItem = (index) => {
      items.push({ value: '' }); // Add a new field and button
    };

    return {
      items,
      addItem
    };
  }
};
</script>
  