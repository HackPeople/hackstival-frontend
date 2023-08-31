<template>
  <div class="add-wrap">
    <h3>{{ categoryInfo?.name }} 등록</h3>

    <div class="form">
      <div>
        <p>세부내용</p>
        <textarea placeholder="세부 내용을 입력해 주세요. *" v-model="detail"/>
      </div>
      <div>
        <p>도움일시</p>
        <!--  TODO: v-model="date"   -->
      </div>
      <div>
        <p>이동방법</p>
        <ul class="move-list-wrap">
          <li v-for="(item, idx) in moveList" :key="idx">
            <label :for="item.name">{{ item.name }}</label>
            <input :id="item.name" type="radio" v-model="radioValues" :value="item.value">
          </li>
        </ul>
      </div>
      <div>
        <p>도착지주소</p>
        <input type="text" id="address_kakao" name="address" readonly/>
        <input type="text" name="address_detail" placeholder="상세주소를 입력해 주세요. *" v-model="address2"/>
      </div>
      <div v-if="showCross">
        <p>편도왕복</p>
        <input type="checkbox" v-model="cross" />
      </div>
      <div>
        <p>용돈금액</p>
        <input type="number" placeholder="금액을 입력해 주세요. *" v-model="money"/>
      </div>
    </div>

    <button @click="submit" :class="confirm && 'active'">
      등록하기
    </button>
  </div>
</template>
<script>
export default {
  head () {
    return {
      script: [
        {
          hid: 'stripe',
          src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
          defer: true
        }
      ]
    }
  },
  mounted() {
    console.log(true)
    document.getElementById("address_kakao").addEventListener("click", () => { //주소입력칸을 클릭하면
      //카카오 지도 발생
      new daum.Postcode({
        oncomplete: (data) => { //선택시 입력값 세팅
          this.address1 = data.address;
          document.getElementById("address_kakao").value = data.address; // 주소 넣기
          document.querySelector("input[name=address_detail]").focus(); //상세입력 포커싱
        }
      }).open();
    });
  },
  computed: {
    categoryInfo() {
      return this.$store.state.add.categoryInfo
    },
    showCross() {
      return this.categoryInfo.type === 'HOSPITAL_WITH' || this.categoryInfo.type === 'VISITING_CARE'
    }
  },
  data(){
    return{
      moveList: [
        {
          name: '도보',
          value: '도보'
        },
        {
          name: '차량',
          value: '차량'
        },
        {
          name: '무관',
          value: '무관'
        }
      ],
      detail: '', //세부내용
      date: '', //도움일시
      radioValues: '도보',  //이동방법
      address1: '', //도착지주소
      address2: '', //상세주소
      cross: false, //편도왕복
      money: '', //용돈금액

      confirm: false
    }
  },
  watch: {
    detail() {
      this.validate()
    },
    date() {
      this.validate()
    },
    address2() {
      this.validate()
    },
    money() {
      this.validate()
    }
  },
  methods: {
    validate() {
      this.confirm = this.detail && this.date && this.address2 && this.money > 0
    },
    submit() {
      if(this.confirm) {

      }
    }
  }
}
</script>
<style scoped lang="scss">
.add-wrap {
  box-sizing: border-box;
  width: calc(100% - 30px);
  padding: 20px;
  background: #fff;
  box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  margin-top: 10px;
  transform: translateX(-50%);
  position: relative;
  left: 50%;

  h3 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  .form {
    margin-top: 30px;

    div {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }

      p {
        color: #2478FF;
        margin-bottom: 8px;
      }

      textarea {
        width: 100%;
        max-width: 100%;
        height: 120px;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        resize: vertical;
        transition: border .3s;
        font-size: 18px;
      }

      input[type="number"],
      input[type="text"]{
        width: 100%;
        max-width: 100%;
        height: 52px;
        box-sizing: border-box;
        padding: 0 22px 0 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 18px;
      }
      input[type="text"]{
        height: 42px;
        margin-bottom: 6px;
        &:last-child {
          margin-bottom: 0;
        }
      }

      .move-list-wrap {
        width: 100%;
        display: flex;

        li {
          width: 80px;

          label {
            margin-right: -5px;
            cursor: pointer;
          }
          input {
            cursor: pointer;
          }
        }
      }
    }
  }

  button {
    margin-top: 50px;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 999999px;
    cursor: pointer;
    font-size: 16px;
    min-width: 55px;
    min-height: 30px;
    padding: 12px 20px;
    transition: all .5s;
    border: unset;
    box-sizing: border-box;
    outline: unset;
    background-color: #fff;
    border: 2px solid #2d48c3;
    color: #2d48c3;

    &.active {
      background-color: #2d48c3;
      color: #fff;
    }
  }
}
</style>
