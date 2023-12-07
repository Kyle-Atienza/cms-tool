<template>
  <div class="flex">
    <div class="w-[420px] flex flex-col min-w-[280px] h-screen sticky top-0 bg-white p-5 overflow-scroll">
      <div class="flex flex-col">
        <div class="overflow-auto">
          <ticket-name />
          <div class="divider"></div>
          <!-- <ticket-badges class="mt-4" /> -->
          <div class="flex flex-col border-2 p-4 rounded-xl mt-4">
            <p class="text-2xl leading-[1em]">Needs</p>
            <fields-select
              :fields="ticketNeeds"
              @updateFields="(index) => onAddField(index)"
            />
          </div>
          <!-- <div class="flex flex-col border-2 p-4 rounded-xl mt-4">
            <p class="text-2xl leading-[1em]">Slug</p>
            <slug-fields class="mt-4" />
          </div> -->
        </div>
        <div class="flex flex-col gap-1/2">
          <div class="flex gap-2">
            <button class="btn mt-4 flex-1 btn-primary" @click="onCopyComment">Generate</button>
            <button class="btn mt-4 flex-1 btn-error" @click="setInitialFields">Reset</button>
          </div>
        </div>
      </div>  
      <div class="mt-4 flex-1 h-1/2">
        <rich-text class="" ref="richText" />
        <button class="btn mt-4 w-full btn-primary" @click="onCopyComment">Copy Comment</button>
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
import { 
  TicketName,
  TicketBadges,
  FieldsSelect,
  TicketFields,
  SlugFields,
  RichText 
} from './components'

import { flattenObjectArrayRecursive } from './helpers/arrayHelper'
import { getCommentFromFields } from './helpers/ticketHelper'

import { fields } from './constants/needs'

import { ref, watch, onMounted, onUnmounted } from 'vue'

export default {
  components: {
    TicketName,
    TicketBadges,
    FieldsSelect,
    SlugFields,
    RichText,
    TicketFields
  },
  setup() {
    const richText = ref(null)

    const ticketNeeds = ref([])

    const isSelected = (field) => {
      return ticketNeeds.value?.find((need) => need.name === field)?.selected
    }

    const onAddField = (fieldIndex) => {
      ticketNeeds.value[fieldIndex].selected = !ticketNeeds.value[fieldIndex].selected;
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
      // console.log(JSON.parse(sessionStorage.getItem('ticket')))
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
