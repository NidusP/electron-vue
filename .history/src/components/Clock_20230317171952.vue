<script setup lang="ts">
import { ref } from 'vue'

const hours = ref([{
  hour: 'Ⅰ',
  // ⅩⅡⅢ
}, {
  hour: 'Ⅱ',
}, {
  hour: 'Ⅲ',
}, {
  hour: 'Ⅳ',
}, {
  hour: 'Ⅴ',
}, {
  hour: 6,
}, {
  hour: 7,
}, {
  hour: 8,
}, {
  hour: 9,
}, {
  hour: 10,
}, {
  hour: 11,
}, {
  hour: 12,
}])
</script>

<template>
  <div class="clock">
    <div class="clock-plate">
      <span class="h-pointer Ⅲ">1</span>
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
