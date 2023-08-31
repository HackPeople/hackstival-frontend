<template>
  <img class="image" v-if="!isShow" src="~/assets/image/logo2.png"/>
  <Main v-else/>
</template>

<script>
  import Main from '~/components/main'
  export default {
  components: {
    Main
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted(){
    setTimeout(() => {
      this.isShow = true
    },1000)
  }
}
</script>
<style scoped>
.image{
  width: 200%;
  margin-left: -35%;
  margin-top: 20%;
}
</style>
