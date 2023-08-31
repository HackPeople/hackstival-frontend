<template>
  <div class="card-group">
    <h1>ListCardGroup</h1>
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
          category: '병원 동행1',
          title: '[강서구] ㅇㅇ병원 방문',
          description: '상세 내용~',
          date: '2023-03-03',
          startTime: '10:00',
          endTime: '13:00',
          departure: '강서구 핵피 아파트',
          arrival: '강서 SNU 병원',
          price: 10000
        },
        {
          category: '병원 동행2',
          title: '[강서구] ㅇㅇ병원 방문',
          description: '상세 내용~',
          date: '2023-03-03',
          startTime: '10:00',
          endTime: '13:00',
          departure: '강서구 핵피 아파트',
          arrival: '강서 SNU 병원',
          price: 10000
        },
        {
          category: '병원 동행3',
          title: '[강서구] ㅇㅇ병원 방문',
          description: '상세 내용~',
          date: '2023-03-03',
          startTime: '10:00',
          endTime: '13:00',
          departure: '강서구 핵피 아파트',
          arrival: '강서 SNU 병원',
          price: 10000
        }
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

.list-item{
  background-color: cadetblue;
  min-height: 80px;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
}

</style>