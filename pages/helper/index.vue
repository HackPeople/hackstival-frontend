<!-- Please remove this file from your project -->
<template>
  <div class="main-wrap">
    <ul class="total">
      <li>
        <span>총 도움 건수</span>
        <span>{{totalInfo?.totalHelpCount}}</span>
      </li>
      <li>
        <span>8월 도움 건수</span>
        <span>{{totalInfo?.monthHelpCount}}</span>
      </li>
      <li>
        <span>평균 용돈 금액</span>
        <span>{{totalInfo?.totalMoney}}</span>
      </li>
      <li>
        <span>평균 공기밥 그릇</span>
        <span>{{totalInfo?.everageStar}}</span>
      </li>
    </ul>

    <p class="category">도움 신청 내역</p>
    <CardList :help-list="list"/>
  </div>
</template>
<script>
import CardList from "~/components/list/past/CardList.vue";

export default {
  components: {CardList},
  data() {
    return {
      totalInfo: {},
      list: []
    }
  },
  mounted() {
    this.getAllList()
  },
  methods: {
    async getAllList(){
      try {
        this.totalInfo = await this.$axios.$get('/api/helper/statistics?helperId=2')
        this.list = await this.$axios.$get('/api/helper/requests')
      } catch (e) {}
    }
  }
}
</script>
<style scoped lang="scss">
.main-wrap {
  padding: 0 30px;

  .total {
    width: 100%;
    background: white;
    text-align: center;
    border: 1px solid #e5e5e5;
    box-shadow: -1px 3px 15px 0 rgba(0,0,0,.06);

    box-sizing: border-box;
    border-radius: 8px;
    padding: 20px;
    margin: 30px 0;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1.5;
    }
  }

  .category {
    margin-top: 20px;
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
