<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="clock">
    <span class="one"></span>
  </div>
</template>

<style scoped lang="scss">
.clock {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 20px solid #000;
  background-color: #fff;
  box-sizing: border-box;
  .one {
    background-color: #000;
  }
}
</style>
