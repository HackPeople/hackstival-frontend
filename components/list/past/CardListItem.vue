<template>
  <div class="card-group">
    <div class="list-item">
      <div class="icon-wrap">
        <span class="icon" :class="getIconClass(helpInfo.requestType)">
          {{getIconContent(helpInfo.requestType)}}
        </span>
      </div>
      <div class="v-line"></div>
      <div class="card-content-wrap">
        <div class="card-desc">{{helpInfo.content}}</div>
        <div class="address">
<!--          <span>{{helpInfo.startAddress.siName}}</span>-->
          <span v-if="helpInfo.moveType === 'ROUND'" class="material-icons address-icon">
            arrow_forward
          </span>
          <span v-else class="material-icons address-icon">
            autorenew
          </span>
          <span>{{helpInfo.destinationAddress.siName}}</span>
        </div>
        <div class="money">용돈&nbsp<span>{{numberWithCommas(helpInfo.money)}}원</span></div>
      </div>
      <div class="card-content-right">
        <span class="vacancy">
          <button v-if="isHelper" class="circle-button green" @click="accept(helpInfo)">
            <span class="material-icons-outlined button-icon">
              done
            </span>
          </button>
        </span>
        <a v-if="helpInfo.requestStatus === 'ACCEPTED'" class="status" :href="`/profile/detail/${helpInfo.helperUserId}?helpId=${helpInfo.id}`" :class="getStatusColor(helpInfo.requestStatus)">{{getStatusName(helpInfo.requestStatus)}}</a>
        <span v-else class="status" :class="getStatusColor(helpInfo.requestStatus)">{{getStatusName(helpInfo.requestStatus)}}</span>
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
    },
    isHelper: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  },
  data() {
    return {

    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getIconClass(requestType) {
      switch (requestType) {
        case 'VISITING_CARE':
          return 'material-icons-outlined'
        case 'HOSPITAL_WITH':
          return 'material-icons-outlined'
        case 'HOUSEKEEPING':
          return 'material-icons-outlined'
        case 'EDUCATION':
          return 'material-icons-outlined'
        case 'WALK_WITH':
          return 'material-icons-outlined'
        default:
          return 'material-icons-outlined'
      }
    },
    getIconContent(requestType) {
      switch (requestType) {
        case 'VISITING_CARE':
          return 'elderly'
        case 'HOSPITAL_WITH':
          return 'local_hospital'
        case 'HOUSEKEEPING':
          return 'volunteer_activism'
        case 'EDUCATION':
          return 'note_alt'
        case 'WALK_WITH':
          return 'escalator_warning'
        default:
          return 'elderly'
      }
    },
    getStatusColor(status) {
      switch (status) {
        case 'REQUEST':
          return 'wait'
        case 'ACCEPTED':
          return 'accept'
        case 'CONFIRMED':
          return 'fin'
        default:
          return ''
      }
    },
    getStatusName(status){
      switch (status) {
        case 'REQUEST':
          return '대기중...'
        case 'ACCEPTED':
          return '승인 대기 > '
        case 'CONFIRMED':
          return '매칭 완료'
        case 'DONE':
          return '완료'
        default:
          return ''
      }
    },
    accept(helpInfo) {
      this.$axios.put(`/api/help/accept?helpId=${helpInfo.id}&helperId=2`)
    }
  }
}
</script>
<style>

.list-item{
  display: flex;
  background-color: white;
  height: 100px;
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
  text-align: end;
}

.status{
  text-decoration-line: none;
  text-align: end;
  padding-right: 10px;
}

.fin{
  color: #5BA49B;
}

.wait{
  color: #E2BC50;
}

.accept{
  color: #913FC1;
}


.circle-button{
  width: 40px;
  height: 40px;
  margin: 10px;
  border: 0;
  background-color: transparent;
  border-radius: 50%;
  color: white;
}

.button-icon{
  font-size: 20px;
  font-weight: bolder;
}

.green{
  background-color: #12C764;
}

.green:hover{
  background-color: #00AD50;
  cursor: pointer;
}


</style>