<template>
  <div id="app">
    <router-link to="/home">Go to Home</router-link> |
    <router-link to="/login">Go to Login</router-link> |
    <SimpleComp></SimpleComp>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import SimpleComp from './components/SimpleComp.vue'

export default {
  name: 'App',
  components: {
    SimpleComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
