<script setup lang="ts">
import { ref } from 'vue'

const hours = ref([{
  hour: 1,
}, {
  hour: 2,
}, {
  hour: 3,
}, {
  hour: 4,
}, {
  hour: 5,
}, {
  hour: 6,
}, {
  hour: 7,
}, {
  hour: 7,
}, {
  hour: 7,
}, {
  hour: 7,
}])
</script>

<template>
  <div class="clock">
    <div class="clock-plate">
      <span class="h-pointer one">1</span>
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
      width: 20px;
      height: 20px;
    }

    .one {}
  }

}
</style>
