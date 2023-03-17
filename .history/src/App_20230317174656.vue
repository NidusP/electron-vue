<script setup lang="ts">
import Clock from './components/Clock.vue'

// @ts-ignore
const electron = window.electron
console.log(electron, 'ipcRenderer -- ipcRenderer')

const click = () => {
  electron.ipcRenderer.send('message', 'this is a click event!', '你好')
  console.log('click')
}
// ipcRenderer.on('recall', (_, ...data) => {
//   console.log(data)
// })
electron.recall((_: any, ...data: any) => {
  console.log(data, 'data data')
})
</script>

<template>
  <Clock  />
</template>

<style scoped>
</style>
