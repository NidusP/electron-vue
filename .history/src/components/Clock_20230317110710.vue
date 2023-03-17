<script setup lang="ts">
import { ref } from 'vue'


const count = ref(0)
const click = () => {
  count.value++
  console.log('click')
}
</script>

<template>
  asd
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
