<script setup lang="ts">
import { ref } from 'vue'

const hours = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

const date = ref('')
setInterval(() => {
  date.value = (new Date()).toLocaleString()
}, 500)

</script>

<template>
  <div class="clock">
    {{ date }}
    <!-- <div class="clock-plate">
          <span v-for="hour in hours" :class="['h-pointer', `${hour}`]">{{ hour }}</span>
        </div> -->
  </div>
</template>

<style scoped lang="scss">
.clock {
  font-size: 24px;
  color: rgb(255, 88, 88);
}
</style>
