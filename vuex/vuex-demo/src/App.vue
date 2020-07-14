<template>
<div id="app">
  <h3>普通版状态管理</h3>
  <counter></counter>
  <h3>Vuex版状态管理</h3>
  <counter-vuex></counter-vuex>
</div>
</template>

<script>
import Counter from './components/Counter'
import CounterVuex from './components/Counter-Vuex'
export default {
  name: 'App',
  components: {
    Counter,
    CounterVuex
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  text-align: center;
}
</style>
