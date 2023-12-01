<template>
  <div class="flex flex-col gap-2">
    <input type="text" placeholder="Enter Ticket Name" class="input w-full max-w-xs" v-model="fullName" />
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-sm" @click="copyString(fullName)">
        Copy Full
      </button>
      <button class="btn btn-sm" @click="copyString(sanitizedName)">
        Copy Sanitized
      </button>
      <button class="btn btn-sm" @click="copyString(id)">
        Copy ID
      </button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
 
export default {
  setup() {
    const fullName = ref('')
    const sanitizedName = ref('')
    const id = ref('')

    const copyString = (str) => {
      navigator.clipboard.writeText(str)
    }

    watch(fullName, (str) => {
      const pattern = /[\/\\:*?"<>|,]/g;
      let nameToSanitize = str

      nameToSanitize = nameToSanitize.replace(pattern, '');
      nameToSanitize = nameToSanitize.replaceAll('$', 'USD')
      nameToSanitize = nameToSanitize.replaceAll('%', 'PCT')
  
      sanitizedName.value = nameToSanitize
      id.value = str.split(' ')[0]
    })

    return {
      fullName,
      sanitizedName,
      id,

      copyString,
    }
  }
}
</script>