<!-- Please remove this file from your project -->
<template>
  <div class="main-wrap">

    <div class="top">
      <p class="category">도움 등록 내역</p>
      <CardList :help-list="computedHelpList"/>
    </div>

    <p class="category">등록하기</p>
    <ul>
      <li v-for="(item, idx) in list" :key="idx" @click="goRouter(item)">
        <p>{{item.name}}</p>
        <span class="material-icons-outlined">{{item.icon}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import CardList from "~/components/list/past/CardList.vue";

export default {
  components: {CardList},
  data() {
    return {
      helpList: [],
      list: [
        {
          name: '방문요양',
          icon: 'elderly',
          type: 'VISITING_CARE'
        },
        {
          name: '병원동행',
          icon: 'local_hospital',
          type: 'HOSPITAL_WITH'
        },
        {
          name: '가사도움',
          icon: 'volunteer_activism',
          type: 'HOUSEKEEPING'
        },
        {
          name: '교육진행',
          icon: 'note_alt',
          type: 'EDUCATION'
        },
        {
          name: '산책동행',
          icon: 'escalator_warning',
          type: 'WALK_WITH'
        },
        {
          name: '기타',
          icon: '',
          type: 'ETC'
        }
      ]
    }
  },
  computed: {
    computedHelpList() {
      return this.helpList.filter((help) => {
        return help.requestStatus === 'REQUEST' || help.requestStatus === 'ACCEPTED'
      })
    }
  },
  mounted() {
    this.getAllList()
  },
  methods: {
    async getAllList(){
      const response = await this.$axios.$get('/api/help/all')
      this.helpList = response
    },
    goRouter(item) {
      this.$store.commit('add/setCategoryInfo', item)
      this.$router.push(`/add`)
    }
  }
}
</script>
<style scoped lang="scss">
.main-wrap {
  padding: 0 30px;

  .top {
    margin-bottom: 20px;
  }

  .category {
    margin-top: 20px;
    font-size: 22px;
    font-weight: bold;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: calc(50% - 16px);
      background: white;
      height: 204px;
      text-align: center;
      border: 1px solid #e5e5e5;
      box-shadow: -1px 3px 15px 0 rgba(0,0,0,.06);

      box-sizing: border-box;
      border-radius: 12px;
      margin: 0 10px 14px 0;
      padding: 10px;
      cursor: pointer;

      &:nth-child(2n) {
        margin-right: 0;
      }

      p {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }

      span {
        font-size: 72px;
      }
    }
  }
}
</style>
