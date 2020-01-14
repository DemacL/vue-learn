<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
    <button @click="goHome">首页</button>
    <button @click="goAbout">关于</button>

  </div>
</template>

<script>

export default {
  name: 'app',
    methods: {
      goHome(){
        this.$router.push('/home');
      },
       goAbout(){
        this.$router.push('/about');
      }
    },
  components: {
  
  }
}
</script>

<style>

</style>
