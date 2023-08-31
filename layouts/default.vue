<template>
  <div id="app" class="main">
    <Header />
    <div class="inner">
      <Nuxt />
    </div>
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
<style scoped lang="scss">
.main {
  background-color: #FBFBFB;
  width: 500px;
  margin: auto;
  height: 100vh;

  .inner {
    position: relative;
    top: 80px;
    padding-bottom: 65px;
    box-sizing: border-box;
  }
}
</style>
