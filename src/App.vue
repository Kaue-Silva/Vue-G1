<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.typekit.net/jjr2pew.css">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "./style/global.css"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>