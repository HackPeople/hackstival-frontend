<template>
  <div class="card-group">
<!--    <h1>ListCardGroup</h1>-->
    <CardListItem v-for="(help, index) in helpList" :key="index" :help-info="help"/>
  </div>
</template>
<script>
import CardListItem from "~/components/list/past/CardListItem.vue";
export default{
  components: {
    CardListItem
  },
  data() {
    return {
      helpList: [
        {
          id: 0,
          content: '상세 내용~',
          startTime: "2023/08/31 10:50",
          endTime: "2023/08/31 10:50",
          requestType: "VISITING_CARE",
          startAddress: {
            doName: "서울",
            siName: "강서구",
            dongName: "string"
          },
          destinationAddress: {
            doName: "string",
            siName: "강서구",
            dongName: "string"
          },
          moveType: "ROUND",
          money: 50000,
          oldUserId: "string",
          helperUserId: "string",
          requestStatus: "REQUEST"
        },
        {
          id: 0,
          content: '상세 내용2222',
          startTime: "2023/08/31 10:50",
          endTime: "2023/08/31 10:50",
          requestType: "HOUSEKEEPING",
          startAddress: {
            doName: "string",
            siName: "강서구",
            dongName: "string"
          },
          destinationAddress: {
            doName: "string",
            siName: "마포구",
            dongName: "string"
          },
          moveType: "ROUND",
          money: 45000,
          oldUserId: "string",
          helperUserId: "string",
          requestStatus: "REQUEST"
        },
        {
          id: 0,
          content: '상세 내용333',
          startTime: "2023/08/31 10:50",
          endTime: "2023/08/31 10:50",
          requestType: "HOSPITAL_WITH",
          startAddress: {
            doName: "string",
            siName: "강서구",
            dongName: "string"
          },
          destinationAddress: {
            doName: '',
            siName: '강서구',
            dongName: ''
          },
          moveType: "DIRECT",
          money: 30000,
          oldUserId: "string",
          helperUserId: "string",
          requestStatus: "ACCEPTED"
        },
        {
          id: 0,
          content: '상세 내용333',
          startTime: "2023/08/31 10:50",
          endTime: "2023/08/31 10:50",
          requestType: "EDUCATION",
          startAddress: {
            doName: "string",
            siName: "강서구",
            dongName: "string"
          },
          destinationAddress: {
            doName: '',
            siName: '강서구',
            dongName: ''
          },
          moveType: "DIRECT",
          money: 30000,
          oldUserId: "string",
          helperUserId: "string",
          requestStatus: "CONFIRMED"
        },
        {
          id: 0,
          content: '상세 내용333',
          startTime: "2023/08/31 10:50",
          endTime: "2023/08/31 10:50",
          requestType: "WALK_WITH",
          startAddress: {
            doName: "string",
            siName: "강서구",
            dongName: "string"
          },
          destinationAddress: {
            doName: '',
            siName: '강서구',
            dongName: ''
          },
          moveType: "DIRECT",
          money: 30000,
          oldUserId: "string",
          helperUserId: "string",
          requestStatus: "CONFIRMED"
        },
      ]
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