<template>
  <div class="card-group">
    <div class="list-item">
      <span :class="computedIconClass">
        {{computedIconContent}}
      </span>
      CardListItem
    </div>
  </div>
</template>
<script>
export default{
  props: {
    helpInfo: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    computedIconClass() {
      return 'material-icons'
    },
    computedIconContent() {
      return 'face'
    }
  },
  head () {
    return {
      link: [
        // Add this
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ],
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style>

.list-item{
  background-color: cadetblue;
  min-height: 80px;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
}

</style>