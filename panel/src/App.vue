<template>
  <div id="app">
  <!--  <Sidebar /> -->
    <router-view />
  </div>
</template>

<script>

import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  height: 100vh !important;
}


</style>
