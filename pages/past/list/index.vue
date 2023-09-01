<template>
<div>
  <CardList :help-list="list"/>
</div>
</template>
<script>
import CardList from "~/components/list/past/CardList.vue"
export default{
  components: {
    CardList
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getAllList()
  },
  methods: {
    async getAllList(){
      const response = await this.$axios.$get('/help/all')
      this.list = response
    }
  }
}
</script>
<style>
</style>