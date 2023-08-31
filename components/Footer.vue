<template>
  <div>
    <ul>
      <li v-for="(item, idx) in list" :key="idx" :class="isActive(item) && 'active'" @click="goRouter(item)">
        <span class="material-icons-outlined">
          {{ item.icon }}
        </span>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    active() {
      return true
    }
  },
  data() {
    return {
      list: [
        {
          name: '홈',
          icon: 'home',
          link: '/',
        },
        {
          name: '목록',
          icon: 'list',
          link: '/past/list',
        },
        {
          name: '내정보',
          icon: 'person',
          link: '#',
        }
      ]
    }
  },
  methods: {
    isActive(item) {
      return this.$route.path === item.link;
    },
    goRouter(item) {
      if(item.link === '#') return false
      else this.$router.push(item.link)
    }
  }
}
</script>
<style scoped lang="scss">
div {
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  display: block;
  width: 500px;
  height: 65px;
  background-color: #fff;
  z-index: 20;
  border-top: 1px solid #E9E8E2;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;

    li {
      margin: 5px;
      padding: 0 20px;
      text-align: center;
      cursor: pointer;
      color: #000;

      &.active {
        color: #503D32;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
  span {
    font-size: 36px;
  }
}
</style>
