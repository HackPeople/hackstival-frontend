<template>
  <div class="card-group">
    <CardListItem v-for="(help, index) in helpList" :key="index" :help-info="help"/>
  </div>
</template>
<script>
import CardListItem from "~/components/list/past/CardListItem.vue";
export default{
  components: {
    CardListItem
  },
  props: {
    helpList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>

.card-group{
  display: flex;
  flex-direction: column;
}

</style>