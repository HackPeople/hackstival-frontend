<template>
  <div id="app" class="main">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
.main {
  background-color: #fff;
  width: 500px;
  margin: auto;
  height: 100vh;
  padding-top: 20px;
}
</style>
