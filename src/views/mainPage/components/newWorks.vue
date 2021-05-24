<template>
  <div class="newWorks_body">
    <!-- 最新作品标题 -->
    <img
      src="../../../assets/img/newWorks.png"
      class="newWorks_img"
      :class="{phone_newWorks_img: isPhone}"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false">
    <!-- 展示框 -->
    <div v-if="!isPhone" class="newWorks_div">
      <!-- 框体组件 -->
      <div
        v-for="item in newWorksInfo"
        :key="item.key"
        class="works_box">
        <div class="title">{{ item.name }}</div>
        <div class="works_body"></div>
      </div>
    </div>
    <div v-else class="newWorks_div">
      <!-- 移动端框体组件 -->
      <div
        v-for="item in newWorksInfo"
        :key="item.key"
        class="phone_works_box">
        <div class="phone_title">{{ item.name }}</div>
        <div class="phone_works_body">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'newWorks',
  props: [ 'newWorksInfo', 'isPhone']
}
</script>

<style scoped>
  .newWorks_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    padding-bottom: 3rem;
  }
  .newWorks_img {
    width: 15%;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .phone_newWorks_img {
    width: 25%;
  }
  .newWorks_div {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-evenly;
    background: #FAFAFA;
    width: 90%;
    margin-top: 1rem;
    padding-top: 2rem;
  }
  .works_box {
    display: flex;
    flex-direction: column;
    width: 45%;
    margin-bottom: 2rem;
  }
  .phone_works_box {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-bottom: 2rem;
  }
  .title {
    font-size: 2rem;
  }
  .phone_title {
    font-size: 2.8rem;
  }
  .works_body {
    width: 100%;
    height: 10rem;
    background: rgb(233, 233, 233);
    margin-top: 1rem;
  }
  .phone_works_body {
    width: 100%;
    height: 10rem;
    background: rgb(233, 233, 233);
    margin-top: 1rem;
  }
</style>