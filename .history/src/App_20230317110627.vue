<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

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

  <button @click="click">click</button>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
