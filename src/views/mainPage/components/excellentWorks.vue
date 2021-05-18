<template>
  <div class="excellent_body">
    <!-- MeUmy推荐标题 -->
    <img
      src="../../../assets/img/excellentWork.png"
      class="excellent_img"
      :class="{phone_excellent_img: isPhone}">
    <!-- 展示框 -->
    <div
      class="excellent_div"
      :class="{phone_excellent_div: isPhone}">
      <!-- 框体组件 -->
      <div
        v-for="item in excellWorksInfo"
        :key="item.key"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'excellentWorks',
  props: ['excellWorksInfo', 'isPhone']
}
</script>

<style scoped>
  .excellent_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }
  .excellent_img {
    width: 20%;
  }
  .phone_excellent_img {
    width: 35%;
  }
  .excellent_div {
    background: #FAFAFA;
    width: 40%;
    height: 15rem;
    margin-top: 1rem;
  }
  .phone_excellent_div {
    width: 80%;
  }
</style>