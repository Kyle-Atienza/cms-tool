<template>
  <div>
    <div
      v-for="(field, index) in subFields"
      :key="index"
      class="card max-w-[800px] bg-base-100 shadow-xl bg-white p-5 mt-3"
    >
      <field-card
        v-bind="{
          name: field.name,
          subFields: field.subFields
        }"
        v-model="field.value"
        @delete="(subFieldName) => onRemoveSubField(subFieldName)"
      />
      <sub-fields
        v-bind="{
          name: field.name,
          subFields: field.subFields
        }"
      >
      </sub-fields>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import FieldCard from './FieldCard.vue'

import { ref } from 'vue'

export default {
  components: {
    FieldCard
  },
  props: {
    subFields: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const onRemoveSubField = (name) => {
      const index = props.subFields.map((subField) => subField.name).indexOf(name)
      props.subFields.splice(index, 1)
    }

    return {
      onRemoveSubField
    }
  }
}
</script>
