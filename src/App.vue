<template>
  <div id="app">
    <Header />
    <router-view />
    
  </div>
</template>

<script>
import "./style/global.css"

import Header from "./components/Header.vue"

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>