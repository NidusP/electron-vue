<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="clock">
    <span class="one">1</span>
    <span class="one">2</span>
    <span class="one">3</span>
    <span class="one">4</span>
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
  position: relative;
  .h-pointer {
    position: absolute;
    left: 50%;
    height: 50%;
    width: 5px;
    height: 1px;
  }
  .one {
    background-color: #000;
  }
}
</style>
