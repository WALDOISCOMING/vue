<template>
  <div id="app">
    <HeaderModule></HeaderModule>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderModule from "./components/HeaderModule.vue"
export default {
  name: 'App',
  components: {
    HeaderModule
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
