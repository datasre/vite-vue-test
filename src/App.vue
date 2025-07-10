<!--
 * @Description  : 
 * @Version      : 1.0
 * @Author       : he_jian
 * @Date         : 2025-07-09 15:20:33
 * @LastEditors  : he_jian
 * @LastEditTime : 2025-07-09 16:15:29
 * @FilePath     : \\vite-vue-test\\src\\App.vue
 * Copyright (c) 2025 by he_jian, All Rights Reserved. 
-->
<script setup lang="ts">
import Hello from './components/hello/index.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <Hello />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
