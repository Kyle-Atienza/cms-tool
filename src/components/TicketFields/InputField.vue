<template>
  <div class="flex gap-3">
    <input
      type="text"
      :placeholder="`Enter ${name} Here`"
      class="input input-bordered w-full w-full bg-white"
      :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="flex gap-3">
      <button class="btn" :disabled="!isURL(modelValue)" @click="openURL">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-box-arrow-up-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
          />
          <path
            fill-rule="evenodd"
            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
          />
        </svg>
      </button>
      <button class="btn" :disabled="modelValue === ''" @click="copyValue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-clipboard-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import isURL from 'validator/lib/isURL'
import { computed } from 'vue';

export default {
  props: {
    name: String,
    modelValue: String,
  },
  setup(props) {
    const fieldValue = computed(() => props.modelValue)

    const openURL = () => {
      window.open(fieldValue.value, '_blank')
    }

    const copyValue = () => {
      navigator.clipboard.writeText(fieldValue.value)
    }
    
    return {

      isURL,
      openURL,
      copyValue
    }
  }
}
</script>