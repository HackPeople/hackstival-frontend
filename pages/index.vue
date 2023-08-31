<template>
  <Main/>
</template>

<script>
  import Main from '~/components/main'
  export default {
  components: {
    Main
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ],
    }
  }
}
</script>
