import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({

  //  数据源
  state: {
    count: 0,
    color: 'lightblue'
  },

  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    changeColor(state) {
      state.color = ['lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgreen'][~~(Math.random() * 5)]
    }
  }

})