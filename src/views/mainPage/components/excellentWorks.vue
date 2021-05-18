<template>
  <div class="excellent_body">
    <!-- MeUmy推荐标题 -->
    <img
      src="../../../assets/img/excellentWork.png"
      class="excellent_img"
      :class="{phone_excellent_img: isPhone}"
      oncontextmenu="return false"
      onselectstart="return false"
      draggable="false">
    <!-- 展示框 -->
    <div
      class="excellent_div"
      :class="{phone_excellent_div: isPhone}">
      <!-- 框体组件 -->
      <div
        v-for="item in info"
        :key="item.key">
        <videoBox></videoBox>
      </div>
    </div>
  </div>
</template>

<script>
import videoBox from '../../../components/videoBox';

export default {
  name: 'excellentWorks',
  props: ['excellWorksInfo', 'isPhone'],
  components: {
    videoBox
  },
  data() {
    return {
      info: this.excellWorksInfo
    }
  }
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
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .phone_excellent_img {
    width: 35%;
  }
  .excellent_div {
    background: white;
    width: 40%;
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .phone_excellent_div {
    width: 80%;
  }
</style>