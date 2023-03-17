<script setup lang="ts">
import { ref } from 'vue'

const hours = ref([1,2,3,4,5,6,7,8,9,10,11,12])
</script>

<template>
  <div class="clock">
    <div class="clock-plate">
      <span v-for="hour in hours" :class="['h-pointer', `${hour}`]">{{ hour }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.clock {
  width: 450px;
  height: 450px;
  border-radius: 50%;
  border: 20px solid #000;
  background-color: #fff;
  box-sizing: border-box;

  .clock-plate {
    width: 100%;
    height: 100%;
    position: relative;

    .h-pointer {
      position: absolute;
      left: 50%;
      top: 0;
      height: 50%;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
