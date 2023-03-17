<script setup lang="ts">
import { ref } from 'vue'

const hours = ref([{
  hour: 1,
},{
  hour: 2,
},{
  hour: 3,
},{
  hour: 4,
},{
  hour: 5,
},{
  hour: 6,
},{
  hour: 7,
}])
</script>

<template>
  <div class="clock">
    <span class="one">1</span>
    <span class="two">2</span>
    <span class="one">3</span>
    <span class="one">4</span>
    <span class="one">5</span>
    <span class="one">6</span>
    <span class="one">7</span>
    <span class="one">8</span>
    <span class="one">9</span>
    <span class="one">10</span>
    <span class="one">11</span>
    <span class="one">12</span>
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
  position: relative;
  .h-pointer {
    position: absolute;
    left: 50%;
    height: 50%;
    width: 20px;
    height: 20px;
  }
  .one {
  }
}
</style>
