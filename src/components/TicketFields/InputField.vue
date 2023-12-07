<template>
  <div class="flex gap-3">
    <input
      type="text"
      :placeholder="`Enter ${name} Here`"
      class="input input-bordered w-full w-full bg-white"
      :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    />
    
    <div class="flex gap-3">
      <button class="btn" v-if="name === 'Rest ID'" :disabled="!isRestId" @click="testRestId">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
        </svg>
      </button> 
      <button class="btn" :disabled="!isRestID" @click="openURL">
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
      <div :class="[isCopied ? 'tooltip tooltip-open tooltip-success' : '']" :data-tip="isCopied ? 'Copied to Clipboard' : ''">
        <button :class="['btn', isCopied ? 'btn-success' : '']" :disabled="modelValue === ''" @click="copyValue">
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
  </div>
</template>

<script>
import isURL from 'validator/lib/isURL'
import { computed, ref } from 'vue';

export default {
  props: {
    name: String,
    modelValue: String,
  },
  setup(props) {
    const fieldValue = computed(() => props.modelValue)
    const isCopied = ref(false)
    const isRestId = computed(() => {
      let testString = fieldValue.value
      if (testString) {
        if (testString.includes("/id/")) {
            testString = testString.replaceAll(" ", "").replace("/id/", "");
        }
  
        const splitString = testString.split("-")
        if (splitString.length === 5 &&
            splitString[0].length === 8 &&
            splitString[1].length === 4 &&
            splitString[2].length === 4 &&
            splitString[3].length === 4 &&
            splitString[4].length === 12) {
            return true;
        } else {
            return false;
        }
      } else {
        return false
      }
    })

    const openURL = () => {
      window.open(fieldValue.value, '_blank')
    }

    const copyValue = () => {
      navigator.clipboard.writeText(fieldValue.value)
      isCopied.value = true
      setTimeout(() => {
        isCopied.value = false
      }, 1000)
    }

    const testRestId = () => {
      navigator.clipboard.writeText(fieldValue.value.replace(' ', '').replace('/id/', ''))
      window.open('https://promo.wv.betmgm.com/en/promo/p/tools/qa?qa=true', '_blank')
    }
    
    return {
      isCopied,
      isRestId,
      isURL,

      openURL,
      copyValue,
      testRestId,
    }
  }
}
</script>


<!-- function checkStringValidity(inputString) {
  // Check if the string contains "/id/" and remove it
  if (inputString.includes("/id/")) {
      inputString = inputString.replace("/id/", "");
  }

  // Split the string by "-" and check the length of each element
  const splitString = inputString.split("-");
  if (splitString.length === 5 &&
      splitString[0].length === 8 &&
      splitString[1].length === 4 &&
      splitString[2].length === 4 &&
      splitString[3].length === 4 &&
      splitString[4].length === 12) {
      return true;
  } else {
      return false;
  }
}

// Test cases
const testCases = [
  "/id/455fb25b-6ed9-4809-814c-1080979ece58",
  "455fb25b-6ed9-4809-814c-1080979ece58",
  "123-123-123",
  "/id/123-123"
];

testCases.forEach(testCase => {
  console.log(`${testCase} - ${checkStringValidity(testCase)}`);
});
 -->