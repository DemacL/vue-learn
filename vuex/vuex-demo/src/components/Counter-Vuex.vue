<!-- view 以声明方式将 state 映射到视图 -->
<template>
<div id="count-vuex">

  <p :style="{color:colorA}">{{count}}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="changeColor">color</button>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'Counter-Vuex',
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
    changeColor() {
      this.$store.commit('changeColor')
    }
  },
  // computed: {
  //   count() {
  //     console.log('count');
  //     return this.$store.state.count // this.$store.state.count 不是 this.$store.state.count
  //   },
  //   color() {
  //     return this.$store.state.color
  //   }
  // },
  computed: mapState({
    count: state => state.count,
    // color: state => state.color
    colorA: 'color',
  }),
}
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: 32px;
}

#count-vuex {
  padding: 0 20px;
}

button {
  margin: 0 20px;
}
</style>
