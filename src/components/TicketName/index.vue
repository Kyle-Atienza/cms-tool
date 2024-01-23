<template>
  <div class="flex flex-col gap-2">
    <input
      type="text"
      placeholder="Enter Ticket Name"
      class="input w-full w-full"
      v-model="fullName"
    />
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-sm" @click="copyString(fullName)">Copy Full</button>
      <button class="btn btn-sm" @click="copyString(sanitizedName)">Copy Sanitized</button>
      <button class="btn btn-sm" @click="copyString(id)">Copy ID</button>
      <details class="dropdown">
        <summary class="btn btn-sm">Convert Case</summary>
        <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li @click="copyString(snakeCaseName)"><a>Snake Case</a></li>
          <li @click="copyString(camelCaseName)"><a>Camel Case</a></li>
          <li @click="copyString(skewerCaseName)"><a>Skewer Case</a></li>
        </ul>
      </details>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'

export default {
  setup() {
    const fullName = ref('')
    const sanitizedName = ref('')
    const snakeCaseName = ref('')
    const camelCaseName = ref('')
    const skewerCaseName = ref('')
    const id = ref('')

    const copyString = (str) => {
      navigator.clipboard.writeText(str)
    }

    watch(fullName, (str) => {
      sessionStorage.setItem('ticketName', fullName.value)

      const pattern = /[\/\\:*?"<>|,–+]/g
      let nameToSanitize = str

      nameToSanitize = nameToSanitize.replace(pattern, '')
      nameToSanitize = nameToSanitize.replaceAll('$', 'USD')
      nameToSanitize = nameToSanitize.replaceAll('%', 'PCT')
      nameToSanitize = nameToSanitize.replaceAll('&', 'And')

      snakeCaseName.value = nameToSanitize.replaceAll(/\s+/g, '_')
      camelCaseName.value = `${nameToSanitize.split(' ')[0].toLowerCase()}${nameToSanitize
        .split(' ')
        .slice(1)
        .join('')}`
      skewerCaseName.value = nameToSanitize.replaceAll(/\s+/g, '-')

      sanitizedName.value = nameToSanitize
      id.value = str.split(' ')[0]
    })

    onMounted(() => {
      const savedName = sessionStorage.getItem('ticketName')
      if (savedName) fullName.value = savedName
    })

    return {
      fullName,
      sanitizedName,
      snakeCaseName,
      camelCaseName,
      skewerCaseName,
      id,

      copyString
    }
  }
}
</script>
