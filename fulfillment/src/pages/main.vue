<script setup lang="ts">
import axios from "axios";
import {ref} from "vue";

const result = ref<string>('')

const callServer = async () => {
  await axios.get(`/test`)
  .then(response => {
    result.value = response.data
  })
}

</script>

<template>
  <VRow>
    <VCol>
  <VBtn
      @click="callServer"
      color="#aaaaaa">
    통신 테스트
  </VBtn>
    </VCol>
    <VCol>
      {{result}}
    </VCol>
  </VRow>
</template>

<style scoped>

</style>