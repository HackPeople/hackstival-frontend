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
          requestType: "VISITING_CARE",
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
          requestType: "VISITING_CARE",
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
          requestStatus: "REQUEST"
        },
        // {
        //   category: '병원 동행1',
        //   description: '상세 내용~',
        //   date: '2023-03-03',
        //   startTime: '10:00',
        //   endTime: '13:00',
        //   departure: '강서구 핵피 아파트',
        //   arrival: '강서 SNU 병원',
        //   price: 10000
        // }
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