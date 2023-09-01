<template>
  <div class="profile-inner-wrap">
    <img class="image" :src="helperInfo.profileImage"/>
    <div class="info-card">
      <p class="name">{{helperInfo.userName}}</p>
      <p class="id">{{helperInfo.userId}}</p>
      <div class="icon-group">
        <button class="circle-button purple">
          <span class="material-icons-outlined button-icon">
            list
          </span>
        </button>
        <button class="circle-button blue">
          <span class="material-icons-outlined button-icon">
            chat
          </span>
        </button>
        <button class="circle-button green">
          <span class="material-icons-outlined button-icon">
            call
          </span>
        </button>
      </div>
      <div class="score">
        <img class="rice" src="@/assets/image/free-icon-rice-129356.png"/>
        <img class="rice" src="@/assets/image/free-icon-rice-129356.png"/>
        <img class="rice" src="@/assets/image/free-icon-rice-129356.png"/>
        <img class="rice" src="@/assets/image/free-icon-rice-129356.png"/>
        <img class="rice" src="@/assets/image/free-icon-rice-129356.png"/>
      </div>
    </div>
    <div class="button-wrap">
      <button class="select-button select-button-1" @click="accept">
        수락하기
      </button>
      <button class="select-button select-button-2" @click="goBack">
        목록으로
      </button>
    </div>

    <b-modal id="bv-modal-example" hide-footer>
      <div class="d-block text-center">
        <h3>수락되었습니다!</h3>
      </div>
      <b-button class="mt-3" block @click="close">확인</b-button>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    helperInfo: {
      type: Object,
      default: () => {}
    },
    helperId: {
      type: String,
      default: '0'
    },
    helpId: {
      type: String,
      default: '0'
    }
  },
  methods: {
    async accept() {
      try {
        await this.$axios.$put(`/api/help/confirm?helpId=${this.helpId}&helperId=${this.helperId}`)
        this.$bvModal.show('bv-modal-example')
      } catch(e){
        console.log('에러 발생', e)
      }
    },
    goBack() {
      history.back()
    },
    close() {
      this.$bvModal.hide('bv-modal-example')
      this.$router.push('/past/list')
    }
  }
}
</script>
<style scoped>
.profile-inner-wrap {
  display: flex;
  height: 100%;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.image {
  height: 100px;
  border-radius: 50%;
  z-index: 10;
}

.info-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  margin-top: -50px;
  height: 400px;
  width: 80%;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  box-shadow: -1px 3px 15px 0 rgba(0,0,0,.06);
}

.name{
  font-weight: bold;
  font-size: 32px;
  padding-bottom: 10px;
}

.id{
  color: gray;
  padding-bottom: 40px;
}

.phone-number{
  display: flex;
  align-items: center;
}

.icon-group{
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

.circle-button{
  height: 60px;
  width: 60px;
  margin: 10px;
  border: 0;
  background-color: transparent;
  border-radius: 50%;
  color: white;
}

.button-icon{
  font-size: 32px;
  font-weight: bolder;
}

.purple{
  background-color: #593FD4;
}

.purple:hover{
  background-color: #391CCA;
  cursor: pointer;
}

.blue{
  background-color: #1275D3;
}

.blue:hover{
  background-color: #075EB2;
  cursor: pointer;
}

.green{
  background-color: #12C764;
}

.green:hover{
  background-color: #00AD50;
  cursor: pointer;
}

.rice{
  margin: 5px;
  height: 40px;
}

.button-wrap{
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.select-button{
  margin: 10px;
  height: 60px;
  width: 200px;
  border: 0;
  border-radius: 20px;
  font-size: 20px;
}

.select-button-1{
  color: gray;
  background-color: #FFE47A;
}

.select-button-1:hover{
  background-color: #E2BC50;
  cursor: pointer;
}

.select-button-2{
  color: gray;
  background-color: white;
  border: solid 3px #E2BC50;
}

.select-button-2:hover{
  color: gray;
  background-color: transparent;
  border: solid 3px #E2BC50;
  cursor: pointer;
}

</style>