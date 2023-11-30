<template>
  <div class="min-w-[500px] max-w-[800px] flex flex-col gap-4">
    <div v-for="(field, index) in fields.filter((field) => field.selected)">
      <div class="card bg-base-100 shadow-xl bg-white p-5">
        <field-card
          v-bind="{
            name: `${field.name} ${field.emoji}`,
            subFields: field.subFields
          }"
          parent
          v-model="field.value"
          @insert="(subField) => field.subFields.push(subField)"
        />
        <div>
          <sub-fields
            v-bind="{
              name: field.name,
              subFields: field.subFields
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

import FieldCard from './FieldCard.vue'
import SubFields from './SubFields.vue'

export default {
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  components: {
    FieldCard,
    SubFields
  },
  setup(props) {
    const fields = ref([])

    onMounted(() => {
      fields.value = props.modelValue
    })

    return {
      fields
    }
  }
}
</script>
