<template>
  <div class="fin-wrap">
    <img class="image" src="@/assets/image/fin.png"/>
    <button class="select-button select-button-1" @click="goBack">돌아가기</button>
  </div>
</template>
<script>
export default {
  methods: {
    goBack(){
      this.$router.push('/past/list')
    }
  }
}
</script>
<style scoped>
.fin-wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image{
  margin-left: 20px;
  margin-top: 150px;
  width: 150%;
}

.select-button{
  margin-top: -100px;
  height: 60px;
  width: 200px;
  border: 0;
  border-radius: 20px;
  font-size: 20px;
}

.select-button-1{
  color: white;
  background-color: #2d48c3;
}

.select-button-1:hover{
  background-color: #2d48c3;
  cursor: pointer;
}

</style>