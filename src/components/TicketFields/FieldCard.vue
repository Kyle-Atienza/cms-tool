<template>
  <div>
    <dialog id="my_modal_1" ref="newSubFieldDialog" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Enter Your New Field's Name!</h3>
        <input
          type="text"
          class="input input-bordered w-full mt-3 w-full bg-white"
          v-model="newSubFieldName"
          tabindex="1"
        />
        <div class="mt-4 flex justify-end gap-2">
          <button
            class="btn btn-success"
            tabindex="2"
            @click="onAddSubField"
            @keydown.enter="onAddSubField"
          >
            confirm
          </button>
          <button class="btn btn-error" @click="newSubFieldDialog.close()">close</button>
        </div>
      </div>
    </dialog>
    <div class="flex justify-between items-center">
      <p class="text-xl leading-[1em]">{{ name }}</p>
      <div class="flex gap-2">
        <button
          :class="['btn btn-sm normal-case', !showFields ? 'bg-secondary' : '']"
          @click="showFields = !showFields"
        >
          <span class="flex gap-2" v-if="showFields">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-eye-slash-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
              />
              <path
                d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
              />
            </svg>
            Hide Values
          </span>
          <span class="flex gap-2" v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path
                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
              />
            </svg>
            Show Values
          </span>
        </button>
        <button class="btn btn-sm normal-case" @click="onCreateSubField">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-return-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
            />
          </svg>
          Add Subfield
        </button>
        <button v-if="parent" class="btn btn-sm normal-case" @click="onCreateSubField">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-return-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
            />
          </svg>
          Open Sitecore
        </button>
        <button v-if="!parent" class="btn btn-sm btn-error" @click="$emit('delete', name)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-for="(field, index) in modelValue" :key="index" class="flex items-center">
      <div class="mt-3 w-full">
        <input-field
          :name="field.name"
          v-model="field.value"
          v-if="field.parentField || showFields"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { sitecore } from '../../constants/links'

import InputField from './InputField.vue'

import { ref, onMounted, watch } from 'vue'

export default {
  props: {
    name: String,
    subFields: Array,
    parent: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Array,
      default: () => [
        {
          name: 'Direct Link',
          value: ''
        }
      ]
    }
  },
  components: {
    InputField
  },
  emits: ['update:modelValue', 'delete'],
  setup(props, { emit }) {
    const fields = ref(null)
    const newSubFieldDialog = ref(null)
    const newSubFieldName = ref('')
    const showFields = ref(true)
    const showDialog = ref(false)
    const sitecoreUrl = ref('')

    onMounted(() => {
      fields.value = props.modelValue
      // console.log(fields.value)
    })

    const onCreateSubField = () => {
      newSubFieldDialog.value.showModal()
    }

    const onAddSubField = () => {
      const newField = fields.value
        .filter((field) => !field.parentField)
        .map((field) => ({
          name: field.name,
          value: ''
        }))

      if (newSubFieldName.value) {
        const multiFields = newSubFieldName.value.split(',')

        if (multiFields.length) {
          multiFields.forEach((multiField) => {
            props.subFields.push({
              name: multiField,
              value: newField,
              subFields: []
            })
          })
        } else {
          props.subFields.push({
            name: newSubFieldName.value,
            value: newField,
            subFields: []
          })
        }
        newSubFieldDialog.value.close()
        newSubFieldName.value = ''

        showFields.value = false
      } else {
        alert('Please add a name to your new field')
      }
    }

    watch(
      () => sessionStorage.getItem('brand'),
      (brand) => {
        console.log(brand)
      }
    )

    return {
      fields,
      newSubFieldDialog,
      newSubFieldName,
      showFields,
      sitecore,

      onCreateSubField,
      onAddSubField
    }
  }
}
</script>
