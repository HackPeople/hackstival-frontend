<template>
  <div style="height: 100%">
    <div class="area">
      <div class="form">
        <div>
          <div>
            <p>이름</p>
            <span>변희준</span>
          </div>
          <div>
            <p>전화번호</p>
            <span>010-2723-5038</span>
          </div>
          <div>
            <p>자기소개</p>
            <span>제가 교육은 기가막히게 함</span>
          </div>
          <div>
            <p>평균 공기 밥그릇</p>

          </div>
        </div>
        <div>
          <div>
            <p>세부내용</p>
            <span>스마트폰 사진첩 관련 교육 요청합니다.</span>
          </div>
          <div>
            <p>도움 일시, 방법</p>
            <span>시작일 : 2023-09-01 </span>
            <span>종료일 : 2023-09-01 </span>
            <span>이동방법 : 도보</span>
          </div>
          <div>
            <p>도착지 주소 / 편도왕복</p>
            <span>출발지 : 서울특별시 성동구 금호동1가 515 </span>
            <span>도착지 : 서울특별시 성동구 행당로 84 행당 한진타운 종합상가 </span>
          </div>
          <div>
            <p>용돈 금액</p>
            <span>30000</span>
          </div>
        </div>
      </div>
    </div>
    <div id="map" />
  </div>

</template>

<script>
export default {
  head () {
    return {
      script: [
        {
          src: '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=81c103334e0e15250b4df773fea6c73c'
        }
      ]
    }
  },
  data() {
    return {
      map: null,
      positions: [
        {idx: 97, post_idx: 275, title: "달맞이봉공원", latitude: 37.553564, longitude: 127.0212054},
        {idx: 91, post_idx: 247, title: "카시나아카디움", latitude: 37.5553553, longitude: 127.0298357},
      ]
    };
  },
  mounted() {
    kakao.maps.load(this.initMap);
  },
  methods: {
    initMap() {
      const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.55420082348653, 127.02352269067644), //지도의 중심좌표.
        level: 5, //지도의 레벨(확대, 축소 정도)
      };
      this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


      const imageSrc = 'http://3.36.117.65:3000/_nuxt/assets/image/free-icon.png' // 마커이미지의 주소입니다
      const imageSize = new kakao.maps.Size(28, 29); // 마커 이미지의 이미지 크기 입니다
      const imageOption = { offset: new kakao.maps.Point(8, 27) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption); // 마커 이미지를 생성합니다

      for (let i = 0; i < this.positions.length; i++) {
        const marker = new kakao.maps.Marker({    // 마커를 생성합니다
          map: this.map,
          position: new kakao.maps.LatLng(this.positions[i].latitude, this.positions[i].longitude), // 마커를 표시할 위치
          title: this.positions[i].title, // 마커의 타이틀
          image: markerImage // 마커 이미지
        });

        // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        const content = this.addElement(this.positions[i]);
        const position = new kakao.maps.LatLng(this.positions[i].latitude, this.positions[i].longitude); // 커스텀 오버레이가 표시될 위치입니다
        const customOverlay = new kakao.maps.CustomOverlay({  // 커스텀 오버레이를 생성합니다
          map: this.map,
          position: position,
          // content: content,
          yAnchor: 1
        });
      }
    },
    addElement(item) {
      var customoverlay = document.createElement("div");
      customoverlay.setAttribute("id", "customoverlay");

      const div = document.createElement("div");
      const span = document.createElement("span");
      const newContent = document.createTextNode(item.title);
      span.appendChild(newContent);
      div.appendChild(span);
      customoverlay.appendChild(div);

      customoverlay.classList.add('customoverlay')

      return customoverlay;
    }
  },
}
</script>
<style scoped lang="scss">
.area {
  width: 500px;
  position: relative;
  //top: 80px;
  height: 300px;
  overflow: scroll;

  .form {
    padding: 10px 20px;
    display: flex;
    margin-right: 20px;
    justify-content: space-between;

    &:last-child {
      margin-right: 0;
    }

    >div {

      width: 45%;
      &:last-child {
        margin-bottom: 0;
        width: 50%;
      }
    }
    div {
      margin-bottom: 20px;

      p {
        color: #2478FF;
        margin-bottom: 8px;
      }

      span {
        display: block;
        background-color: #fff;
        width: 100%;
        max-width: 100%;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        padding: 0 0 0 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 18px;
        overflow-x: scroll
      }
    }
  }
}
#map {
  width: 500px;
  height: calc(100% - 300px);
}
.customoverlay {
  border: 0;
  box-shadow: 0px 1px 2px #888;
  position: relative;
  bottom: 38px;
  left: 2px;
  border-radius: 6px;
  float: left;
  cursor: pointer;

  div {
    display: block;
    text-decoration: none;
    text-align: center;
    border-radius: 6px;
    font-weight: bold;
    overflow: hidden;
    color:#fff;
    font-size: 12px;
    //background: $blue url(./arrow_white.png) no-repeat right 12px center;

    span {
      display: block;
      text-align: center;
      background: #fff;
      padding: 8px 14px;
      font-size: 12px;
      font-weight: bold;
      margin-right: 35px;
      color: #000;
      font-family: 'NotoSans Regular', sans-serif;
      white-space: nowrap;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 11px);
    bottom: -11px;
    width: 22px;
    height: 12px;
    //background: url(./vertex_white.png);
  }
}

</style>
