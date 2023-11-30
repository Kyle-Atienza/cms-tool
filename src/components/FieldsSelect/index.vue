<template>
  <div class="flex flex-wrap mt-4 gap-2" v-if="fields">
    <button
      v-for="(field, index) in fields"
      :class="['btn', isSelected(field.name) ? 'bg-primary' : '']"
      :key="index"
      @click="onSelectField(field)"
    >
      {{ field.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    fields: Array
  },
  emits: ['updateFields'],
  setup(props, { emit }) {
    const isSelected = (field) => {
      return props.fields?.find((need) => need.name === field)?.selected
    }

    const onSelectField = (field) => {
      emit('updateFields', props.fields.findIndex((need) => need.name === field.name))
    }

    return {
      isSelected,
      onSelectField
    }
  }
}
</script>