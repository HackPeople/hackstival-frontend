<template>
  <div class="card-group">
    <CardListItem v-for="(help, index) in helpList" :key="index" :help-info="help" :is-helper="isHelper"/>
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
    },
    isHelper: {
      type: Boolean,
      default: false
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