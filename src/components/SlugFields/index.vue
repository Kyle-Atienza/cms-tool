<template>
  <div class="flex flex-col gap-2">
    <div v-for="(item, index) in items" :key="index" class="flex gap-2">
      <input type="text" placeholder="Type here" class="input w-full max-w-xs" v-model="item.value" />
      <template v-if="index === items.length - 1">
        <button @click="addItem" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </button>
      </template>
      <template v-else>
        <button @click="deleteItem(index)" class="btn btn-error">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
          </svg>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const items = reactive([{ value: '' }]); // Initial field

    const addItem = () => {
      items.push({ value: '' }); // Add a new field and button
    };

    const deleteItem = (index) => {
      items.splice(index, 1); // Remove field at the given index
    };

    return {
      items,
      addItem,
      deleteItem
    };
  }
};
</script>
