<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
