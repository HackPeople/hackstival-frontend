<!-- Please remove this file from your project -->
<template>
  <div class="main-wrap">
    <p class="category">도움 등록하기</p>

<!--    <input type="text" id="address_kakao" name="address" readonly />-->
<!--    <input type="text" name="address_detail" />-->

    <ul>
      <li v-for="(item, idx) in list" :key="idx">
        <p>{{item.name}}</p>
        <span class="material-icons-outlined">{{item.icon}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // head () {
  //   return {
  //     script: [
  //       {
  //         hid: 'stripe',
  //         src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
  //         defer: true,
  //         // Changed after script load
  //         callback: () => {
  //           window.onload = function() {
  //             document.getElementById("address_kakao").addEventListener("click", function () { //주소입력칸을 클릭하면
  //               //카카오 지도 발생
  //               new daum.Postcode({
  //                 oncomplete: function (data) { //선택시 입력값 세팅
  //                   document.getElementById("address_kakao").value = data.address; // 주소 넣기
  //                   document.querySelector("input[name=address_detail]").focus(); //상세입력 포커싱
  //                 }
  //               }).open();
  //             });
  //           }
  //         }
  //       }
  //     ]
  //   }
  // },
  data() {
    return {
      list: [
        {
          name: '방문요양',
          icon: 'elderly',
          type :''
        },
        {
          name: '병원동행',
          icon: 'local_hospital',
          type :''
        },
        {
          name: '가사도움',
          icon: 'volunteer_activism',
          type :''
        },
        {
          name: '교육진행',
          icon: 'note_alt',
          type :''
        },
        {
          name: '산책동행',
          icon: 'escalator_warning',
          type :''
        },
        {
          name: '기타',
          icon: '',
          type: ''
        }
      ]
    }
  },
}
</script>
<style scoped lang="scss">
.main-wrap {
  padding: 0 30px;

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
