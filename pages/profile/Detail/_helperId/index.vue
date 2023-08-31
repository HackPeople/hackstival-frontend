<template>
  <div class="profile-wrap">
    <DetailInfo :helper-info="helperInfo" :helper-id="$route.params.helperId" :help-id="$route.query.helpId"/>
  </div>
</template>
<script>
import DetailInfo from "@/components/Profile/DetailInfo.vue";
export default{
  components: {
    DetailInfo
  },
  asyncData({route}){
    return {
      helperId: route.params.helperId,
      helpId: route.query.helpId
    }
  },
  data(){
    return {
      helperInfo: {}
    }
  },
  mounted() {
    this.getHelperInfo(this.$route.params.helperId)
  },
  methods: {
    async getHelperInfo(id){
      this.helperInfo = await this.$axios.$get(`/api/user?userId=${id}`)
    }
  }
}
</script>
<style scoped>
.profile-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>