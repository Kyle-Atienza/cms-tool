<template>
  <div class="flex">
    <div class="w-[500px] min-w-[280px] h-screen sticky top-0 bg-white px-5 py-8">
      <div class="overflow-auto">
        <div class="flex flex-col border-2 p-4 rounded-xl">
          <p class="text-2xl leading-[1em]">Needs</p>
          <div class="flex flex-wrap mt-4 gap-2" v-if="ticketNeeds">
            <button
              v-for="(field, index) in ticketNeeds"
              :class="['btn', isSelected(field.name) ? 'bg-primary' : '']"
              :key="index"
              @click="onAddField(field)"
            >
              {{ field.name }}
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-1/2">
          <button class="btn mt-4 w-full btn-primary" @click="onCopyComment">Get Comment</button>
          <button class="btn mt-4 w-full btn-error" @click="setInitialFields">Reset</button>
        </div>
        <rich-text class="h-[300px] mt-4" ref="richText" />
      </div>
    </div>
    <div class="min-h-screen flex flex-col gap-5 items-center justify-center flex-1">
      <div class="py-24 px-6">
        <ticket-fields
          v-model="ticketNeeds"
          :key="ticketNeeds.filter((need) => need.selected).length"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TicketPage } from './pages'
import { TicketFields, RichText } from './components'

import { flattenObjectArrayRecursive } from './helpers/arrayHelper'
import { getCommentFromFields } from './helpers/ticketHelper'

import { fields } from './constants/needs'

import { ref, watch, onMounted, onUnmounted } from 'vue'

export default {
  components: {
    RichText,
    TicketFields
  },
  setup() {
    const richText = ref(null)

    const ticketNeeds = ref([])
    const comment = ref('')

    const isSelected = (field) => {
      return ticketNeeds.value?.find((need) => need.name === field)?.selected
    }

    const onAddField = (field) => {
      const fieldIndex = ticketNeeds.value.findIndex((need) => need.name === field.name)

      if (!ticketNeeds.value[fieldIndex].selected) {
        ticketNeeds.value[fieldIndex].selected = true
      } else {
        ticketNeeds.value[fieldIndex].selected = false
      }

      saveData()
    }

    const onCopyComment = () => {
      const output = getCommentFromFields(ticketNeeds.value)
      tinymce.get('editor').setContent(output)
    }

    const setInitialFields = () => {
      ticketNeeds.value = ticketNeeds.value.map((field) => ({
        ...field,
        value: field.value.map((value) => ({
          ...value,
          value: ''
        })),
        selected: false,
        subFields: []
      }))
      tinymce.get('editor').setContent('')
    }

    const saveData = () => {
      sessionStorage.setItem('ticket', JSON.stringify(ticketNeeds.value))
    }

    watch(
      () =>
        flattenObjectArrayRecursive(ticketNeeds.value)
          .map((field) => field.value)
          .flat()
          .map((field) => field.value),
      () => {
        saveData()
      }
    )

    onMounted(() => {
      console.log(JSON.parse(sessionStorage.getItem('ticket')))
      ticketNeeds.value = fields

      if (JSON.parse(sessionStorage.getItem('ticket'))) {
        ticketNeeds.value = JSON.parse(sessionStorage.getItem('ticket'))
      } else {
        ticketNeeds.value = fields
      }
    })

    return {
      richText,
      ticketNeeds,
      setInitialFields,
      fields,

      onAddField,
      isSelected,
      onCopyComment,
      saveData
    }
  }
}
</script>
