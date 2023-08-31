<template>
  <div class="head-wrap">
    <NuxtLink to="/">
      <img src="@/assets/image/logo.png" />
    </NuxtLink>
  </div>
</template>
<style scoped lang="scss">
.head-wrap {
  height: 80px;
  width: 500px;
  background: #FEDE9D;
  box-shadow: 0 0 8px 0 rgba(0,0,0,.12);

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  z-index: 20;

  img {
    width: auto;
    height: 110px;
    margin-top: -11px;
    cursor: pointer;
  }
}
</style>
