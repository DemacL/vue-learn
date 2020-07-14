<!-- view 以声明方式将 state 映射到视图 -->
<template>
<div id="count">

  <p>{{count}}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</div>
</template>

<script>
export default {
  name: 'Counter',
  // state 驱动应用的数据源
  data() {
    return {
      count: 0
    }
  },
  // actions 响应在 view 上的用户输入导致的状态变化
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
}
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: 24px;
}

#count {
  padding: 0 20px;
}

button {
  margin: 0 20px;
}
</style>
