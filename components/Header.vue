<template>
  <div class="head-wrap">
      <h1>Header LOGO</h1>
  </div>
</template>
<style scoped lang="scss">
.head-wrap {
  height: 80px;
  width: 500px;
  background: skyblue;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  z-index: 20;

  h1 {
    //margin: 0 0 20px 20px;
    color: orange;
    font-size: 30px;
  }
}
</style>
