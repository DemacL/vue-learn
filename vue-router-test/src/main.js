import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import About from './components/About'
import Home from './components/Home'



Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [{
  path:'/',
  redirect: '/home'
},{
    path:'/home',
    component: Home
},{
  path:'/about',
  component: About
},]

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
