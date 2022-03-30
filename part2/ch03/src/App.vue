<template>
  <div id="app">
    <HeaderModule></HeaderModule>
    <router-view></router-view>
    <ApiClient></ApiClient>
  </div>
</template>

<script>
import HeaderModule from "./components/HeaderModule.vue"
import ApiClient from './components/ApiClient.vue'

export default {
  name: 'App',
  components: {
    HeaderModule,
    ApiClient
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
