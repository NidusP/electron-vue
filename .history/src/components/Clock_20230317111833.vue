<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="clock"></div>
</template>

<style scoped>
.clock {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 10px solid #000;
  background-color: #fff;
}
</style>
