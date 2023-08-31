<template>
  <div class="card-group">
    <div class="list-item">
      <div class="icon-wrap">
        <span class="icon" :class="computedIconClass">
          {{computedIconContent}}
        </span>
      </div>
      <div class="v-line"></div>
      <div class="card-content-wrap">
        <div class="card-desc">{{helpInfo.content}}</div>
        <div class="address">
          <span>{{helpInfo.startAddress.siName}}</span>
          <span v-if="helpInfo.moveType === 'ROUND'" class="material-icons address-icon">
            arrow_forward
          </span>
          <span v-else class="material-icons address-icon">
            autorenew
          </span>
          <span>{{helpInfo.destinationAddress.siName}}</span>
        </div>
        <div class="money">용돈<span>{{numberWithCommas(helpInfo.money)}}원</span></div>
      </div>
      <div class="card-content-right">
        <span class="vacancy"></span>
        <span class="status">완료</span>
      </div>
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
  data() {
    return {

    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>
<style>

.list-item{
  display: flex;
  background-color: white;
  height: 80px;
  padding: 15px 10px 15px 10px;
  margin: 10px 20px 10px 20px;
  overflow: hidden;
  border-radius: 12px;
  align-items: center;
  border: 1px solid #e5e5e5;
  box-shadow: -1px 3px 15px 0 rgba(0,0,0,.06);
}

.icon-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
  height: 100%;
  /*background-color: #ffd1eb;*/
}

.list-item .icon{
  font-size: 62px;
}

.v-line {
  border-left : thin solid #e5e5e5;
  min-height : 80px;
  box-shadow: -1px 3px 15px 0 rgba(0,0,0,.06);
}

.card-content-wrap{
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.card-desc{
  font-size: 16px;
  font-weight: bolder;
  padding-bottom: 5px;
}

.money-side{
  width: 25px;
  transform: rotate(90deg);
}

.address{
  font-size: 12px;
  font-weight: lighter;
  padding-bottom: 15px;
}

.address-icon{
  padding-top: 3px;
  font-size: 14px;
  font-weight: lighter;
}

.card-content-right{
  display: flex;
  flex-grow: 4;
  flex-direction: column;
}

.vacancy{
  min-height: 60px;
}

.status{
  color: #e6007e;
  text-align: end;
  padding-right: 10px;
}


</style>