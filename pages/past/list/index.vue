<template>
<div>
  <CardList/>
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
      const response = await this.$axios.$get('/api/help/all')
      this.lst = response
    }
  }
}
</script>
<style>
</style>