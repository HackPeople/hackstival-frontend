<!-- Please remove this file from your project -->
<template>
  <div class="main-wrap">
    <p>Categories</p>

<!--    <input type="text" id="address_kakao" name="address" readonly />-->
<!--    <input type="text" name="address_detail" />-->

    <ul>
      <li v-for="(item, idx) in list" :key="idx">
        {{item.name}}
      </li>
    </ul>
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
          defer: true,
          // Changed after script load
          callback: () => {
            window.onload = function() {
              document.getElementById("address_kakao").addEventListener("click", function () { //주소입력칸을 클릭하면
                //카카오 지도 발생
                new daum.Postcode({
                  oncomplete: function (data) { //선택시 입력값 세팅
                    document.getElementById("address_kakao").value = data.address; // 주소 넣기
                    document.querySelector("input[name=address_detail]").focus(); //상세입력 포커싱
                  }
                }).open();
              });
            }
          }
        }
      ]
    }
  },
  data() {
    return {
      list: [
        {
          name: '장소 A',
          icon: '',
          link :''
        },
        {
          name: '장소 B',
          icon: '',
          link :''
        },
        {
          name: '장소 C',
          icon: '',
          link :''
        },
        {
          name: '장소 D',
          icon: '',
          link :''
        },
        {
          name: '장소 E',
          icon: '',
          link :''
        }
      ]
    }
  },
}
</script>
<style scoped lang="scss">
.main-wrap {
  padding: 0 30px;

  p {
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
      width: calc(50% - 8px);
      background: white;
      height: 215px;
      text-align: center;
      border: 1px solid #ccc;
      box-sizing: border-box;
      border-radius: 12px;
      margin: 0 10px 14px 0;
      padding: 10px;
      cursor: pointer;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
}
</style>
